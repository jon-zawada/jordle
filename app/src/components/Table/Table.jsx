import React from 'react';
import Row from './Row';

const Table = ({ state }) => (
  <div className="table">
    {state.map((row) => (
      <Row row={row} />
    ))}
  </div>
);

export default Table;
