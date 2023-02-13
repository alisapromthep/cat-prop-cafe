import React, {useEffect, useState} from 'react';
import './Game.scss';
import Lobby from '../../components/Lobby/Lobby';
import Room from '../../components/Room/Room';
import FoodArea from '../../components/FoodArea/FoodArea';
import Console from '../../components/Console/Console';
import FlowChart from '../../components/FlowChart/FlowChart';
import {useGame} from '../../contextProvider/GameContext';



const Game = () => {

    const {questCorrect, taskId,tasksList, currTask: task, setCurrTask, currScore: score} = useGame();

    useEffect(()=>{setCurrTask(tasksList[taskId])}, [taskId])

    return (
        <div className='game__container'>
        <div className='game'>
            <div className='game__top-container'> 
                <div className='cafe'>
                    <Lobby/>
                    <div className='cafe__inside-room'>
                        <Room/>
                        <div className='cafe__hallway'></div>
                        <FoodArea/>
                    </div>
                </div>
                <FlowChart />
            </div>
            <div className='game__bottom-container'>
                <div className='game__instruction'>
                    {
                        task ? 
                        <div>
                            <h3>Task {`${task.id}.`}<span> {`${task.description}`}</span></h3>
                            <p>Total Points: {task.totalPoints}</p>
                            <p>Input you need to add to the box: {task.input}</p>
                        </div>
                    : <div><p> Congratulations! you got it! </p></div>
                    }
                </div>
                <Console />
            </div>
        </div>
        </div>
    )
}

export default Game