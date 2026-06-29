import React from 'react';

function Contacts() {
  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm border-0 bg-transparent card-themed">
        <h2>Контакти</h2>
        <p className="mt-3">Зв'яжіться зі мною будь-яким зручним для вас способом:</p>
        <ul className="list-group list-group-flush mt-2 rounded">
          
          <li className="list-group-item bg-transparent text-inherit">
            📱 Номер телефону: 
            <a href="tel:+380931111111" className="text-success text-decoration-none ms-2">
              +38(093)111-11-11
            </a>
          </li>

          <li className="list-group-item bg-transparent text-inherit">
            📧 Email: 
            <a href="mailto:test@gmail.com" className="text-success text-decoration-none ms-2">
              test@gmail.com
            </a>
          </li>

          <li className="list-group-item bg-transparent text-inherit">
            🌐 GitHub: 
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-success text-decoration-none ms-2">
              github.com/test
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Contacts;