import React from 'react';
import './Tooltip.scss';
import Popup from 'reactjs-popup';
import {FaRegHandPointLeft} from 'react-icons/fa'

function Tooltip(content) {
    return (
        <Popup
        trigger={
            <button type='button' className='tooltip__button'>
                <FaRegHandPointLeft/>
            </button>
        }
        on={['hover']}
        position='right top'
        closeOnDocumentClick>
            <span>click the component</span>
        </Popup>
    )
}

export default Tooltip