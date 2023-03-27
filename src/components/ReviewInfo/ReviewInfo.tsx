import React, { useMemo, useState } from "react";
import styles from "./review-info.module.scss";

const ReviewInfo = () => {
  const BalanceList = useMemo(
    () => [
      {
        id: 0,
        title: "Витрати",
        sum: 1000,
        currency: "₴",
      },
      {
        id: 1,
        title: "Баланс",
        sum: 12000.1,
        currency: "₴",
      },
      {
        id: 2,
        title: "Доходи",
        sum: 100,
        currency: "₴",
      },
    ],
    []
  );

  const convertSum = (sum) => {
    let num = sum.toFixed(2);
    let re = /(?=\B(?:\d{3})+(?!\d))/g;
    let result = num.toString().replace(re, " ").replace(".", ",");
    return result;
  };

  return (
    <div className={styles.container}>
      {BalanceList.map(({ id, title, sum, currency }) => {
        return (
          <div className={styles.item} key={id}>
            <span className={styles.title}>{title}</span>
            <span className={styles.sum}>
              {convertSum(sum)} {currency}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewInfo;
