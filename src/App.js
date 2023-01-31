import './App.scss';
import {useState} from 'react';
import Game from './pages/Game/Game.js';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { GameProvider } from './contextProvider/GameContext';

function App() {
  const [startGame, setStartGame] = useState(true);

  const startHandler = (event)=>{
    event.preventDefault();
    setStartGame(true);
  }


  return (
    <div>
      <GameProvider>
        {startGame ?  <Game/>:<HomePage startHandler={startHandler}/>}
      </GameProvider>
      <Footer/>
    </div>
  );
}

export default App;
