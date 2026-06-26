import React from 'react';

function Buttons({ onShowResults, onClear }) {
  return (
    <div className="d-flex justify-content-center gap-3">
      <button className="btn btn-success btn-lg px-4" onClick={onShowResults}>Show Results</button>
      <button className="btn btn-outline-danger btn-lg px-4" onClick={onClear}>Delete Results</button>
    </div>
  );
}
export default Buttons;