import React, {useState, useContext} from 'react';


const HelpContext = React.createContext();


export function useHelp(){
    return useContext(HelpContext);
}

export function HelpProvider ({children}){

    const [currentPage, setCurrentPage] = useState(0);




    return(
        <HelpContext.Provider value={({

        })}>
            {children}
        </HelpContext.Provider>
    )
}