import React from 'react';
import Bed from '../Bed/Bed';
import './Room.scss';
import sleepcat from '../../assets/icons/sleepcat.png';
import boxcat from '../../assets/icons/catinbox.png';

const Room = () => {
    return (
        <section className='room'>
            <p>Resting</p>
            <div className='room__container'>
                <div className='room__bedroom'>
                    <p>Room 1</p>
                    <Bed imgSrc={sleepcat} alt='sleeping cat' nameClass='cat room__sleepingcat'/>
                </div>
                <div className='room__bedroom'>
                    <p>Room 2</p>
                    <Bed/>
                <div className='room__bathroom'>
                    <p>sandbox</p>
                    <img src={boxcat} alt='cat in a box' className='cat room__cat-in-box'/>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Room