import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h2>404 - Сторінку не знайдено</h2>
      <p>На жаль, такої сторінки не існує.</p>
      <Link to="/" className="btn btn-primary">Повернутися на головну</Link>
    </div>
  );
}

export default NotFound;