import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';
import paw from '../../assets/icons/paw.png';


function NavBar() {
    return (
        <div className='nav'>
            <Link to='/'>
            <img src={paw} alt='cat paw logo' className='cat'/>
            </Link>
        </div>
    )
}

export default NavBar