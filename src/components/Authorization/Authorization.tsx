import React, {useState} from "react";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import cn from "classnames"

import styles from "./authorization.module.scss"

const Authorization = () => {

    const [isActiveTab, setIsActivetab] = useState("Login")

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <div className={cn(styles.tab, isActiveTab === "Login" && [styles.active])} onClick={() => setIsActivetab("Login")}>
                    <p>Вхід</p>
                </div>
                <div className={cn(styles.tab, isActiveTab === "Registration" && [styles.active])} onClick={() => setIsActivetab("Registration")}>
                    <p>Реєстрація</p>
                </div>
            </div>
            <div className={styles.content}>
                {isActiveTab === "Login" ? <Login/> : <Registration/>}
            </div>
        </div>
    )
}

export default Authorization