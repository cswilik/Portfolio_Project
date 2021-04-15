import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import ProjectsList from '../components/ProjectsList';
import Photo from './Prof Pic.png'

function Homepage() {
    return (
        <div className='grid-container'>
                <Header/>
    
            <div className="Headshot">
                <img className='image' src={Photo} alt="my headshot"></img>
            </div>
            <span className="text-font">Helloooooo this is homepage</span>
            <div className="Bio">
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">Projects</a></li>
                {/* <li><a href="contact.asp"></a></li> */}
                <li><a href="about.asp">Contact Me</a></li>
            </ul>
                <h1>Projects</h1>
                <div><ProjectsList/></div>
            </div>
            <footer> Here is the link to the artist's work:
            http://www.dear-data.com/week-50-a-week-of-iphone-survey
            </footer>
        </div>
    )
}

export default Homepage;