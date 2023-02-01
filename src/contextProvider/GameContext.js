import React, {useState, useContext} from 'react';
import componentData from '../data/componentdata.json';
import tasks from '../data/tasks.json';
const GameContext = React.createContext();

const initialGameState = {
    questOne: false,
    questTwo: false,
    questThree: false,
    questFour: false,
}

const initialAnswer = 
    {
    roomOne: "",
    roomTwo: "",
    bedroomOne: "",
    bedroomTwo:"",
    diningTable:"",
    onClick:"",
    bedroomOneImg:"",
    bedroomTwoImg:"",
    bathroom: "",
    sandboxImg:"",
    diningTableImg:""
}



export function useGame() {
    return useContext(GameContext);
}


export function GameProvider({children}){
    const [ questCorrect, setQuestCorrect] = useState(initialGameState);

    const [answer, setAnswer] = useState(initialAnswer);

    const [code, setCode] = useState(`Select the component from the flowchart to get start`);

    const [componentId, setComponentId] = useState(null)

    const [taskNum, setTaskNum] = useState(0);

    const displayCode = (id)=>{
        let selectRoom = componentData[id]
        setComponentId(id);
        setCode(selectRoom);
    };

    function next(){

    }
    
    function back(){

    }

    function updateInput(event){
        
        setAnswer(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <GameContext.Provider 
        value={({
            questCorrect,
            setQuestCorrect,
            answer,
            setAnswer,
            updateInput,
            code,
            setCode,
            componentId,setComponentId,
            taskNum,
            setTaskNum,displayCode})}>
            {children}
        </GameContext.Provider>
    )

}
