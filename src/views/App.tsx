import React from "react";
import { Content } from "../components/layout/Content";
import { Menu } from "../components/layout/Menu";
import './App.css'
import { BrowserRouter } from  'react-router-dom'
export const App = (props:any) => {
    return(
        <div className="App">
            <BrowserRouter>
                <Menu></Menu>
                <Content></Content>
            </BrowserRouter>
        </div>
    )
}
