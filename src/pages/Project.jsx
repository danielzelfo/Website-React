import React, { useEffect } from "react";
import { useApp } from "../app/App";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "../styles/project.scss";
import "react-slideshow-image/dist/styles.css";
import data from "../data/portfolio.json";
import ProjectLoader from "../components/ProjectLoader"

const Project = () => {
    const { setTitle } = useApp();

    const { project_name } = useParams();

    useEffect(() => {
        setTitle(data[project_name].title);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project_name]);

    return (
        <main>
            <div className="section" id="projectDemo">
                <div className="content">
                    {data[project_name].content.map((e, idx) => (
                            e.type === "component" ?
                                <ProjectLoader name={e.data} key={idx}/>
                            : e.type === "slideshow" ?
                                <Slide key={idx}>
                                    {e.data.map((slideImage, index) => (
                                        <div className="each-slide" key={index}>
                                            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                                                <span>{slideImage.caption}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                            : e.type === "buttons" ?
                                <div className="buttons" key={idx}>
                                    {e.data.map((btn, idx) => (
                                        <a key={idx} className="projbtn" href={btn.url} target="_blank" rel="noreferrer">{btn.text}</a>
                                    ))}
                                </div>
                            : e.type === "description" && 
                                <div>
                                    {
                                    e.data.split("\n").map(data =>
                                        <p className="description" key={idx}>{data}</p>
                                    )
                                    }
                                </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Project;