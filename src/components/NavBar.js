import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li><NavLink exact to='/' className="link" activeClassName="link-active">Home</NavLink></li>
            <li><NavLink exact to='/projects' className="link" activeClassName="link-active">Projects</NavLink></li>
            <li><NavLink exact to='/reachout' className="link" activeClassName="link-active">Contact</NavLink></li>
            <li><a  className="link"  target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1HYPh2JVRera_Q1I1TGqGYc0oHVKeKeef/view?usp=sharing">Resume</a></li>
        </ul>
    )
}

export default NavBar;