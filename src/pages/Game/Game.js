import React, {useEffect, useState} from 'react';
import './Game.scss';
import Cafe from '../../components/Cafe/Cafe';
import Console from '../../components/Console/Console';
import FlowChart from '../../components/FlowChart/FlowChart';
import {useGame} from '../../contextProvider/GameContext';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Popup from 'reactjs-popup';


const Game = () => {

    const {questCorrect, taskId,tasksList, currTask: task, setCurrTask, currScore: score} = useGame();

    useEffect(()=>{setCurrTask(tasksList[taskId])}, [taskId])

    return (
        <div className='game__container'>
            <Popup>
                <ReactCanvasConfetti
                className='confetti'
                fire={questCorrect[task.name]}
                reset=''
                /> 
            </Popup>
            <div className='game'>
                <div className='game__top-container'> 
                    <Cafe/>
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
                        <Console />
                    </div>
                    <FlowChart className='flowchart--tablet' />
                </div>
            </div>
        </div>
    )
}

export default Game