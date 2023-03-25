import React, {ReactNode, FC} from "react";
import Head from 'next/head';
// import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";

import styles from './layout.module.scss';

interface IProps {
    title: string;
    children: ReactNode;
}

const Layout: FC<IProps> = ({title = 'Страница', children}) => {
    return (
        <div className={styles['app']}>
            <Head>
                <title>{title}</title>
            </Head>
            {/* <Header/> */}
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Menu/>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout