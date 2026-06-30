import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';
import { selectCount } from '../redux/selectors';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="counter-card">
      <h2>Redux Counter</h2>
      
      <div className="counter-controls">
        <button 
          className="btn minus" 
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        
        <span className="count-display">{count}</span>
        
        <button 
          className="btn plus" 
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;