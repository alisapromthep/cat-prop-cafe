import React from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1 className='home__cafe-name'>Welcome to Cat Prop Cafe</h1>
            <Link to="/game">start</Link>
        </div>
    )
}

export default HomePage