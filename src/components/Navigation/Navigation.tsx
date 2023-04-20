import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import styles from "./navigation.module.scss";

const Navigation = () => {
  const router = useRouter();

  const NavigationList = useMemo(
    () => [
      {
        id: 0,
        title: "Головна",
        link: "/",
      },
      {
        id: 1,
        title: "Огляд",
        link: "/review",
      },
      {
        id: 2,
        title: "Додати",
        link: "/new-operation",
      },
      {
        id: 3,
        title: "Допомога",
        link: "/",
      },
      {
        id: 4,
        title: "Налаштування",
        link: "/",
      },
    ],
    []
  );

  return (
    <ul className={styles.list}>
      {NavigationList.map(({ id, title, link }) => {
        return (
          <li
            key={id}
            className={cn(router.pathname == link && [styles.active], [
              styles.item,
            ])}
          >
            <Link href={link}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
