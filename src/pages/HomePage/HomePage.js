import React from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';
import greycat from '../../assets/icons/greycat.png';
import catinbox from '../../assets/icons/catinbox.png';
import orangecat from '../../assets/icons/orangecat.png';
import stretchcat from '../../assets/icons/stretchcat.png';

const HomePage = () => {

const cats = [
        {
            src: greycat,
            alt: 'a grey cat'
        },
        {
            src: catinbox,
            alt: 'a cat in a box'
        },
        {
            src: orangecat,
            alt: 'an orange cat'
        },
        {
            src: stretchcat,
            alt: 'a cat stretching'
        },

    ];

    return (
        <div className='home__container'>
            <div className='home'>
                <h1 className='home__cafe-name'>Welcome to Cat Prop Cafe</h1>
                <div className='home__welcome'>
                    <p className='home__about-text'>
                        The first time I learn about React props, I was very confuse, and found it very difficult to visualize how the information was getting pass around. Thus, I decided to create this little game, to help other new developer like me visualize and learn props.</p>
                </div>
                    <Link to="/game" className='home__start-button'>start</Link>
                <div className='home__cat-container'>
                    {
                        cats.map((cat,i)=>{
                            return (
                                <img key={i} src={cat.src} alt={cat.alt} className='cat'/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage