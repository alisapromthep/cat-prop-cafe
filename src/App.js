import './App.scss';
import {useState} from 'react';
import Game from './pages/Game/Game.js';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  const [startGame, setStartGame] = useState(true);

  const startHandler = (event)=>{
    event.preventDefault();
    setStartGame(true);
  }


  return (
    <div>
      {startGame ?  <Game/>:<HomePage startHandler={startHandler}/>}
      <Footer/>
    </div>
  );
}

export default App;
