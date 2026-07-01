import React from 'react';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  return (
    <header className="header">
      <h1>ToDo List</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;