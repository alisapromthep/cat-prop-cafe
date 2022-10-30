import React, { useEffect } from 'react';
import './Console.scss';


const Console = ({code}) => {


    const lineNum = [];
    for (let i = 1; i<=20; i++){
        lineNum.push(i);
    }

    return (
        <div className='console'>
            <div className='console__line-num'>
                {lineNum.map((num,i)=>{
                    return <p key={i} >{num}</p>
                })}
            </div>
            <div>
                <pre className='code__import'>{code.import}</pre>
                <pre>{code.before}</pre>
                <textarea className='code__component'
                defaultValue={code.components}
                >
                </textarea>
                <pre>{code.after}</pre>
                <pre>{code.export}</pre>
            </div>

        </div>
    )
}

export default Console