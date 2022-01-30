import React from 'react';

const DeleteTile = ({ letter }) => (
  <button
    className="nonletter letter"
    onClick={() => console.log('delete')}
    type="button"
    value={letter}
  >
    {letter}
  </button>
);

export default DeleteTile;
