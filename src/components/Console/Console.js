import React, { useEffect } from 'react';
import './Console.scss';
import {useGame} from '../../contextProvider/GameContext';


const Console = () => {

    const {code, componentId, updateInput, answer, handleAnswerSubmit} = useGame();


    const lineNum = [];
    for (let i = 1; i<=20; i++){
        lineNum.push(i);
    }
    const roomComponents = code.components;

    return (
        <div className='console'>
            <div className='console__line-num'>
                {lineNum.map((num,i)=>{
                    return <p key={i} >{num}</p>
                })}
            </div>
            <div className='console__code'>
                <pre className='code__import'>{code.import}</pre>
                <pre>{code.before}</pre>
                {componentId ? 
                <form className='code__input' onSubmit={handleAnswerSubmit}>
                    {roomComponents.map((comp,i)=> {
                        return <label key={i}>
                            {comp.label} 
                            <input 
                            onChange={updateInput}
                            type='text'
                            name= {`${comp.inputName}`}
                            value={answer[comp.inputName]}
                            />
                            {`/>`}
                        </label>
                    })}
                    <pre>{code.after}</pre>
                    <pre>{code.export}</pre>
                    <div className='code__button-container'>
                        <button type='button' className='code__button'>Next</button>
                        <button type='submit' className='code__button'>Submit</button>
                    </div>
                </form>
                : <p>{code}</p>
                }
            </div>

        </div>
    )
}

export default Console