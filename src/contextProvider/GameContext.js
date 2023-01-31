import React, {useState, useContext} from 'react';

const GameContext = React.createContext();

const initialGameState = {
    questOne: false,
    questTwo: false,
    questThree: false,
    questFour: false,
}

export function useGame() {
    return useContext(GameContext);
}

export function GameProvider({children}){
    const [ questCorrect, setQuestCorrect] = useState(initialGameState);

    const checkAnswer = (event)=>{
        event.preventDefault();
        

    }

    return (
        <GameContext.Provider 
        value={({
            questCorrect,
            setQuestCorrect})}>
            {children}
        </GameContext.Provider>
    )

}
