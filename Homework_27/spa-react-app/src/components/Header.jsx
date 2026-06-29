import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import ThemeSwitch from './ThemeSwitch';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg px-4 shadow-sm ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">MySPA</span>
        <div className="navbar-nav me-auto flex-row gap-3">
          <NavLink to="/" className="nav-link">Головна</NavLink>
          <NavLink to="/contacts" className="nav-link">Контакти</NavLink>
          <NavLink to="/about" className="nav-link">Про мене</NavLink>
        </div>
        <div className="d-flex align-items-center">
    <ThemeSwitch />
</div>
      </div>
    </nav>
  );
}

export default Header;