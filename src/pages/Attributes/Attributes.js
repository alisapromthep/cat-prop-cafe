import React from 'react';
import './Attributes.scss';
import creditData from '../../data/attributes.json';

function Attributes() {
    return (
        <div className='credit-container'>
            <h1>Credits</h1>
            {
                creditData.map((credit,i)=>{
                    return (
                        <a href={credit.href} title={credit.title}>
                            {credit.content}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Attributes