import React from 'react';
import Tile from './Tile';

const WORD_COUNT = 5;

const Row = () => (
  <div className="row">
    {[...Array(WORD_COUNT)].map((row, index) => (
      <Tile val={index} />
    ))}
  </div>
);

export default Row;
