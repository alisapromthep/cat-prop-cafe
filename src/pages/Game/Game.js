import React, {useState,useEffect} from 'react';
import './Game.scss';
import Lobby from '../../components/Lobby/Lobby';
import Room from '../../components/Room/Room';
import FoodArea from '../../components/FoodArea/FoodArea';
import Console from '../../components/Console/Console';
import FlowChart from '../../components/FlowChart/FlowChart';
import componentData from '../../data/componentdata.json';
import tasks from '../../data/tasks.json';


const Game = () => {

    const [code, setCode] = useState(`Select the component from the flowchart`);

    const [componentId, setComponentId] = useState(null)

    const [taskNum, setTaskNum] = useState(0);

    const displayCode = (id)=>{
        let selectRoom = componentData[id]
        setComponentId(id);
        setCode(selectRoom);
    };

    return (
        <div className='game__container'>
        <h2 className='game__cafe-name'>Welcome to Cat Prop Cafe </h2>
        <div className='game'>
            <div className='cafe'>
                <Lobby/>
                <div className='cafe__inside-room'>
                    <Room/>
                    <div className='cafe__hallway'></div>
                    <FoodArea/>
                </div>
            </div>
            <div className='game__control'>
                <div className='game__instruction'>
                    <h3>React Props</h3>
                    <p>Prop is package/message that can get pass from one component to another. It helps connect and allows one component to communicate with another. The catch is that prop can only be pass down from the parent component to their children.</p>
                    <h3>Help the kitties....<span>{`${tasks[taskNum].description}`}</span></h3>
                    <Console code={code}
                    componentId={componentId}
                    />
                </div>
                <FlowChart displayCode={displayCode}/>
            </div>
        </div>
        </div>
    )
}

export default Game