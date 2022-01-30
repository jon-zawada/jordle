import React from 'react';
import Tile from './Tile';

const Row = ({ row }) => (
  <div className="row">
    {row.map((val, index) => (
      <Tile key={index} val={val} />
    ))}
  </div>
);

export default Row;
