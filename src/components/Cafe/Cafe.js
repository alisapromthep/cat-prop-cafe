import './Cafe.scss';
import Lobby from '../Lobby/Lobby';
import Room from '../Room/Room';
import FoodArea from '../FoodArea/FoodArea';

function Cafe() {
    return (
            <div className='cafe'>
            <Lobby/>
                <div className='cafe__inside-room'>
                <Room/>
                <div className='cafe__hallway'></div>
                <FoodArea/>
                </div>
            </div>
    )
}

export default Cafe