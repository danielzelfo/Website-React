import React from "react";
import '../styles/header.scss'

const NavBar = (props) => {

    return (
        <header>
            <h1>{props.title}</h1>
            <div id="navigator">
                <a href="portfolio">My Portfolio</a>
                <a href="/#about">About</a>
                <a href="/#contact">Contact</a>
            </div>
        </header>
    );
}

export default NavBar;