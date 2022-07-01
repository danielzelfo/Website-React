import React, { useRef } from 'react'
import { Slide } from 'react-slideshow-image'
import data from '../data/portfolio.json'
import ComponentLoader from './ComponentLoader'
import Languages from './Languages'
import ReadMes from './ReadMes'
import YouTubeVids from './YouTubeVids'
import styles from '../styles/Project.module.scss'

const Project = (props) => {

    const project_name = props.name;

    const ref = useRef(null);

    return (
        <div className={`section ${styles.projectDemo}`}>
            <div className={styles.projectContent} id="projectContent" ref={ref}>
                {data[project_name] !== undefined && data[project_name].content.map((e, idx) => (
                        e.type === "component" ?
                            <ComponentLoader name={e.data} key={idx}/>
                        : e.type === "slideshow" ?
                            e.data.length === 1 ?
                                <div className={styles.eachSlide}>
                                    <div key={idx} style={{ backgroundImage: `url(${e.data[0].url})` }}>
                                        <span>{e.data[0].caption}</span>
                                    </div>
                                </div>
                            :
                                <Slide key={idx}>
                                    {e.data.map((slideImage, idxslide) => (
                                        <div className={styles.eachSlide} key={idxslide}>
                                            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                                                <span>{slideImage.caption}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Slide>
                        : e.type === "buttons" ?
                            <div className={styles.projButtons} key={idx}>
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
                                    <p className={styles.description} key={idxdesc}>{data}</p>
                                )
                                }
                            </div>
                ))}
            </div>
        </div>
    );
};

export default Project;