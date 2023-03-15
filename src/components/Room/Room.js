import React from 'react';
import Bed from '../Bed/Bed';
import './Room.scss';
import sleepcat from '../../assets/icons/sleepcat.png';
import greycat from '../../assets/icons/greycat.png';
import {useGame} from '../../contextProvider/GameContext';

const Room = () => {
    const {currTask, appearClass} = useGame();
    



    return (
        <section className='room'>
            <div>
                <p className='room__name'>RoomOne</p>
            </div>
            <div className='room__container'>
                <div className='room__bedroom'>
                    <p className='room__name'>Bedroom One</p>
                    <Bed imgSrc={sleepcat} alt='sleeping cat' nameClass={`cat ${appearClass('taskOne')}`}/>
                </div>
                <div className='room__bedroom'>
                    <p className='room__name'>Toilet</p>
                <div className='room__sandbox'>
                    <img src={greycat} alt='grey cat standing' className={`cat ${appearClass('taskTwo')}`}/>
                    <p className='room__name'>sandbox</p>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Room