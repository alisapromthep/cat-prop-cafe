import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';
import paw from '../../assets/icons/paw.png';
import Modal from '../Modal/Modal';
import tutorial from '../../data/tutorial.json';
import aboutProps from '../../data/aboutProps.json';

function NavBar() {

        const tutorialContent =                           
        tutorial.map((step)=>{
                return (
                    <p key={step.id}
                    className='tutorial__step'>
                        {step.id}.
                        {step.content}
                    </p>
                )
            });

        const aboutReactProps = aboutProps.map((info,i)=>{
            return (
                <p key={i} className='tutorial__step'>
                    {info.content}
                </p>
            )
        })


    return (
        <div className='nav'>
            <Link to='/'>
            <img src={paw} alt='cat paw logo' className='cat'/>
            </Link>
            <div>
                <Modal
                buttonName="About Props"
                content={aboutReactProps}
                />
                <Modal
                buttonName="Tutorial"
                content={tutorialContent}
                />
            </div>
        </div>
    )
}

export default NavBar