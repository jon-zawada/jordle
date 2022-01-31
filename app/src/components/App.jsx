import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table/Table';
import Keyboard from './Keyboard/Keyboard';
import { answers, answerCount, randomIntFromInterval } from '../../../wordle/wordle';

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
  const [gameOver, setGameOver] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const [state, setState] = useState(table);

  const getWord = () => {
    const randInt = randomIntFromInterval(0, answerCount);
    return answers[randInt];
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
      nextRow();
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
    setWord(getWord());
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
