import React from "react";
import '../styles/header.scss'

const NavBar = (props) => {

    return (
        <header>
            <h1>{props.title}</h1>
            <div className="navigator">
                <a href="portfolio">My Portfolio</a>
                <a href="index.php#about">About</a>
                <a href="index.php#contact">Contact</a>
            </div>
        </header>
    );
}

export default NavBar;