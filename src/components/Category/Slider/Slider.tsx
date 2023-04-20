import React, { FC, useMemo } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Grid, Pagination } from "swiper";
import CategoryItem from "components/CategoryItem/CategoryItem";
import SliderPagination from "components/SliderControllers/Pagination/Pagination";
import AddCategory from "components/AddCategory/AddCategory";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import styles from "./slider.module.scss";

import PlusIcon from "images/icons/plus.svg";

interface IProps {
  list: any;
  setIsOpenAddCategory: (bool: boolean) => void;
  type: string;
  style?: string;
}

const Slider: FC<IProps> = ({ list, setIsOpenAddCategory, type, style }) => {
  const sliderParams = useMemo(
    () => ({
      slidesPerView: 4,
      className: "category-swiper",
      modules: [Grid, Pagination],
      pagination: {
        el: `.category-pagination.${type}`,
        clickable: true,
      },
      grid: {
        rows: type == "expenses" ? 4 : 1,
        fill: "row",
      },
    }),
    [type]
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
                style={style}
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
            style={style}
          />
        </SwiperSlide>
      </Swiper>
      <SliderPagination extClassName={`category-pagination ${type}`} />
    </>
  );
};

export default Slider;
