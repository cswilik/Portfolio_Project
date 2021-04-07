import React from 'react';
import Header from '../components/Header';
import Photo from './Prof Pic.png'

function Homepage() {
    return (
        <div className='grid-container'>
                <Header/>
            
            <div className="links">
                <span>links</span>
            </div>
            <div className="Headshot">
                <img className='image' src={Photo} alt="my headshot"></img>
            </div>
            <h1>Helloooooo this is homepage</h1>
            <footer> Here is the link to the artist's work:
            http://www.dear-data.com/week-50-a-week-of-iphone-survey
            </footer>
        </div>
    )
}

export default Homepage;