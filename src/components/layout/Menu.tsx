import React from "react";
import './Menu.css'
export const Menu = (props:any) => {
    return(
        <aside className="Menu">
            <nav className="">
                <ul className="">
                    <li className=""><a href='/'>Início</a></li>
                    <li className=""><a href='/'>Sobre</a></li>
                </ul>
            </nav>
        </aside>
    )
}
