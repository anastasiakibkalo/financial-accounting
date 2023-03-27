import React, { useCallback } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Socials from "../Socials/Socials";

import styles from "./registration.module.scss";

const Registration = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required(`Введіть ваше ім'я`),
    surname: yup.string().required(`Введіть вашу фамілію`),
    email: yup.string().required(`Введіть електрону пошту`),
    password: yup
      .string()
      .required(`Введіть пароль`)
      .oneOf([yup.ref("passwordConfirmation"), null], "Пароль не збігається"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароль не збігається"),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Реєстрація</h2>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input}>
              <Field
                name="name"
                label={"Ваше ім'я"}
                type="text"
                component={FormInput}
              />
            </div>
            <div className={styles.input}>
              <Field
                name="surname"
                label={"Ваша фамілія"}
                type="text"
                component={FormInput}
              />
            </div>
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
            <div className={styles.input}>
              <Field
                name="passwordConfirmation"
                type="password"
                label={"Підтвердіть пароль"}
                component={FormInput}
              />
            </div>
            <div className={styles.button}>
              <button type="submit" className="button" aria-label={`Увійти`}>
                Зареєструватися
              </button>
            </div>
          </form>
        )}
      ></Form>
      <Socials />
    </div>
  );
};

export default Registration;
