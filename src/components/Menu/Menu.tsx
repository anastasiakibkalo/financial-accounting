import React from "react";
import Navigation from "components/Navigation/Navigation";

import styles from "./menu.module.scss"

const Menu = () => {
    return (
        <div className={styles.container}>
            <Navigation/>
        </div>
    )
}

export default Menu