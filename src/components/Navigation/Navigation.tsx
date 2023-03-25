import React from "react";
import Link from "next/link";

import styles from "./navigation.module.scss"

const Navigation = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link href="/">Главная</Link>
            </li>
            <li className={styles.item}>
                <Link href="/review">Обзор</Link>
            </li>
            <li className={styles.item}>
                <Link href="/">Добавить</Link>
            </li>
            <li className={styles.item}>
                <Link href="/">Помощь</Link>
            </li>
            <li className={styles.item}>
                <Link href="/">Настройки</Link>
            </li>
        </ul>
    )
}


export default Navigation