import React from 'react';
import './HomePage.scss';
import TextBox from '../../components/TextBox/TextBox.js';


const HomePage = () => {

    const aboutText = "The first time I learn about React props, I was very confuse, and found it very difficult to visualize how the information was getting pass around. Thus, I decided to create this little game, to help other new developer like me visualize and learn props."

    return (
        <div className='home__container'>
            <TextBox
            title="Welcome to Cat Prop Cafe"
            text={aboutText}
            linkTo="./game"
            linkText="start"
            />
        </div>
    )
}

export default HomePage