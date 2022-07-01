import React from "react";
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

const Header = (props) => {

    return (
        <header id="header" className={styles.header}>
            <h1 className="pageTitle">{props.title}</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/portfolio">My Portfolio</Link>
            </div>
        </header>
    );
}

export default Header;