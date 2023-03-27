import React, { useCallback, useState } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Socials from "../Socials/Socials";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

import styles from "./login.module.scss";

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(`Введіть електрону пошту`),
    password: yup.string().required(`Введіть пароль`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вхід до особистого кабінету</h2>
      {!isForgotPassword ? (
        <>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.input}>
                  <Field
                    name="email"
                    label={"Ел. пошта"}
                    type="email"
                    component={FormInput}
                  />
                </div>
                <div className={styles.input}>
                  <Field
                    name="password"
                    type="password"
                    label={"Пароль"}
                    component={FormInput}
                  />
                </div>
                <div
                  className={styles.forgotPassword}
                  onClick={() => setIsForgotPassword(true)}
                >
                  Забули пароль?
                </div>
                <div className={styles.button}>
                  <button
                    type="submit"
                    className="button"
                    aria-label={`Увійти`}
                  >
                    Увійти
                  </button>
                </div>
              </form>
            )}
          ></Form>
          <Socials />
        </>
      ) : (
        <ForgotPassword setIsForgotPassword={setIsForgotPassword} />
      )}
    </div>
  );
};

export default Login;
