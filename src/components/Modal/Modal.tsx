import React, { ReactNode, FC } from "react";
import styles from "./modal.module.scss";

import PlusIcon from "images/icons/plus.svg";

interface IProps {
  children: ReactNode;
  closeModal: (bool: boolean) => void;
}

const Modal: FC<IProps> = ({ children, closeModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.close} onClick={() => closeModal(false)}>
          <PlusIcon />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
