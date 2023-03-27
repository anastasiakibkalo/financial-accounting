import React, { ReactNode, useCallback, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";

import styles from "./forgotPassword.module.scss";

interface IProps {
  setIsForgotPassword: (bool: boolean) => void;
}

const ForgotPassword: FC<IProps> = ({ setIsForgotPassword }) => {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required(`Введіть електрону пошту`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
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
          <div
            className={styles.forgotPassword}
            onClick={() => setIsForgotPassword(false)}
          >
            Я згадав свій пароль
          </div>
          <div className={styles.button}>
            <button type="submit" className="button" aria-label={`Увійти`}>
              Відновити пароль
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default ForgotPassword;
