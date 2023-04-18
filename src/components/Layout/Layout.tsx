import React, { ReactNode, FC, useState } from "react";
import Head from "next/head";
// import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";
import Authorization from "components/Authorization/Authorization";

import styles from "./layout.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<IProps> = ({ title = "Страница", children }) => {
  const [isUserAuthorized, setIsUserAuthorized] = useState(true);

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Header/> */}
      <div className={styles.container}>
        {!isUserAuthorized ? (
          <Authorization />
        ) : (
          <>
            <div className={styles.menu}>
              <Menu />
            </div>
            <div className={styles.content}>{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
