import React from 'react';
import Row from './Row';

const ROW_COUNT = 6;

const Table = () => (
  <div className="table">
    {[...Array(ROW_COUNT)].map(() => (
      <Row />
    ))}
  </div>
);

export default Table;
