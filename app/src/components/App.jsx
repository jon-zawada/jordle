import React, { useState } from 'react';

const App = () => {
  const [word, setWord] = useState('React test');

  return (
    <div>
      <h1>Jordle</h1>
      <h2>{word}</h2>
    </div>
  );
};

export default App;
