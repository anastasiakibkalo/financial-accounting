import React, { useMemo, useState, FC, useEffect } from "react";
import Modal from "components/Modal/Modal";
import AddCategory from "components/AddCategory/AddCategory";
import AddAccount from "components/AddAccount/AddAccount";
import Slider from "./Slider/Slider";
import cn from "classnames";

import { IncomeList, BalanceList, ExpensesList } from "./config";

import styles from "./category.module.scss";

import PlusIcon from "images/icons/plus.svg";

interface IProp {
  type: string;
  style?: string;
}

const Category: FC<IProp> = ({ type, style }) => {
  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);
  const [isAcceptingList, setIsAcceptingList] = useState([]);

  useEffect(() => {
    if (type === "income") {
      setIsAcceptingList(IncomeList);
    } else if (type === "balance") {
      setIsAcceptingList(BalanceList);
    } else {
      setIsAcceptingList(ExpensesList);
    }
  }, [type]);

  return (
    <div className={cn(styles.container, style && styles[style])}>
      <Slider
        list={isAcceptingList}
        setIsOpenAddCategory={setIsOpenAddCategory}
        type={type}
        style={style}
      />
      {isOpenAddCategory && (
        <Modal closeModal={setIsOpenAddCategory}>
          {type === "income" && (
            <AddCategory
              category="Категорія доходу"
              closeModal={setIsOpenAddCategory}
            />
          )}
          {type === "balance" && (
            <AddAccount closeModal={setIsOpenAddCategory} />
          )}
          {type === "expenses" && (
            <AddCategory
              category="Категорія витрат"
              closeModal={setIsOpenAddCategory}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Category;
