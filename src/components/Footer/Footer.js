import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <p>Built with React</p>
                <Link className='footer__link' to='/attributes'>Icons Attributes</Link>
            </div>
            <div className='footer__right'>
                <div className='footer__icons-container'>
                <a href="https://www.linkedin.com/in/alisa-promthep/"
                target="_blank"
                rel="noreferrer"
                className='footer__link'>
                    <FaLinkedin className='footer__icons'/>
                </a>
                <a 
                href="https://github.com/alisapromthep"
                target="_blank"
                rel="noreferrer"
                className='footer__link'
                >
                    <FaGithubSquare className='footer__icons'/>
                </a>
                </div>
                <p>Made with ♡ by <a href='https://alisapromthep.dev'
                target='_blank'
                rel='noreferer noopener'
                className='footer__link'
                >Alisa</a></p>
            </div>
        </div>
    )
}

export default Footer