import React from "react";
import './Content.css'
import {Routes, Route} from "react-router-dom"

import {Home} from "../../views/examples/Home";
import {About} from "../../views/examples/About";
export const Content = (props:any) => {
    return(
        <div className="Content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )   
}
