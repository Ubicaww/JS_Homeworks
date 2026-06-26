import React from 'react';

const Results = React.memo(function Results({ winner }) {
  if (!winner) return null;
  return (
    <div className="alert alert-info mt-4 shadow-sm border-0">
      <h4 className="alert-heading m-0">🏆 Переможець: <strong className="text-primary">{winner}</strong></h4>
    </div>
  );
});

export default Results;