import React from 'react';
import LetterRow from './LetterRow';

const data = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'delete']
];

const Keyboard = ({ letterPress, onEnterPress, onDeletePress }) => (
  <div className="keyboard">
    {data.map((letters, index) => (
      <LetterRow
        key={index}
        letters={letters}
        letterPress={letterPress}
        onEnterPress={onEnterPress}
        onDeletePress={onDeletePress}
      />
    ))}
  </div>
);

export default Keyboard;
