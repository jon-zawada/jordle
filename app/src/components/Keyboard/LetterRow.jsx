import React from 'react';
import LetterTile from './LetterTile';
import EnterTile from './enterTile';
import DeleteTile from './DeleteTile';

const LetterRow = ({ letters, letterPress }) => (
  <div className="letter-row">
    {letters.map((letter) => {
      if (letter === 'enter') return <EnterTile letter={letter} />;
      if (letter === 'delete') return <DeleteTile letter={letter} />;
      return <LetterTile letter={letter} letterPress={letterPress} />;
    }
    )}
  </div>
);

export default LetterRow;
