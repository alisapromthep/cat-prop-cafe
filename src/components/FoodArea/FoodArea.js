import React from 'react'
import './FoodArea.scss';
import orangecat from '../../assets/icons/orangecat.png';
import eatcat from '../../assets/icons/eatcat.png';
import laptopcat from '../../assets/icons/laptopcat.png';
import catfood from '../../assets/icons/cat-food.png';

const FoodArea = () => {


    const Foodcats = [
        {
            src: orangecat,
            class: 'foodarea__orangecat',
            description:'smiling orange cat'
        },
        {
            src: eatcat,
            class: 'foodarea__eatcat',
            description:'cat eating fisht'
        },
        {
            src: laptopcat,
            class: 'foodarea__laptopcat',
            description:'cat using a laptop'
        },
        {
            src: catfood,
            class: '',
            description:'a bag of cat food'
        },
    ];
    return (
        <div className='foodarea'>
            <p>RoomTwo</p>
            {Foodcats.map((cat,i)=>{
                return <img key={i} src={cat.src} alt={cat.description} className={`cat ${cat.class}`}/>
            })}

        </div>
    )
}

export default FoodArea