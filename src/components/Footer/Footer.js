import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Built with React</p>
            <Link to='/attributes'>attributes</Link>
            <div className='footer__bottom-container'>
                <FaLinkedin/>
                <FaGithubSquare/>
            </div>
        </div>
    )
}

export default Footer