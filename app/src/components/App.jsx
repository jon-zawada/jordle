import React, { useState } from 'react';
import Table from './Table/Table';
import Keyboard from './Keyboard/Keyboard';

const App = () => {
  const [word, setWord] = useState('React test');

  return (
    <div id="app">
      <div className="app-wrapper">
        <h1 className="title">Jordle</h1>
        <hr className="title-line" />
        <Table />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
