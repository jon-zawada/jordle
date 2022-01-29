import React from 'react';

const LetterTile = ({ letter }) => {
  const nonletter = letter === 'enter' || letter === 'delete';

  return (
    <div className={nonletter ? 'nonletter letter' : 'letter'}>{letter}</div>
  );
};

export default LetterTile;
