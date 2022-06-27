import React, { useEffect, useRef } from "react";
import { useApp } from "../app/App";
import { useParams, useNavigate } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "../styles/project.scss";
import "react-slideshow-image/dist/styles.css";
import data from "../data/portfolio.json";
import ComponentLoader from "../components/ComponentLoader"
import Languages from "../components/Languages";
import ReadMes from "../components/ReadMes";
import YouTubeVids from "../components/YouTubeVids";

const Project = () => {
    const { setTitle } = useApp();

    const { project_name } = useParams();

    const navigate = useNavigate();

    const ref = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (data[project_name] === undefined) 
            navigate("/");
        else
            setTitle(data[project_name].title);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project_name]);

    return (
        <main>
            <div className="section" id="projectDemo">
                <div className="content" ref={ref}>
                    {data[project_name] !== undefined && data[project_name].content.map((e, idx) => (
                            e.type === "component" ?
                                <ComponentLoader name={e.data} key={idx}/>
                            : e.type === "slideshow" ?
                                e.data.length === 1 ?
                                    <div className="each-slide">
                                        <div key={idx} style={{ backgroundImage: `url(${e.data[0].url})` }}>
                                            <span>{e.data[0].caption}</span>
                                        </div>
                                    </div>
                                :
                                    <Slide key={idx}>
                                        {e.data.map((slideImage, idxslide) => (
                                            <div className="each-slide" key={idxslide}>
                                                <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                                                    <span>{slideImage.caption}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </Slide>
                            : e.type === "buttons" ?
                                <div className="buttons" key={idx}>
                                    {e.data.map((btn, idxbtn) => (
                                        <a key={idxbtn} className="projbtn" href={btn.url} target="_blank" rel="noreferrer">{btn.text}</a>
                                    ))}
                                </div>
                            : e.type === "languages" ?
                                <Languages data={e.data} key={idx}/>
                            : e.type === "YouTubeVids" ?
                                <YouTubeVids data={e.data} key={idx} width={ref.current === null ? 560 : ref.current.offsetWidth}/>
                            : e.type === "readmes" ?
                                <ReadMes repos={e.data} key={idx}/>
                            : e.type === "description" && 
                                <div key={idx}>
                                    {
                                    e.data.split("\n").map((data, idxdesc) =>
                                        <p className="description" key={idxdesc}>{data}</p>
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