import { FC } from "react";
import cn from "classnames";
import styles from "./actions.module.scss";

interface IProps {
  list: any;
  setIsActiveActions: (bool: string) => void;
  isActiveActions: string;
}

const Actions: FC<IProps> = ({ list, setIsActiveActions, isActiveActions }) => {
  return (
    <div className={styles.list}>
      {list.map(({ id, title, type }) => {
        return (
          <div
            className={cn(
              styles.item,
              isActiveActions === type && [styles.active]
            )}
            key={id}
            onClick={() => setIsActiveActions(type)}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Actions;
