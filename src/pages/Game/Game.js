import React, {useEffect, useState} from 'react';
import './Game.scss';
import Cafe from '../../components/Cafe/Cafe';
import Console from '../../components/Console/Console';
import FlowChart from '../../components/FlowChart/FlowChart';
import {useGame} from '../../contextProvider/GameContext';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Popup from 'reactjs-popup';


const Game = () => {

    const {questCorrect, taskId,tasksList, currTask: task, setCurrTask, currScore: score,nextTask, open} = useGame();

    useEffect(()=>{setCurrTask(tasksList[taskId])}, [taskId])

    return (
        <div className='game__container'>
            <Popup
            open= {true}
            position="center"
            className='popup__game'
            >
                {questCorrect[task.name] ? 
                    <div className='popup__right'>
                        <p>Correct!</p>
                        <button className='popup__button' type='button' onClick={nextTask}>next</button>
                    </div> :
                    <div className='popup__wrong'>
                        <p> {`${score[task.name]}/${task.totalPoints}
                        you may have missed a step somewhere, the cat is not where it needs to be`}</p>
                        <button className='popup__button' type='button'>Keep trying</button>
                        <button className='popup__button' type='button'>See solution</button>
                        <button className='popup__button' type='button' onClick={nextTask}>Skip</button>

                    </div>
                }
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