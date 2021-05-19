import React from 'react'
import LI from '../LI-In-Bug.png'

function ContactMe() {
    return (
    <div className="About-me">
        <h1 className="page-text">Lets Connect</h1>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/cswilik/'>
            <img className="icons" src={LI} alt="LinkedIn Logo"/>
        </a>

    </div>
    )
}

export default ContactMe;