import React from 'react';
import './NavBar.scss';
import Popup from 'reactjs-popup';
import paw from '../../assets/icons/paw.png';


function NavBar() {
    return (
        <div className='nav'>
            <img src={paw} alt='cat paw logo' className='cat'/>
            <Popup
            trigger ={<button type='button' className='button'>tutorial</button>}
            on='click'
            position='left top'>
                <div className='help__container'>
                    <p>stuff</p>
                </div>
            </Popup>
        </div>
    )
}

export default NavBar