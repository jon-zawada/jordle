import React from 'react';
import LetterRow from './LetterRow';

const data = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'delete']
];

const Keyboard = ({ letterPress, onEnterPress }) => (
  <div className="keyboard">
    {data.map((letters, index) => (
      <LetterRow
        key={index}
        letters={letters}
        letterPress={letterPress}
        onEnterPress={onEnterPress}
      />
    ))}
  </div>
);

export default Keyboard;
