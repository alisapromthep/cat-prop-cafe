import React from 'react';
import Popup from 'reactjs-popup';
import tutorial from '../../data/tutorial.json';
import {FaWindowClose} from 'react-icons/fa';
import './Modal.scss';
const Modal = () => {

    return (
        <Popup
        trigger={<button
            type='button'
            className='nav__button button'>
                Tutorial
        </button>}
        modal
        nested
        role='dialog'
        >
            {close => (
                <div className='modal__tutorial-container'>
                    <div className='modal__tutorial'>
                    <div>
                        <h1 className='modal__title'>Tutorial</h1>
                        {
                            tutorial.map((step)=>{
                                return (
                                    <p key={step.id}
                                    className='tutorial__step'>
                                        {step.id}.
                                        {step.content}
                                    </p>
                                )
                            })
                        }
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