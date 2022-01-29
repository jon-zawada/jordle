import React from 'react';
import LetterTile from './LetterTile';

const LetterRow = ({ letters }) => (
  <div className="letter-row">
    {letters.map((letter) => (
      <LetterTile letter={letter} />
    ))}
  </div>
);

export default LetterRow;
