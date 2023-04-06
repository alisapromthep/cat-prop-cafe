import './EndGame.scss';
import TextBox from '../../components/TextBox/TextBox.js';


function EndGame() {

    const text = "That's all! Thank you for helping the kitties, hope React Props is more clear to you now!";

    return (
        <div className='endgame'>
            <TextBox
            title="Thank you for helping the kitties!"
            text={text}
            linkTo="/game"
            linkText="Back to the Cafe"
            buttonClass="endgame__back-button"
            />
        </div>
    )
}

export default EndGame