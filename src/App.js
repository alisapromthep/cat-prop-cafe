import './App.scss';
import {useState} from 'react';
import Game from './pages/Game/Game.js';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import { GameProvider } from './contextProvider/GameContext';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <GameProvider>
          <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
        </GameProvider>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
