import React from "react";
import '../styles/home.scss';
import Cell from '../components/Cell';

const Content = () => {
    
    return (
        <main>
            <div id="row1">
                <div className="section" id="aboutSection">
                    <div className="about">
                        <h1 className="und" id="about">About Me</h1>
                        <br />
                        <p>Computer science student at <a href="https://www.ics.uci.edu/" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>UCI</a>.</p>
                        <br /><br />
                    </div>
                    <div className="about">
                        <div id="socialMediaBlock">
                            <a href="https://www.linkedin.com/in/daniel-zelfo/" target="_blank" rel="noreferrer"><img alt="LinkedIn Logo" src="https://danielzelfo.github.io/img/min/linkedin.png" /></a>
                            <a id="githubLink" href="https://github.com/danielzelfo" target="_blank" rel="noreferrer"><img alt="GitHub Logo" src="https://danielzelfo.github.io/img/min/github.png" /></a>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                <br />
            </div>
            <br /><br />
            <div className="section" id="portfolio">
                <h1 className="und">My Portfolio</h1>
                <br />
                
                <div className="row">
                    <Cell name="sortingAnimations"/>
                    <Cell name="astra"/>
                    <Cell name="wearableWeather"/>
                    <Cell name="mipsSudoku"/>
                </div>
                
                <a href="portfolio" className="btn black more" style={{textAlign: "center"}}><span>Show More</span></a>
            </div>
            <br /><br />
            <br />
            <div className="section" id="contact">
                <h1 className="und">Contact Me</h1>
                <br />
                <h2>My email:</h2>
                <br />
                <a href="mailto:me@danielzelfo.com?Subject=Website%20Contact%20Email" >me@danielzelfo.com</a>
                <br />
            </div>
        </main>
    );
}

export default Content;