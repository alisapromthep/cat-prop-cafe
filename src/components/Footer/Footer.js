import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Built with React</p>
            <Link className='footer__link' to='/attributes'>Icons Attributes</Link>
            <div className='footer__bottom-container'>
                <FaLinkedin className='footer__icons'/>
                <FaGithubSquare className='footer__icons'/>
            </div>
            <p>Made with ♡ by <a href='https://alisapromthep.dev'
            target='_blank'
            rel='noreferer noopener'
            className='footer__link'
            >Alisa</a></p>
        </div>
    )
}

export default Footer