import React from 'react';
import Pic from '../funny_pic.jpeg'



function Homepage() {
    return (
        <div className="About-me">
            <h1 className="page-text">Hi, I'm Chelsey!</h1>
            <img className="about-pic" src={Pic} alt="me in a stand"></img>
            <p>Full stack engineer new to the field of tech. I'm a huge proponent of collaboration and  communication. 
                    My skill sets include: Rails, Javascript, React with Hooks, Redux. I don't know what else to say here,
                    but I am trying to make a little paragraph.</p>
        </div>
    )
}

export default Homepage;