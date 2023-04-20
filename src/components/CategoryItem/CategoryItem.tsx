import React, { FC, useState, useEffect } from "react";
import styles from "./categoryItem.module.scss";
import cn from "classnames";
import classNames from "classnames";

interface IProps {
  title: string;
  icon: any;
  amount?: number;
  budget?: number;
  currency?: string;
  addCategory?: boolean;
  setIsOpenAddCategory?: (bool: boolean) => void;
  style?: string;
}

const CategoryItem: FC<IProps> = ({
  title,
  icon,
  amount,
  budget,
  currency,
  addCategory,
  setIsOpenAddCategory,
  style,
}) => {
  const [isAmountStatus, setIsAmountStatus] = useState("available");

  const convertAmount = (amount) => {
    let num = amount.toFixed(2);
    let re = /(?=\B(?:\d{3})+(?!\d))/g;
    let result = num.toString().replace(re, " ").replace(".", ",");
    return result;
  };
  const convertBudget = (budget) => {
    let re = /(?=\B(?:\d{3})+(?!\d))/g;
    let result = budget.toString().replace(re, " ").replace(".", ",");
    return result;
  };

  useEffect(() => {
    if (budget) {
      const percent = (amount / budget) * 100;
      if (budget < amount) {
        setIsAmountStatus("dangerous");
      }
      if (percent > 95) {
        setIsAmountStatus("dangerous");
      } else if (percent > 55 && percent < 96) {
        setIsAmountStatus("warning");
      } else {
        setIsAmountStatus("available");
      }
    }
  }, [amount]);

  return (
    <div
      className={cn(
        styles.container,
        addCategory && [styles.addCategory],
        style && styles[style]
      )}
    >
      <div className={styles.title}>{title}</div>
      <div
        className={cn(styles.icon, budget && styles[isAmountStatus])}
        onClick={addCategory && (() => setIsOpenAddCategory(true))}
      >
        {icon}
      </div>
      {(amount || amount == 0) && (
        <div className={cn(styles.amount, budget && styles[isAmountStatus])}>
          {convertAmount(amount)} {currency}
        </div>
      )}
      {budget && <div className={styles.budget}>{convertBudget(budget)}</div>}
    </div>
  );
};

export default CategoryItem;
