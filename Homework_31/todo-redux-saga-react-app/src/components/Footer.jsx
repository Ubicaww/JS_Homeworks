import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllIntent } from '../redux/slices/todoSlice';
import { selectTodosCount, selectIsLoading } from '../redux/selectors';

function Footer() {
  const dispatch = useDispatch();
  const count = useSelector(selectTodosCount);
  const isLoading = useSelector(selectIsLoading);

  if (count === 0) return null;

  return (
    <footer className="footer">
      <p>Всього задач: {count}</p>
      <button 
        className="btn-clear" 
        onClick={() => dispatch(clearAllIntent())} 
        disabled={isLoading}
      >
        Очистити всі
      </button>
    </footer>
  );
}

export default Footer;