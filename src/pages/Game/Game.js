import React, {useState,useEffect} from 'react';
import './Game.scss';
import Lobby from '../../components/Lobby/Lobby';
import Room from '../../components/Room/Room';
import FoodArea from '../../components/FoodArea/FoodArea';
import Console from '../../components/Console/Console';
import FlowChart from '../../components/FlowChart/FlowChart';
import componentData from '../../data/componentdata.json';

const Game = () => {

    const [code, setCode] = useState(`Select the component from the flowchart`);

    const displayCode = (id)=>{
        console.log('click in Game',id)
        console.log(componentData[id]);
        let selectRoom = componentData[id]
        setCode(selectRoom.function);
    };

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
            <div className='game__control'>
                <Console display={code}/>
                <FlowChart displayCode={displayCode}/>
            </div>
        </div>
        </div>
    )
}

export default Game