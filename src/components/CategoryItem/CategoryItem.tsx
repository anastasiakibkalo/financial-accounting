import React, { FC } from "react";
import styles from "./categoryItem.module.scss";
import cn from "classnames";

interface IProps {
  title: string;
  icon: any;
  sum?: number;
  currency?: string;
  addCategory?: boolean;
}

const CategoryItem: FC<IProps> = ({
  title,
  icon,
  sum,
  currency,
  addCategory,
}) => {
  const convertSum = (sum) => {
    let num = sum.toFixed(2);
    let re = /(?=\B(?:\d{3})+(?!\d))/g;
    let result = num.toString().replace(re, " ").replace(".", ",");
    return result;
  };

  return (
    <div className={cn(styles.container, addCategory && [styles.addCategory])}>
      <div className={styles.title}>{title}</div>
      <div className={styles.icon}>{icon}</div>
      {(sum || sum == 0) && (
        <div className={styles.sum}>
          {convertSum(sum)} {currency}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
