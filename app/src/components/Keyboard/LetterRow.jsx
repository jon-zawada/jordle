import React from 'react';
import LetterTile from './LetterTile';
import EnterTile from './EnterTile';
import DeleteTile from './DeleteTile';

const LetterRow = ({ letters, letterPress, onEnterPress, onDeletePress }) => (
  <div className="letter-row">
    {letters.map((letter, index) => {
      if (letter === 'enter') return <EnterTile key={index} letter={letter} onEnterPress={onEnterPress} />;
      if (letter === 'delete') return <DeleteTile key={index} letter={letter} onDeletePress={onDeletePress}/>;
      return <LetterTile key={index} letter={letter} letterPress={letterPress} />;
    })}
  </div>
);

export default LetterRow;
