import React from 'react'
import LI from '../LI-In-Bug.png'

function ContactMe() {
    return (
    <div className="contact-div">
        <h1 className="page-text">Lets Connect</h1>
        <h3 className="project-titles">Email</h3>
        <p className="description">cswilik@gmail.com</p>
        <h3 className="project-titles">Other</h3>
        <a className="links" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/cswilik/'>
            <img className="icons" src={LI} alt="LinkedIn Logo"/>
        </a>
        <a className="links" target="_blank" rel="noreferrer" href='https://github.com/cswilik'>
        <i className="fa fa-github fa-3x"></i>
        </a>

    </div>
    )
}

export default ContactMe;