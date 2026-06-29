import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ThemeContext } from './context/ThemeContext';
import ThemeSwitch from './components/ThemeSwitch';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const { theme } = useContext(ThemeContext);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    setTodos([...todos, { text: data.todoText, checked: false }]);
    reset();
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className={`app-wrapper ${theme}-theme`}>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <h1>ToDo List</h1>
        <ThemeSwitch />
      </header>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <input
            className="form__input"
            {...register("todoText", { 
              required: "Введіть текст задачі!", 
              minLength: { value: 5, message: "Мінімум 5 символів!" } 
            })}
            placeholder="Що зробити?"
          />
          {errors.todoText && <p className="error-msg">{errors.todoText.message}</p>}
        </div>
        <button type="submit" className="form__btn">Додати</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.checked ? 'todo-item--checked' : ''}`}>
            <span onClick={() => toggleTodo(index)}>
             {todo.text}
            </span>
            <button className="todo-item__delete" onClick={() => deleteTodo(index)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;