import React from 'react';

const EnterTile = ({ letter, onEnterPress }) => (
  <button
    className="nonletter letter"
    onClick={onEnterPress}
    type="button"
    value={letter}
  >
    {letter}
  </button>
);

export default EnterTile;
