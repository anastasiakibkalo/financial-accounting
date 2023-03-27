import { FC } from "react";

interface IButtonProps {
  extStyles?: object;
  extClassName?: string;
}

const Pagination: FC<IButtonProps> = ({ extClassName }) => {
  return <div className={`swiper-pagination ${extClassName}`} />;
};

export default Pagination;
