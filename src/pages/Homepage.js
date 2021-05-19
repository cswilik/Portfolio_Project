import React from 'react';
import Pic from '../hello.jpeg'



function Homepage() {
    return (
        <div className="About-me">
            <h1 className="page-text">Hi, I'm Chelsey!</h1>
            <img className="about-pic" src={Pic} alt="me in a stand"></img>
            <p>Full stack engineer starting a new career in the world of tech.
            I studied art history and have spent most of my time working in museums/cultural institutions.
            
            I'm a huge proponent of communication and fostering a strong community. 
            
                My skill sets include: Rails, Javascript, React with Hooks, Redux. 
                </p>
        </div>
    )
}

export default Homepage;