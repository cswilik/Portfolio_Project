import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink exact to='/projects'>Projects</NavLink></li>
            {/* <li><a href="contact.asp"></a></li> */}
            <li><NavLink exact to='/reachout'>Contact Me</NavLink></li>
        </ul>
    )
}

export default NavBar;