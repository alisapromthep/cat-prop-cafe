import React from 'react';
import './Attributes.scss';
import creditData from '../../data/attributes.json';
import TextBox from '../../components/TextBox/TextBox';

function Attributes() {

    const content =  creditData.map((credit,i)=>{
        return (
            <a href={credit.href} title={credit.title}
            className='credits__links'
            key={i}>
                {credit.content}
            </a>
        )
    });

    return (
        <div className='credits'>
            <TextBox
            title="Icons Credits"
            content={content}
            linkTo="/"
            linkText="home"
            />
        </div>
        )
}

export default Attributes