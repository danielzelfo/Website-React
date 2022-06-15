import React, {useEffect} from "react";
import '../styles/home.scss';
import Cell from '../components/Cell';
import { Link } from 'react-router-dom';
import { useApp } from "../app/App";

const Content = () => {
    const {
        setTitle
    } = useApp();

    useEffect(() => {
        setTitle("Daniel Zelfo");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    return (
        <main style={{display: "flex", flexDirection: "column", gap: "40px"}}>
            <div className="section" id="aboutme">
                <div>
                    <h2>Software Engineer at<br/>Amazon</h2>
                    <p>Connect with me</p>
                    <div id="socialMediaBlock">
                        <a href="https://www.linkedin.com/in/daniel-zelfo/" target="_blank" rel="noreferrer"><img alt="LinkedIn Logo" src="https://danielzelfo.github.io/img/min/linkedin.png" /></a>
                        <a id="githubLink" href="https://github.com/danielzelfo" target="_blank" rel="noreferrer"><img alt="GitHub Logo" src="https://danielzelfo.github.io/img/min/github.png" /></a>
                    </div>
                    <a href="mailto:me@danielzelfo.com?Subject=Website%20Contact%20Email" >me@danielzelfo.com</a>
                </div>
                <div>
                    <div>
                        <h2>Interests</h2>
                        <ol>
                            <li><p>Full Stack Web Development</p></li>
                            <li><p>Information Retreival / Web Crawlers</p></li>
                            <li><p>Machine Learning / Data Mining</p></li>
                            <li><p>Operating Systems</p></li>
                            <li><p>Computer Networks</p></li>
                            <li><p>Cyber Security</p></li>
                            <li><p>Quantum Computing</p></li>
                        </ol>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <ol>
                            <li><p><span>BS in Computer Science — Algorithms, 2022</span><span>University of California, Irvine</span></p></li>
                            <li><p><span>AS in Mathematics, 2020</span><span>Mt. San Antonio College</span></p></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="section" id="portfolio">
                <h1 className="und">My Portfolio</h1>
                
                <div className="row">
                    <Cell name="sortingAnimations"/>
                    <Cell name="astra"/>
                    <Cell name="wearableWeather"/>
                    <Cell name="mipsSudoku"/>
                </div>
                
                <Link to="portfolio" className="btn black more" style={{marginTop: "20px", textAlign: "center"}}><span>Show More</span></Link>
            </div>
        </main>
    );
}

export default Content;