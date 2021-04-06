import React from 'react';
import Header from '../components/Header';


function Homepage() {
    return (
        <div className='grid-container'>
                <Header/>
            
                <div className="links">
                <span>links</span>
            </div>
            <div className="Headshot">
                <img alt="my headshot"></img>
            </div>
            <h1>Helloooooo this is homepage</h1>
        </div>
    )
}

export default Homepage;