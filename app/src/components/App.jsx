import React, { useState } from 'react';
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
  const [word, setWord] = useState('tower');
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const [state, setTable] = useState(table);

  const letterPress = (e) => {
    if (currentColumn === WORD_LENGTH_LIMIT) {
      return;
    }
    const letter = e.target.value;
    const stateCopy = state;
    stateCopy[currentRow][currentColumn] = letter;
    setTable(stateCopy);
    setCurrentColumn((curr) => curr + 1);
  };

  const onEnterPress = () => {

  };

  return (
    <div id="app">
      <div className="app-wrapper">
        <h1>Jordle</h1>
        <hr />
        <Table state={state} />
        <Keyboard letterPress={letterPress} />
      </div>
    </div>
  );
};

export default App;
