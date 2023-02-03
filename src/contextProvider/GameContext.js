import React, {useState, useContext} from 'react';
import componentData from '../data/componentdata.json';
import tasks from '../data/tasks.json';

const GameContext = React.createContext();


const initialGameState = {
    taskOne: false,
    taskTwo: false,
    taskThree: false,
    taskFour: false,
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
    sandbox: "",
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

    const [taskId, setTaskId] = useState(0);

    const [currTask, setCurrTask] = useState(tasks[taskId]);

    const displayCode = (id)=>{
        let selectRoom = componentData[id]
        setComponentId(id);
        setCode(selectRoom);
    };

    function handleAnswerSubmit(event){
        event.preventDefault();

        const currCat = currTask.catName;
        const solution = currTask.solution;
        const totalPoints = currTask.totalPoints;


        console.log(currCat,solution)
        console.log('answers',answer)

        //check answers 
        let playerPoints = 0;
        for(let i = 0; i< solution.length;i++){
            if(answer[solution[i]] === currCat){
                playerPoints ++;
            }
        }

        if(playerPoints === totalPoints){
            setQuestCorrect(prev=>{
                return {
                    ...prev, 
                    [currTask.name]:true
                }
            })
            alert(`Great job!`)
            setAnswer(initialAnswer);
        } else {
            alert(`${playerPoints}/${totalPoints} you may have missed a step somewhere, the cat is not where it needs to be`);
        }
    }

    function updateInput(event){
        
        setAnswer(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function displayClass (taskNum){
        return questCorrect[taskNum] ? 'appear':'disappear';
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
            taskId,
            setTaskId,
            currTask, setCurrTask,displayCode, handleAnswerSubmit, displayClass})}>
            {children}
        </GameContext.Provider>
    )

}
