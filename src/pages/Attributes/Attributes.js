import React from 'react';
import './Attributes.scss';
import creditData from '../../data/attributes.json';

function Attributes() {
    return (
        <div className='credit-container'>
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