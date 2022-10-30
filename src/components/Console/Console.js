import React, { useEffect } from 'react';
import './Console.scss';
import CodeEditor from '@uiw/react-textarea-code-editor';

const Console = ({display}) => {

    console.log('console',display)

    return (
        <div className='console'>
            <CodeEditor
            value={display}
            language="js"
            style={{
                fontSize: 12,
                backgroundColor:"white",
                color:"#0F0F0F"
            }}
            />
            {/* <code>{display}</code> */}
        </div>
    )
}

export default Console