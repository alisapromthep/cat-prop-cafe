import React from 'react';
import './NavBar.scss';
import Popup from 'reactjs-popup';
import paw from '../../assets/icons/paw.png';


function NavBar() {
    return (
        <div className='nav'>
            <img src={paw} alt='cat paw logo' className='cat'/>
        </div>
    )
}

export default NavBar