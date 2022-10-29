import React from 'react';
import Bed from '../Bed/Bed';
import './Room.scss';
import sleepcat from '../../assets/icons/sleepcat.png';
import boxcat from '../../assets/icons/catinbox.png';

const Room = () => {
    return (
        <section className='room'>
            <p>Resting</p>
            <Bed imgSrc={sleepcat} alt='sleeping cat' nameClass='cat room__sleepingcat'/>
            <Bed/>
            <div className='bathroom'>
                <img src={boxcat} alt='cat in a box' className='cat room__cat-in-box'/>
            </div>

        </section>
    )
}

export default Room