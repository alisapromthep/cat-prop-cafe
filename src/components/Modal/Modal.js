import React from 'react';
import Popup from 'reactjs-popup';
import tutorial from '../../data/tutorial.json';

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
            <div className='nav__tutorial-container'>
                <h1>Tutorial</h1>
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
        </Popup>
    )
}

export default Modal