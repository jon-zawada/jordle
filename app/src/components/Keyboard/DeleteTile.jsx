import React from 'react';

const DeleteTile = ({ letter, onDeletePress }) => (
  <button
    className="nonletter letter"
    onClick={onDeletePress}
    type="button"
    value={letter}
  >
    {letter}
  </button>
);

export default DeleteTile;
