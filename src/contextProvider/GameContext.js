import React, {useState, useContext} from 'react';
import componentData from '../data/componentdata.json';
import tasks from '../data/tasks.json';
import Modal from 'react-modal';
const GameContext = React.createContext();


const initialGameState = {
    taskOne: false,
    taskTwo: false,
    taskThree: false,
    taskFour: false,
}

const initialScore = {
    taskOne: 0,
    taskTwo: 0,
    taskThree: 0,
    taskFour:0,
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

    const [tasksList, setTasksList] = useState([...tasks]);

    const [currTask, setCurrTask] = useState(tasksList[taskId]);

    const [currScore, setCurrScore] = useState(initialScore);

    const displayCode = (id)=>{
        let selectRoom = componentData[id]
        setComponentId(id);
        setCode(selectRoom);
    };

    function nextTask(){
        setTaskId(prev => prev+1);
        return taskId;
    }

    function handleAnswerSubmit(event){
        event.preventDefault();


        const correctInput = currTask.input;
        const solution = currTask.solution;
        const totalPoints = currTask.totalPoints;

        //check answers 
        let playerPoints = 0;
        for(let i = 0; i< solution.length;i++){
            
            if(answer[solution[i]] === correctInput){
                console.log(solution[i])
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
            setCurrScore(prev=>{
                return {
                    ...prev,
                    [currTask.name]:playerPoints
                }
            })
            setAnswer(initialAnswer);
            nextTask();

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

    function appearClass (taskNum){
        return questCorrect[taskNum] ? 'appear':'disappear';
    }

    function disappearClass (taskNum){
        return questCorrect[taskNum] ? 'disappear':'appear';
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
            tasksList,
            currTask, setCurrTask,
            currScore, setCurrScore,
            displayCode, handleAnswerSubmit, appearClass, disappearClass})}>
            {children}
        </GameContext.Provider>
    )

}
