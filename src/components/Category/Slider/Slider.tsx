import React, { FC, useMemo } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Pagination } from "swiper";
import CategoryItem from "components/CategoryItem/CategoryItem";
import SliderPagination from "components/SliderControllers/Pagination/Pagination";
import AddCategory from "components/AddCategory/AddCategory";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./slider.module.scss";

import PlusIcon from "images/icons/plus.svg";

interface IProps {
  list: any;
  setIsOpenAddCategory: (bool: boolean) => void;
  type: string;
}

const Slider: FC<IProps> = ({ list, setIsOpenAddCategory, type }) => {
  const sliderParams = useMemo(
    () => ({
      slidesPerView: 4,
      className: "category-swiper",
      modules: [Pagination],
      pagination: {
        el: `.category-pagination.${type}`,
        clickable: true,
      },
    }),
    []
  );
  return (
    <>
      <Swiper {...(sliderParams as SwiperProps)}>
        {list.map(({ id, title, icon, amount, currency, budget }) => {
          return (
            <SwiperSlide key={id}>
              <CategoryItem
                title={title}
                icon={icon}
                amount={amount}
                currency={currency}
                budget={budget}
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
      <SliderPagination extClassName={`category-pagination ${type}`} />
    </>
  );
};

export default Slider;
