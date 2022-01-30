import React from 'react';
import Row from './Row';

const Table = ({ state }) => (
  <div className="table">
    {state.map((row, index) => (
      <Row key={index} row={row} />
    ))}
  </div>
);

export default Table;
