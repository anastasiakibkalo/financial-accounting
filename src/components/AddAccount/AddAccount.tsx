import { useCallback, useState, FC } from "react";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import Icons from "../AddCategory/Icons/Icons";
import ChooseCurrency from "./ChooseCurrency/ChooseCurrency";
import Decor from "./Decor/Decor";
import { IconsList } from "../AddCategory/config";
import { CurrencyList } from "./config";
import { DecorList } from "./config";
import cn from "classnames";

import styles from "./addAccount.module.scss";

interface IProps {
  closeModal: (bool: boolean) => void;
}

const AddAccount: FC<IProps> = ({ closeModal }) => {
  const [isOpenIconsBlock, setIsOpenIconsBlock] = useState(false);
  const [isOpenCurrencyBlock, setIsOpenCurrencyBlock] = useState(false);
  const [isSelectedIcon, setIsSelectedIcon] = useState(null);
  const [isSelectedCurrency, setIsSelectedCurrency] = useState(null);
  const [isSelectedDecor, setIsSelectedDecor] = useState(0);

  const validationSchema = yup.object().shape({
    name: yup.string().required(`Введіть назву категорії`),
    budget: yup.number().typeError(`Введіть цифри`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data, isSelectedIcon);
    closeModal(false);
  }, []);

  return (
    <div className={styles.container}>
      {isOpenIconsBlock && (
        <>
          <h3 className={styles.title}>Вибор іконки</h3>
          <Icons
            setIsOpenIconsBlock={setIsOpenIconsBlock}
            setIsSelectedIcon={setIsSelectedIcon}
          />
        </>
      )}
      {isOpenCurrencyBlock && (
        <>
          <h3 className={styles.title}>Вибор валюти</h3>
          <ChooseCurrency
            setIsOpenCurrencyBlock={setIsOpenCurrencyBlock}
            setIsSelectedCurrency={setIsSelectedCurrency}
          />
        </>
      )}
      {!isOpenIconsBlock && !isOpenCurrencyBlock && (
        <>
          <h3 className={styles.title}>Створення рахунку</h3>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div
                  className={styles.card}
                  style={{ background: DecorList[isSelectedDecor].mainColor }}
                >
                  <div className={styles.item}>
                    <div className={styles.input}>
                      <Field
                        name="name"
                        label={"Введіть назву"}
                        type="text"
                        extClassName="dark"
                        secondaryColor={
                          DecorList[isSelectedDecor].secondaryColor
                        }
                        textColor={DecorList[isSelectedDecor].textColor}
                        component={FormInput}
                      />
                    </div>
                    <div
                      className={cn(
                        styles.addIcon,
                        isSelectedIcon !== null && [styles.selected]
                      )}
                      style={{
                        background: DecorList[isSelectedDecor].secondaryColor,
                        borderColor: DecorList[isSelectedDecor].secondaryColor,
                      }}
                      onClick={() => setIsOpenIconsBlock(true)}
                    >
                      {isSelectedIcon !== null &&
                        IconsList.map(({ id, icon }) => {
                          return (
                            id === isSelectedIcon && (
                              <span
                                key={id}
                                className={cn(
                                  styles.icon,
                                  DecorList[isSelectedDecor].textColor ===
                                    "#353535" && [styles.dark]
                                )}
                              >
                                {icon}
                              </span>
                            )
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
                        secondaryColor={
                          DecorList[isSelectedDecor].secondaryColor
                        }
                        textColor={DecorList[isSelectedDecor].textColor}
                        component={FormInput}
                        number
                      />
                    </div>
                    <div
                      className={cn(
                        styles.addCurrency,
                        styles.addIcon,
                        isSelectedCurrency !== null && [styles.selected]
                      )}
                      style={{
                        background: DecorList[isSelectedDecor].secondaryColor,
                        borderColor: DecorList[isSelectedDecor].secondaryColor,
                      }}
                      onClick={() => setIsOpenCurrencyBlock(true)}
                    >
                      {isSelectedCurrency !== null &&
                        CurrencyList.map(({ id, icon }) => {
                          return (
                            id === isSelectedCurrency && (
                              <span
                                key={id}
                                className={cn(
                                  styles.icon,
                                  DecorList[isSelectedDecor].textColor ===
                                    "#353535" && [styles.dark]
                                )}
                              >
                                {icon}
                              </span>
                            )
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className={styles.decor}>
                  <Decor
                    isSelectedDecor={isSelectedDecor}
                    setIsSelectedDecor={setIsSelectedDecor}
                  />
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
      )}
    </div>
  );
};

export default AddAccount;
