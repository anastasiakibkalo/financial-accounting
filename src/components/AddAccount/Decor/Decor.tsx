import { FC } from "react";
import { DecorList } from "../config";
import cn from "classnames";

import styles from "./decor.module.scss";

interface IProps {
  isSelectedDecor: number;
  setIsSelectedDecor: (bool: any) => void;
}

const Decor: FC<IProps> = ({ isSelectedDecor, setIsSelectedDecor }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Оформлення</h3>
      <div className={styles.list}>
        {DecorList.map(({ id, mainColor }) => {
          return (
            <div
              className={cn(
                styles.item,
                isSelectedDecor === id && [styles.selected]
              )}
              onClick={() => setIsSelectedDecor(id)}
              key={id}
              style={{ background: mainColor }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Decor;
