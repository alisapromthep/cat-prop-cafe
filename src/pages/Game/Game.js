import React from 'react';
import './Game.scss';
import Lobby from '../../components/Lobby/Lobby';
import Room from '../../components/Room/Room';
import FoodArea from '../../components/FoodArea/FoodArea';
import FlowChart from '../../components/FlowChart/FlowChart';

const Game = () => {
    return (
        <div className='game__container'>
        <h2 className='game__cafe-name'>Welcome to Cat Prop Cafe</h2>
        <div className='game'>
            <div className='cafe'>
                <Lobby/>
                <div className='cafe__inside-room'>
                    <Room/>
                    <div className='cafe__hallway'></div>
                    <FoodArea/>
                </div>
            </div>
            <FlowChart/>
        </div>
        </div>
    )
}

export default Game