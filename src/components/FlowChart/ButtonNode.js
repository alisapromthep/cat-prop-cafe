import React, {useCallback} from 'react';
import {Handle, Position} from 'reactflow';
import './FlowChart.scss';
import Tooltip from '../Tooltip/Tooltip';
import Popup from 'reactjs-popup';
import {FaRegHandPointLeft} from 'react-icons/fa'



const ButtonNode = ({id,data}) => {
    const handleClick = useCallback((event)=>{
        data.displayCode(id);
    },[]);
    return (
        <>
            <Handle type="source" position={Position.Bottom}/>
            <Popup
            trigger={ <button  className={`flowchart__button flowchart__${data.level}`} onClick={handleClick}>{data.label}</button>
            }
            on={['hover']}
            position='bottom center'
            >
                <p>Click me</p>
            </Popup>
            <FaRegHandPointLeft className='tooltip__button'/>
            <Handle type="target" position={Position.Top}/>
        </>
    )
}

export default ButtonNode