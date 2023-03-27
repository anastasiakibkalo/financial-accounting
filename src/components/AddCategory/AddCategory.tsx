import { useCallback, useState, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Icons from "./Icons/Icons";
import { IconsList } from "./config";
import cn from "classnames";

import styles from "./addCategory.module.scss";

interface IProps {
  closeModal: (bool: boolean) => void;
}

const AddCategory: FC<IProps> = ({ closeModal }) => {
  const [isOpenIconsBlock, setIsOpenIconsBlock] = useState(false);
  const [isSelectedIcon, setIsSelectedIcon] = useState();

  const validationSchema = yup.object().shape({
    name: yup.string().required(`Введіть назву категорії`),
    budget: yup
      .number()
      .positive("Не можна вводити негативне число")
      .required(`Введіть бюджет`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data, isSelectedIcon);
    closeModal(false);
  }, []);

  return (
    <div className={styles.container}>
      {!isOpenIconsBlock ? (
        <>
          <h3 className={styles.title}>Створення</h3>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.item}>
                  <div className={styles.input}>
                    <Field
                      name="name"
                      label={"Категорія доходу"}
                      type="text"
                      extClassName="dark"
                      component={FormInput}
                    />
                  </div>
                  <div
                    className={cn(
                      styles.addIcon,
                      isSelectedIcon && [styles.selected]
                    )}
                    onClick={() => setIsOpenIconsBlock(true)}
                  >
                    {isSelectedIcon &&
                      IconsList.map(({ id, icon }) => {
                        return (
                          id === isSelectedIcon && <span key={id}>{icon}</span>
                        );
                      })}
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.input}>
                    <Field
                      name="budget"
                      label={"Бюджет"}
                      type="text"
                      extClassName="dark"
                      component={FormInput}
                      number
                    />
                  </div>
                </div>

                <div className={styles.button}>
                  <button
                    type="submit"
                    className="button"
                    aria-label={`Увійти`}
                  >
                    Створити
                  </button>
                </div>
              </form>
            )}
          ></Form>
        </>
      ) : (
        <>
          <h3 className={styles.title}>Вибор іконки</h3>
          <Icons
            setIsOpenIconsBlock={setIsOpenIconsBlock}
            setIsSelectedIcon={setIsSelectedIcon}
          />
        </>
      )}
    </div>
  );
};

export default AddCategory;
