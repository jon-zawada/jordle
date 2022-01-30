import React from 'react';

const EnterTile = ({ letter }) => (
  <button
    className="nonletter letter"
    onClick={() => console.log('enter')}
    type="button"
    value={letter}
  >
    {letter}
  </button>
);

export default EnterTile;
