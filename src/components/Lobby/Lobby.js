import React from 'react';
import './Lobby.scss';
import laptopcat from '../../assets/icons/laptopcat.png';
import readingcat from '../../assets/icons/readingcat.png';
import greycat from '../../assets/icons/greycat.png';
import catfood from '../../assets/icons/cat-food.png';
import stretchcat from '../../assets/icons/stretchcat.png';

const Lobby = () => {
    const cats = [
        {
            src: catfood,
            class: 'lobby__catfood',
            description:'bag of catfood'
        },
        {
            src: laptopcat,
            class: 'lobby__laptop-cat',
            description:'a cat using a laptop'
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
        }

    ]
    return (
        <section className='lobby'>
            Lobby
            {cats.map(((cat,i)=>{
                return <img key={i} src={cat.src} className={`${cat.class} cat`} alt={cat.description}/>
            }))}
        </section>
    )
}

export default Lobby