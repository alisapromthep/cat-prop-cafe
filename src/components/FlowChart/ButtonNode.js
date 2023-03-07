import React, {useCallback} from 'react';
import {Handle, Position} from 'reactflow';
import './FlowChart.scss';



const ButtonNode = ({id,data}) => {
    const handleClick = useCallback((event)=>{
        data.displayCode(id);
    },[]);
    return (
        <>
            <Handle type="source" position={Position.Bottom}/>
                <button  className={`flowchart__button flowchart__${data.level}`} onClick={handleClick}>{data.label}</button>
            <Handle type="target" position={Position.Top}/>
        </>
    )
}

export default ButtonNode