import React, { FC } from "react";
import styles from "./categoryItem.module.scss";
import cn from "classnames";

interface IProps {
  title: string;
  icon: any;
  budget?: number;
  currency?: string;
  addCategory?: boolean;
  setIsOpenAddCategory?: (bool: boolean) => void;
}

const CategoryItem: FC<IProps> = ({
  title,
  icon,
  budget,
  currency,
  addCategory,
  setIsOpenAddCategory,
}) => {
  const convertbudget = (budget) => {
    let num = budget.toFixed(2);
    let re = /(?=\B(?:\d{3})+(?!\d))/g;
    let result = num.toString().replace(re, " ").replace(".", ",");
    return result;
  };

  return (
    <div className={cn(styles.container, addCategory && [styles.addCategory])}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.icon}
        onClick={addCategory && (() => setIsOpenAddCategory(true))}
      >
        {icon}
      </div>
      {(budget || budget == 0) && (
        <div className={styles.budget}>
          {convertbudget(budget)} {currency}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
