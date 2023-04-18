import { FC } from "react";
import { CurrencyList } from "../config";
import cn from "classnames";

import styles from "./chooseCurrency.module.scss";

interface IProps {
  setIsOpenCurrencyBlock: (bool: boolean) => void;
  setIsSelectedCurrency: (bool: any) => void;
}

const ChooseCurrency: FC<IProps> = ({
  setIsOpenCurrencyBlock,
  setIsSelectedCurrency,
}) => {
  const selectCurrency = (id) => {
    setIsSelectedCurrency(id);
    setIsOpenCurrencyBlock(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        {CurrencyList.map(({ id, title, icon }) => {
          return (
            <div
              key={id}
              className={styles.block}
              onClick={() => selectCurrency(id)}
            >
              <p>{title}</p>
              <span className={styles.icon}>{icon}</span>
            </div>
          );
        })}
      </div>
      <div
        className={cn("button", styles.button)}
        onClick={() => setIsOpenCurrencyBlock(false)}
      >
        Повернутись
      </div>
    </div>
  );
};

export default ChooseCurrency;
