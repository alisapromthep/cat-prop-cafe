import React from 'react';
import './Tooltip.scss';
import Popup from 'reactjs-popup';
import {FaRegHandPointLeft} from 'react-icons/fa'

function Tooltip(content) {
    return (
        <Popup
        trigger={
            <FaRegHandPointLeft/>
        }
        on={['hover']}
        position='right top'
        closeOnDocumentClick>
            <span>click me</span>
        </Popup>
    )
}

export default Tooltip