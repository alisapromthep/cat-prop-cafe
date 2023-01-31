import React, { useEffect } from 'react';
import './Console.scss';


const Console = ({code,componentId}) => {

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
                <form className='code__input'>
                    {roomComponents.map((comp,i)=> {
                        return <label key={i}>
                            {comp.label} <input type='text'
                            name= {comp.inputName}/>
                            {`/>`}
                        </label>
                    })}
                    <pre>{code.after}</pre>
                    <pre>{code.export}</pre>
                    <button className='code__button'>next</button>
                </form>
                : <p>{code}</p>
                }
            </div>

        </div>
    )
}

export default Console