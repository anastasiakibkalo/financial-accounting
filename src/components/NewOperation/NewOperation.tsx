import { useMemo, useState } from "react";

import Actions from "./Actions/Actions";
import Operation from "./Operation/Operation";

import styles from "./new-operation.module.scss";

const NewOperation = () => {
  const [isActiveActions, setIsActiveActions] = useState("expenses");

  const actionsArray = useMemo(
    () => [
      {
        id: 0,
        title: "Витрати",
        type: "expenses",
      },
      {
        id: 1,
        title: "Дохід",
        type: "income",
      },
      {
        id: 2,
        title: "Переказ",
        type: "transfer",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h3 className={styles.title}>Нова операція</h3>
        <Actions
          list={actionsArray}
          setIsActiveActions={setIsActiveActions}
          isActiveActions={isActiveActions}
        />
        <div className={styles.content}>
          <Operation isActiveActions={isActiveActions} />
        </div>
      </div>
    </div>
  );
};

export default NewOperation;
