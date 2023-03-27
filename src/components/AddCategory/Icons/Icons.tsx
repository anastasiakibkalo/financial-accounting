import { FC } from "react";
import { IconsList } from "../config";
import cn from "classnames";

import styles from "./icons.module.scss";

interface IProps {
  setIsOpenIconsBlock: (bool: boolean) => void;
  setIsSelectedIcon: (bool: any) => void;
}

const Icons: FC<IProps> = ({ setIsOpenIconsBlock, setIsSelectedIcon }) => {
  const selectIcon = (id) => {
    setIsSelectedIcon(id);
    setIsOpenIconsBlock(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        {IconsList.map(({ id, icon }) => {
          return (
            <div
              key={id}
              className={styles.block}
              onClick={() => selectIcon(id)}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <div
        className={cn("button", styles.button)}
        onClick={() => setIsOpenIconsBlock(false)}
      >
        Повернутись
      </div>
    </div>
  );
};

export default Icons;
