import React from "react";
import './Content.css'
import {Routes, Route} from "react-router-dom"

import {Home} from "../../views/examples/Home";
import {About} from "../../views/examples/About";
import { Parameter } from "../../views/examples/Parameter";
import { NotFound } from "../../views/examples/NotFound";
export const Content = (props:any) => {
    return(
        <div className="Content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Parameter />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )   
}
