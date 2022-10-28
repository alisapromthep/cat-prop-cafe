import React from 'react';
import Lobby from '../../components/Lobby/Lobby';
import Room from '../../components/Room/Room';
import FoodArea from '../../components/FoodArea/FoodArea';

const Game = () => {
    return (
        <div>
            <Lobby/>
            <p>Bed room</p>
            <Room/>
            <p>Food room</p>
            <FoodArea/>
        </div>
    )
}

export default Game