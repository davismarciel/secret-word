import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Game from './Components/Game';
import GameOver from './Components/GameOver';

// Components
import StartScreen from './Components/StartScreen';

// Data
import { wordsList } from './Data/words';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };
  console.log(words);
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  );
}

export default App;
