import React, { useMemo } from "react";
import styles from "./category.module.scss";
import cn from "classnames";

import CategoryItem from "components/CategoryItem/CategoryItem";

import PigIcon from "images/icons/pig.svg";
import BacketIcon from "images/icons/basket.svg";
import WalletIcon from "images/icons/wallet.svg";
import GiftIcon from "images/icons/gift.svg";
import PlusIcon from "images/icons/plus.svg";

const Category = () => {
  const IncomeList = useMemo(
    () => [
      {
        id: 0,
        title: "Зарплата",
        icon: <WalletIcon />,
        sum: 100,
        currency: "₴",
      },
      {
        id: 1,
        title: "Подарунки",
        icon: <GiftIcon />,
        sum: 0,
        currency: "₴",
      },
      {
        id: 2,
        title: "Інше",
        icon: <BacketIcon />,
        sum: 309.54,
        currency: "₴",
      },
      {
        id: 3,
        title: "Кешбек",
        icon: <PigIcon />,
        sum: 309.54,
        currency: "₴",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {IncomeList.map(({ id, title, icon, sum, currency }) => {
          return (
            <div className={styles.item} key={id}>
              <CategoryItem
                title={title}
                icon={icon}
                sum={sum}
                currency={currency}
              />
            </div>
          );
        })}
        <div className={styles.item}>
          <CategoryItem title="Додати" icon={<PlusIcon />} addCategory={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
