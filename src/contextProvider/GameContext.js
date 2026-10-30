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
    toilet:"",
    diningTable:"",
    onClick:"",
    bedroomOneImg:"",
    toiletImg:"",
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

    const [code, setCode] = useState(`Select a component from the flowchart to get started.`);

    const [componentId, setComponentId] = useState(null)

    const [taskId, setTaskId] = useState(0);

    const [tasksList, setTasksList] = useState([...tasks]);

    const [currTask, setCurrTask] = useState(tasksList[taskId]);

    const [currScore, setCurrScore] = useState(initialScore);

    const [open, setOpen] = useState(false);
    

    const displayCode = (id)=>{
        let selectRoom = componentData[id]
        setComponentId(id);
        setCode(selectRoom);
    };

    function nextTask(){
        setTaskId(prev => prev+1);
        setAnswer(initialAnswer);
        setOpen(false)
        return taskId;
    }

    function resetGame(){
        setQuestCorrect(initialGameState);
        setCurrScore(initialScore);
        setAnswer(initialAnswer);
        setCode(`Select a component from the flowchart to get started.`);
        setComponentId(null);
        setTaskId(0);
        setCurrTask(tasksList[0]);
        setOpen(false);
    }

    function handleAnswerSubmit(event){
        if (event) event.preventDefault();

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
            //nextTask();

        } else {
            currScore[currTask.name] = playerPoints
        }

        setOpen(true);
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
            open,setOpen,
            displayCode, handleAnswerSubmit, appearClass, disappearClass,nextTask, resetGame})}>
            {children}
        </GameContext.Provider>
    )

}
