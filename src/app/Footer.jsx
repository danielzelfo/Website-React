import React from "react";
import '../styles/footer.scss';

const Footer = () => {

    return (
        <footer>
            <p>© {new Date().getFullYear()} Daniel Zelfo</p>
        </footer>
    );
}

export default Footer;