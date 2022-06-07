import React from "react";
import '../styles/header.scss'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <header>
            <h1>{props.title}</h1>
            {props.title === "Daniel Zelfo" ?
                <div id="navigator">
                    <Link to="portfolio">My Portfolio</Link>
                    <a href="/#about">About</a>
                    <a href="/#contact">Contact</a>
                </div>
                :
                <div id="navigator">
                    <Link to="portfolio">My Portfolio</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#contact">Contact</Link>
                </div>
            }
        </header>
    );
}

export default NavBar;