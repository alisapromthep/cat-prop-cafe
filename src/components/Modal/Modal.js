import React from 'react';
import Popup from 'reactjs-popup';
import tutorial from '../../data/tutorial.json';
import {FaWindowClose} from 'react-icons/fa';
import './Modal.scss';


const Modal = ({buttonName, content}) => {

    return (
        <Popup
        trigger={<button
            type='button'
            className='nav__button button'>
                {buttonName}
        </button>}
        modal
        nested
        role='dialog'
        >
            {close => (
                <div className='modal__tutorial-container'>
                    <div className='modal__tutorial'>
                    <div>
                        <h1 className='modal__title'>{buttonName}</h1>
                        {content}
                    </div>
                    <button className='modal__button'>
                        <FaWindowClose className='modal__close-icon' onClick={close}/>
                    </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default Modal