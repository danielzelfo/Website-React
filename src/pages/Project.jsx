import React, {useEffect} from "react";
import { useApp } from "../app/App";
import {useParams} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import '../styles/project.scss';
import 'react-slideshow-image/dist/styles.css'

const Project = () => {
    const {
        setTitle
    } = useApp();

    const {project_name} = useParams();

    useEffect(() => {
        setTitle(project_name)
    } , []);


    const slideImages = [
    {
        url: 'https://imgur.com/sKV54PO.png',
        caption: 'Space'
    },
    {
        url: 'https://imgur.com/XMPcnz1.png',
        caption: 'City'
    },
    {
        url: 'https://imgur.com/fSgnUKW.png',
        caption: 'Dogs'
    }
    ];

    return (
        <main>
			<div className="section" id="projectDemo">
				
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
				<br /><a  className="btn black" href="https://github.com" target="_blank" rel="noreferrer"><span>Open GitHub</span></a><br />
				<p className="description">Some description.</p>
			</div>
		</main>
    );
}

export default Project;