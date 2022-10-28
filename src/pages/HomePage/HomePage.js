import React from 'react'

const HomePage = ({startHandler}) => {
    return (
        <div>
            <h1> Cat Prop Cafe </h1>
            <button onClick={startHandler}>start</button>
        </div>
    )
}

export default HomePage