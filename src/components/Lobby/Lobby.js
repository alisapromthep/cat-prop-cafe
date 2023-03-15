import React from 'react';
import './Lobby.scss';
import readingcat from '../../assets/icons/readingcat.png';
import greycat from '../../assets/icons/greycat.png';
import catfood from '../../assets/icons/cat-food.png';
import stretchcat from '../../assets/icons/stretchcat.png';
import sleepcat from '../../assets/icons/sleepcat.png';
import {useGame} from '../../contextProvider/GameContext';

const Lobby = () => {
    const {appearClass, disappearClass} = useGame();

    const cats = [
        {
            src: catfood,
            class: `lobby__catfood ${disappearClass('taskFour')}`,
            description:'bag of catfood',
            name: 'Cat Food'
        },
        {
            src: readingcat,
            class: 'lobby__reading-cat',
            description:'a cat reading',
            name: 'Smarty'
        },
        {
            src: greycat,
            class: `lobby__grey-cat ${disappearClass('taskTwo')}`,
            description:'a grey cat standing',
            name:'Smokey'
        },
        {
            src:stretchcat,
            class: 'lobby__stretchcat',
            description: 'a grey cat stretching',
            name: 'Pepper'
        },
        {
            src:sleepcat,
            class: `lobby__sleepcat ${disappearClass('taskOne')}`,
            description: 'a cat sleeping',
            name:'Genie'
        }

    ]
    return (
        <section className='lobby'>
            <p className='room__name'>Lobby</p>
            <div className='lobby__monitor'>
                <p className={`lobby__msg ${appearClass('taskThree')}`}><span className= 'lobby__msg--bold'>Simba:</span> "meow hungry! Send food"</p>
            </div>
            {cats.map(((cat,i)=>{
                return ( 
                <figure key={i} className={`figure ${cat.class}`}>
                    <img src={cat.src} className='cat' alt={`${cat.description} and the name is ${cat.name}`}/>
                    <figcaption>{cat.name}</figcaption>
                </figure>
                )
            }))}
        </section>
    )
}

export default Lobby