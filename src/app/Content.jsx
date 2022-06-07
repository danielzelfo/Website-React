import {Route, Routes} from "react-router-dom";
import React from "react";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";

const Content = () => {
    
    return (
        <Routes>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

export default Content;