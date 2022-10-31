import React from 'react';
import './Lobby.scss';
import readingcat from '../../assets/icons/readingcat.png';
import greycat from '../../assets/icons/greycat.png';
import catfood from '../../assets/icons/cat-food.png';
import stretchcat from '../../assets/icons/stretchcat.png';
import sleepcat from '../../assets/icons/sleepcat.png';

const Lobby = () => {
    const cats = [
        {
            src: catfood,
            class: 'lobby__catfood',
            description:'bag of catfood'
        },
        {
            src: readingcat,
            class: 'lobby__reading-cat',
            description:'a cat reading'
        },
        {
            src: greycat,
            class: 'lobby__grey-cat',
            description:'a grey cat standing'
        },
        {
            src:stretchcat,
            class: 'lobby__stretchcat',
            describe: 'a grey cat stretching'
        },
        {
            src:sleepcat,
            class: 'lobby__sleepcat',
            describe: 'a cat sleeping'
        }

    ]
    return (
        <section className='lobby'>
            Lobby
            <div>
                <p>Message from laptopCat: 'meow hungry! Send food'</p>
            </div>
            {cats.map(((cat,i)=>{
                return <img key={i} src={cat.src} className={`${cat.class} cat`} alt={cat.description}/>
            }))}
        </section>
    )
}

export default Lobby