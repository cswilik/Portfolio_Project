import React from 'react';
import Pic from '../hello.jpeg'



function Homepage() {
    return (
        <div className="About-me">
            <h1 className="page-text">Hi, I'm Chelsey!</h1>
            <img className="about-pic" src={Pic} alt="me in a stand"></img>
            <p className="description">Full stack engineer starting a new career in the world of tech.
            I studied art history and have spent most of my time working in museums and cultural institutions.
            I'm a huge proponent of communication and fostering a strong community. 
            </p>
            <h3 className="project-titles">Technical Skills</h3>
            <p className="description"> Javascript, React, Redux, Ruby, Rails, HTML, CSS, Bootstrap. </p>
            <h3 className="project-titles">Hobbies</h3>
            <p className="description"> Hiking, National Parks, knitting, art, film, learning new languages, being a cat and plant mom. </p>
        </div>
    )
}

export default Homepage;