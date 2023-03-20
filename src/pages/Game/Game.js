import React, {useEffect, useState} from 'react';
import './Game.scss';
import Cafe from '../../components/Cafe/Cafe';
import Console from '../../components/Console/Console';
import FlowChart from '../../components/FlowChart/FlowChart';
import {useGame} from '../../contextProvider/GameContext';
import Popup from 'reactjs-popup';
import {MdLiveHelp} from 'react-icons/md';


const Game = () => {

    const [isMobile, setIsMobile] = useState(false);

    const handleScreenSize = ()=>{
        if (window.innerWidth < 768){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    const {questCorrect, taskId,tasksList, currTask: task, setCurrTask, currScore: score,nextTask, open,setOpen} = useGame();

    useEffect(()=>{setCurrTask(tasksList[taskId])}, [taskId])

    useEffect(()=>{
        window.addEventListener("resize",handleScreenSize);
    })

    console.log(isMobile)


    if(!task){
        return (<Popup
        open={true}
        >
            <div><p> That's all! Thank you helping the kitties, hope React Props is more clear to you now!</p></div>
            <button onClick={()=> setOpen(false)}> Back to Home </button>
        </Popup>
        )
    }

    return (
        
        <div className='game__container'>
            <Popup
            open= {open}
            position="center"
            className='popup__game'
            >
                {questCorrect[task.name] ? 
                    <div className='popup__right'>
                        <p>Correct!</p>
                        <button className='popup__button' type='button' onClick={nextTask}>next</button>
                    </div> :
                    <div className='popup__wrong'>
                        <p> {`${score[task.name]}/${task.totalPoints} points, 
                        you may have missed a step somewhere, the cat is not where it needs to be`}</p>
                        <button className='popup__button' type='button' onClick={()=>{setOpen(false)}}>Keep trying</button>
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
                        : <div><p> That's all! Thank you helping the kitties, hope React Props is more clear to you now!</p></div>
                    }
                        <Console />
                    </div>
                    <FlowChart className='flowchart--tablet' />
                    <Popup
                    trigger={<button type='button' className='hint__button'
                    >
                        <MdLiveHelp className='hint__icon'/>
                    </button>}
                    on='click'
                    position='left bottom'
                    >
                        <div className='hint__container'>
                            <p>{task.hint}</p>
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default Game