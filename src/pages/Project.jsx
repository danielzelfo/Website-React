import React, { useEffect } from "react";
import { useApp } from "../app/App";
import { useParams } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import '../styles/project.scss';
import 'react-slideshow-image/dist/styles.css'
import data from "../data/portfolio.json";

const Project = () => {
    const {
        setTitle
    } = useApp();

    const { project_name } = useParams();

    useEffect(() => {
        setTitle(data[project_name].title)
    }, []);

    return (
        <main>
            <div className="section" id="projectDemo">
                {data[project_name].content.map((e) => (
                    e.type === "slideshow" ?
                        <Slide>
                            {e.data.map((slideImage, index) => (
                                <div className="each-slide" key={index}>
                                    <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                        <span>{slideImage.caption}</span>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    :( e.type === "buttons" ?
                        <div className="buttons">
                            {
                                e.data.map(btn => (
                                    <a className="projbtn" href={btn.url} target="_blank" rel="noreferrer">{btn.text}</a>
                                ))
                            }
                        </div>
                    : e.type === "description" &&
                        <p className="description">{e.data}</p>
                    )
                ))}
            </div>
        </main>
    );
}

export default Project;