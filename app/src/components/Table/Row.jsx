import React from 'react';
import Tile from './Tile';

const Row = ({ row }) => (
  <div className="row">
    {row.map((val) => (
      <Tile val={val} />
    ))}
  </div>
);

export default Row;
