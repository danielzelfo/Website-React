import React from "react";
import '../styles/header.scss'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <header>
            <h1>{props.title}</h1>
            <div id="navigator">
                <Link to="/">Home</Link>
                <Link to="portfolio">My Portfolio</Link>
            </div>
        </header>
    );
}

export default NavBar;