import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1> Cat Prop Cafe </h1>
            <Link to="/game/0">start</Link>
        </div>
    )
}

export default HomePage