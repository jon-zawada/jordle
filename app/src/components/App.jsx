import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table/Table';
import Keyboard from './Keyboard/Keyboard';

const table = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];
const WORD_LENGTH_LIMIT = table[0].length;
const GUESS_LIMIT = table.length;

const App = () => {
  const [word, setWord] = useState('');
  const [letterCount, setLetterCount] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const [state, setState] = useState(table);

  const counterLetters = (futureWord) => {
    const store = {};
    for (let i = 0; i < futureWord.length; i++) {
      const letter = futureWord[i];
      if (store[letter]) {
        store[letter]++;
      } else {
        store[letter] = 1;
      }
    }
    return store;
  };

  const getWord = () => {
    axios.get('/answers/random')
      .then((res) => {
        const futureWord = res.data;
        setLetterCount(counterLetters(futureWord));
        setWord(futureWord);
      });
  };

  const letterPress = (e) => {
    if (gameOver) return;
    if (currentColumn >= WORD_LENGTH_LIMIT) return;
    if (currentRow >= GUESS_LIMIT) return;
    const letter = e.target.value;
    const stateCopy = state;
    stateCopy[currentRow][currentColumn] = letter;
    setState(stateCopy);
    setCurrentColumn((curr) => curr + 1);
  };

  const nextRow = () => {
    setCurrentRow((curr) => curr + 1);
    setCurrentColumn(0);
  };

  const checkIncorrectGuess = (guess) => (
    axios.get(`/guess/${guess}`)
      .then((res) => {
        const isValid = res.data;
        if (isValid) {
          console.log('guess was valid guess', isValid);
          return isValid;
        }
        console.log('Guess was not valid', isValid);
        return isValid;
      })
      .catch(() => alert('UH OH BIG UH OH'))
  );

  const onEnterPress = () => {
    if (gameOver) return;
    if (currentRow >= GUESS_LIMIT) return;
    const guess = state[currentRow].join('');
    if (currentColumn < WORD_LENGTH_LIMIT) {
      alert('Not long enough word');
    } else if (guess === word) {
      alert('Correct you win');
      setGameOver(true);
    } else {
      checkIncorrectGuess(guess)
        .then((guessIsValid) => {
          if (guessIsValid) {
            nextRow();
          }
        });
    }
  };

  const onDeletePress = () => {
    if (gameOver) return;
    if (currentColumn <= 0) return;
    const stateCopy = state;
    setCurrentColumn((curr) => {
      stateCopy[currentRow][curr - 1] = '';
      setState(stateCopy);
      return curr - 1;
    });
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <div id="app">
      <div className="app-wrapper">
        <h1>Jordle</h1>
        <hr />
        <Table state={state} />
        <Keyboard
          letterPress={letterPress}
          onEnterPress={onEnterPress}
          onDeletePress={onDeletePress}
        />
      </div>
    </div>
  );
};

export default App;
