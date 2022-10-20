import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";
export const Menu = (props:any) => {
    return(
        <aside className="Menu">
            <nav className="">
                <ul className="">
                    <li className=""><Link to='/'>Início</Link></li>
                    <li className=""><Link to='/param'>Page with param</Link></li>
                    <li className=""><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </aside>
    )
}
