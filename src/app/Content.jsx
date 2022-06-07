import {Route, Routes} from "react-router-dom";
import React from "react";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Project from "../pages/Project";

const Content = () => {
    
    return (
        <Routes>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/portfolio/:project_name" element={<Project/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

export default Content;