import './TextBox.scss'; 
import {Link} from 'react-router-dom';
import greycat from '../../assets/icons/greycat.png';
import catinbox from '../../assets/icons/catinbox.png';
import orangecat from '../../assets/icons/orangecat.png';
import stretchcat from '../../assets/icons/stretchcat.png';


function TextBox({title, text, linkTo, linkText, buttonClass}) {

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
        <div className='container__context'>
            <h1 className='container__title'>{title}
            </h1>
            <div className='container__right'>
                <div className='container__textbox'>
                    <p className='container__text'>
                        {text}
                    </p>
                    <Link to={linkTo} className={`link ${buttonClass}`}> 
                        {linkText}
                    </Link>
                </div>
                <div className='cat-container'>
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

export default TextBox