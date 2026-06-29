import React, { useState, useEffect } from 'react';

function Home() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState('');
  const [selectedTaskText, setSelectedTaskText] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setTodos([...todos, { text: inputValue.trim(), checked: false }]);
    setInputValue('');
  };

  const handleToggle = (index) => {
    const updated = todos.map((todo, i) => 
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updated);
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };


  return (
    <div className="container my-custom-container mt-4">
      <h1>ToDoList</h1>
      
      <form className="form js--form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required 
          className="form__input js--form__input" 
          placeholder="Що потрібно зробити?" 
        />
        <button type="submit" className="form__btn">Додати</button>
      </form>

      <ul className="js--todos-wrapper list-unstyled">
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.checked ? 'todo-item--checked' : ''}`}>
            <input 
              type="checkbox" 
              checked={todo.checked} 
              onChange={() => handleToggle(index)}
            />
            <span 
              className="todo-item__description" 
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedTaskText(todo.text)}
            >
              {todo.text}
            </span>
            <button className="todo-item__delete" onClick={() => handleDelete(index)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>


      {selectedTaskText !== null && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setSelectedTaskText(null)}>
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content text-dark">
              <div className="modal-header">
                <h5 className="modal-title">Ваше завдання</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedTaskText(null)}></button>
              </div>
              <div className="modal-body">
                <p id="modal-task-text">{selectedTaskText}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedTaskText(null)}>Закрити</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;