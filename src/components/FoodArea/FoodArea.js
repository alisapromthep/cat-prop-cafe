import React from 'react'
import './FoodArea.scss';
//import orangecat from '../../assets/icons/orangecat.png';
import eatcat from '../../assets/icons/eatcat.png';
import laptopcat from '../../assets/icons/laptopcat.png';
import catfood from '../../assets/icons/cat-food.png';
import {useGame} from '../../contextProvider/GameContext';

const FoodArea = () => {

    const {currTask, appearClass} = useGame();


    const Foodcats = [
        // {
        //     src: orangecat,
        //     class: 'foodarea__orangecat',
        //     description:'smiling orange cat'
        // },
        {
            src: eatcat,
            class: 'foodarea__eatcat',
            description:'cat eating fisht',
            name:'Tigger'
        },
        {
            src: laptopcat,
            class: 'foodarea__laptopcat',
            description:'cat using a laptop',
            name:'Simba'
        },
        {
            src: catfood,
            class: `foodarea__catfood ${appearClass('taskFour')}`,
            description:'a bag of cat food',
            name: 'Catfood'
        },
    ];
    return (
        <div className='foodarea'>
            <p className='room__name'>RoomTwo</p>
            <div className='foodarea__container'>
                <div className='foodarea__table'></div>
                {Foodcats.map((cat,i)=>{
                    return (
                        <figure key={i} className= {`figure ${cat.class}`}>
                            <img key={i} src={cat.src} alt={cat.description} className={`cat`}/>
                            <figcaption>{cat.name}</figcaption>
                        </figure>
                )})}
            </div>
            </div>
    )
}

export default FoodArea