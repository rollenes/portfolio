import React from 'react'

import {NavLink} from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="top-bar">
            <ul>
            <NavLink to="/" exact>
                <li>Projekty</li>
            </NavLink>

            <NavLink to="/aboutMe">
                <li>O mnie</li>
            </NavLink>

            <NavLink to="/contact">
                <li>Kontakt</li>
            </NavLink>
            </ul>
        </nav>
    )
}

export default Menu
