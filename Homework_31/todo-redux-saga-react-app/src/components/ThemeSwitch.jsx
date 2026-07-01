import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      className={`theme-toggle ${theme === 'dark' ? 'dark' : 'light'}`} 
      onClick={toggleTheme}
    >
      <span className="toggle-thumb">
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}

export default ThemeSwitch;