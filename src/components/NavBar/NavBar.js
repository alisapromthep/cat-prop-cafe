import React from 'react';
import './NavBar.scss';
import paw from '../../assets/icons/paw.png';

function NavBar() {
    return (
        <div className='nav'>
            <img src={paw} alt='cat paw logo' className='cat'/>
            <p>Help</p>
        </div>
    )
}

export default NavBar