import React from "react";
import styles from '../styles/Footer.module.scss';

const Footer = () => {

    return (
        <footer id="footer" className={styles.footer}>
            <p>© {new Date().getFullYear()} Daniel Zelfo</p>
        </footer>
    );
}

export default Footer;