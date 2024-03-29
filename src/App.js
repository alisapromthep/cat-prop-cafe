import './App.scss';
import {useState} from 'react';
import Game from './pages/Game/Game.js';
import EndGame from './pages/EndGame/EndGame.js';
import HomePage from './pages/HomePage/HomePage';
import Attributes  from './pages/Attributes/Attributes';
import Footer from './components/Footer/Footer';
import { GameProvider } from './contextProvider/GameContext';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <GameProvider>
          <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/endgame" element={<EndGame/>}/>
          <Route path="/attributes" element={<Attributes/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </GameProvider>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
