import React from 'react';

const Bed = ({imgSrc, alt, nameClass}) => {
    return (
        <div className='bed'>
            <img src={imgSrc} alt={alt} className={nameClass}/>
        </div>
    )
}

export default Bed;