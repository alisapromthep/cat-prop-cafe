import React from 'react';
import './Bed.scss';

const Bed = ({imgSrc, alt, nameClass}) => {
    return (
        <div className='bed'>
            <img src={imgSrc} alt={alt} className={nameClass}/>
        </div>
    )
}

export default Bed;