import { FC, useState, useEffect, useCallback } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import Category from "components/Category/Category";
import cn from "classnames";

import styles from "./operation.module.scss";

import HryvniaIcon from "images/icons/hryvnia_symbol.svg";

interface IProps {
  isActiveActions: string;
}

const Operation: FC<IProps> = ({ isActiveActions }) => {
  const [isContentShow, setIsContentShow] = useState(false);
  const [isTypeOfOperations, setIsTypeOfOperations] = useState(isActiveActions);

  const validationSchema = yup.object().shape({
    sum: yup.number(),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  useEffect(() => {
    setIsContentShow(false);
    setTimeout(() => {
      setIsTypeOfOperations(isActiveActions);
      setIsContentShow(true);
    }, 300);
  }, [isActiveActions]);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form
          className={cn(styles.form, isContentShow && styles.show)}
          onSubmit={handleSubmit}
        >
          {isTypeOfOperations === "expenses" && (
            <>
              <p className={styles.subtitle}>Звідки зроблена трата?</p>
              <Category type="balance" style="light" />
              <p className={styles.subtitle}>На що витратили?</p>
              <Category type="expenses" style="light" />
            </>
          )}
          {isTypeOfOperations === "income" && (
            <>
              <p className={styles.subtitle}>Звідки прийшло?</p>
              <Category type="income" style="light" />
              <p className={styles.subtitle}>Куди прийшло?</p>
              <Category type="balance" style="light" />
            </>
          )}
          {isTypeOfOperations === "transfer" && (
            <>
              <p className={styles.subtitle}>Звідки прийшло?</p>
              <Category type="balance" style="light" />
              <p className={styles.subtitle}>Куди перевели?</p>
              <Category type="balance" style="light" />
            </>
          )}

          <div className={styles.item}>
            <div className={styles.input}>
              <Field
                name="sum"
                type="text"
                label="Введіть суму"
                component={FormInput}
                number
              />
            </div>
            <span className={styles.icon}>
              <HryvniaIcon />
            </span>
          </div>
          <div className={styles.item}>
            <div className={styles.input}>
              <Field
                name="text"
                label={"Введіть комментар"}
                component={Textarea}
              />
            </div>
          </div>

          <div className={styles.button}>
            <button type="submit" className="button" aria-label={`Увійти`}>
              Добавити
            </button>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default Operation;
