import React from 'react';

const LetterTile = ({ letter, letterPress }) => (
  <button
    className="letter"
    onClick={letterPress}
    type="button"
    value={letter}
  >
    {letter}
  </button>
);

export default LetterTile;
