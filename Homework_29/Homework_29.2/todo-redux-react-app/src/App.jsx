import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ThemeContext } from './context/ThemeContext';
import ThemeSwitch from './components/ThemeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/slices/todoSlice';
import { selectTodos, selectTodosCount } from './redux/selectors';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const totalCount = useSelector(selectTodosCount);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    dispatch(addTodo(data.todoText));
    reset();
  };

  return (
    <div className={`app-wrapper ${theme}-theme`}>
      <header className="header">
        <h1>ToDo List Redux</h1>
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
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>

      <footer className="footer">
        Всього задач: {totalCount}
      </footer>
    </div>
  );
}

export default App;