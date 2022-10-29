import React from 'react'
import './FoodArea.scss';
import orangecat from '../../assets/icons/orangecat.png';
import eatcat from '../../assets/icons/eatcat.png';

const FoodArea = () => {
    return (
        <div className='foodarea'>FoodArea
            <img src={eatcat} alt='cat eating' className='cat foodarea__eatcar'/>
            <img src={orangecat} alt='smiling orange cat' className='cat foodarea__orange-cat'/>
        </div>
    )
}

export default FoodArea