import React, { useMemo, useState, FC, useEffect } from "react";
import Modal from "components/Modal/Modal";
import AddCategory from "components/AddCategory/AddCategory";
import AddAccount from "components/AddAccount/AddAccount";
import Slider from "./Slider/Slider";

import { IncomeList, BalanceList, ExpensesList } from "./config";

import styles from "./category.module.scss";

import PlusIcon from "images/icons/plus.svg";

interface IProp {
  type: string;
}

const Category: FC<IProp> = ({ type }) => {
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
    <div className={styles.container}>
      <Slider
        list={isAcceptingList}
        setIsOpenAddCategory={setIsOpenAddCategory}
      />
      {isOpenAddCategory && (
        <Modal closeModal={setIsOpenAddCategory}>
          {type === "income" && (
            <AddCategory closeModal={setIsOpenAddCategory} />
          )}
          {type === "balance" && (
            <AddAccount closeModal={setIsOpenAddCategory} />
          )}
          {type === "expenses" && (
            <AddCategory closeModal={setIsOpenAddCategory} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Category;
