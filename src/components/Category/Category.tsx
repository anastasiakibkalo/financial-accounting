import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Pagination } from "swiper";
import CategoryItem from "components/CategoryItem/CategoryItem";
import SliderPagination from "components/SliderControllers/Pagination/Pagination";
import Modal from "components/Modal/Modal";
import AddCategory from "components/AddCategory/AddCategory";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./category.module.scss";

import PigIcon from "images/icons/pig.svg";
import BacketIcon from "images/icons/basket.svg";
import WalletIcon from "images/icons/wallet.svg";
import GiftIcon from "images/icons/gift.svg";
import PlusIcon from "images/icons/plus.svg";

const Category = () => {
  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);

  const IncomeList = useMemo(
    () => [
      {
        id: 0,
        title: "Зарплата",
        icon: <WalletIcon />,
        budget: 100000,
        currency: "₴",
      },
      {
        id: 1,
        title: "Подарунки",
        icon: <GiftIcon />,
        budget: 0,
        currency: "₴",
      },
      {
        id: 2,
        title: "Інше",
        icon: <BacketIcon />,
        budget: 309.54,
        currency: "₴",
      },
      {
        id: 3,
        title: "Кешбек",
        icon: <PigIcon />,
        budget: 309.54,
        currency: "₴",
      },
    ],
    []
  );

  const sliderParams = useMemo(
    () => ({
      slidesPerView: 4,
      className: "category-swiper",
      modules: [Pagination],
      pagination: {
        el: ".category-pagination",
        clickable: true,
      },
    }),
    []
  );

  return (
    <div className={styles.container}>
      <Swiper {...(sliderParams as SwiperProps)}>
        {IncomeList.map(({ id, title, icon, budget, currency }) => {
          return (
            <SwiperSlide key={id}>
              <CategoryItem
                title={title}
                icon={icon}
                budget={budget}
                currency={currency}
              />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <CategoryItem
            title="Додати"
            icon={<PlusIcon />}
            addCategory={true}
            setIsOpenAddCategory={setIsOpenAddCategory}
          />
        </SwiperSlide>
      </Swiper>
      <SliderPagination extClassName="category-pagination" />
      {isOpenAddCategory && (
        <Modal closeModal={setIsOpenAddCategory}>
          <AddCategory closeModal={setIsOpenAddCategory} />
        </Modal>
      )}
    </div>
  );
};

export default Category;
