import React, {useState, useContext} from 'react';

const GameContext = React.createContext();

export function useGame() {
    return useContext(GameContext);
}

export function GameProvider({children}){
    const [ questOneSol, setQuestOneSol] = useState(false);

    return (
        <GameContext.Provider value={questOneSol}>
            {children}
        </GameContext.Provider>
    )

}
