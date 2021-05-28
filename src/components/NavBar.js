import React from 'react'
import {NavLink} from 'react-router-dom'
import LI from '../LI-In-Bug.png'


function NavBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink exact to='/cswilik' className="link" activeClassName="link-active">Home</NavLink></li>
                <li><NavLink exact to='/projects' className="link" activeClassName="link-active">Projects</NavLink></li>
                {/* <li><NavLink exact to='/reachout' className="link" activeClassName="link-active">Contact</NavLink></li> */}
                <li><a  className="link"  target="_blank" rel="noreferrer"  href="https://drive.google.com/file/d/1HYPh2JVRera_Q1I1TGqGYc0oHVKeKeef/view?usp=sharing">Resume</a></li>
            </ul>
            {/* <h5 className="project-titles">Lets Connect:</h5> */}
            <br></br>
            <a className="links" target="_blank" rel="noreferrer" href='https://github.com/cswilik'>
                <i className="fa fa-github fa-3x"></i>
            </a>
            <a className="links" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/cswilik/'>
                <img className="icons" src={LI} alt="LinkedIn Logo"/>
            </a>
            <a className="links" target="_blank" rel="noreferrer" href='https://cswilik.medium.com'>
                <i class="fa fa-medium fa-3x" aria-hidden="true"></i>
            </a>
            <p className="link">Email || cswilik@gmail.com</p>
        </div>
    )
}

export default NavBar;