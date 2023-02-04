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
            <p>RoomOne</p>
            <div className='room__container'>
                <div className='room__bedroom'>
                    <p>Bedroom One</p>
                    <Bed imgSrc={sleepcat} alt='sleeping cat' nameClass={`cat ${appearClass('taskOne')}`}/>
                </div>
                <div className='room__bedroom'>
                    <p>Bedroom Two</p>
                    <Bed/>
                <div className='room__sandbox'>
                    <p>sandbox</p>
                    <img src={greycat} alt='grey cat standing' className={`cat ${appearClass('taskTwo')}`}/>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Room