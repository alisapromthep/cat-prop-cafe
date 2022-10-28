import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Game from './pages/Game/Game.js';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [startGame, setStartGame] = useState(false);

  const startHandler = (event)=>{
    event.preventDefault();
    setStartGame(true);
  }


  return (
    <div>
      {startGame ?  <Game/>:<HomePage startHandler={startHandler}/>}
    </div>
  );
}

export default App;
