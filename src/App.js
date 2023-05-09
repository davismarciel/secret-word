import { useState, useEffect, useCallback } from 'react';
import './App.css';
import GameOver from './Components/GameOver';
import Game from './Components/Game';

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

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState('');

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words);

    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // Start the game
  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    // Create an array of letters

    let wordLetters = word.toLowerCase().split('');

    // wordLetters = wordLetters.map((words) => words.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    // Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  };

  // Process the letter input
  const verifyLetter = (letter) => {
    console.log(letter);

    const normalizedLetter = letter.toLowerCase();

    // Check if letter has already been utilized

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    )
      return;

    // Push guessed or letter or lost a guess

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
    }
  };
  console.log('ACERTOS: ', guessedLetters);
  console.log('ERROS: ', wrongLetters);

  // Restart game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
