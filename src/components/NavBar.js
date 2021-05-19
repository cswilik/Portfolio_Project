import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li><NavLink exact to='/' className="link" activeClassName="link-active">Home</NavLink></li>
            <li><NavLink exact to='/projects' className="link" activeClassName="link-active">Projects</NavLink></li>
            <li><NavLink exact to='/reachout' className="link" activeClassName="link-active">Contact Me</NavLink></li>
        </ul>
    )
}

export default NavBar;