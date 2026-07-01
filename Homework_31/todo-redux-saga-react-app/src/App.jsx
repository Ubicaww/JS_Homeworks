import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from './context/ThemeContext';
import { fetchTodosIntent } from './redux/slices/todoSlice';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosIntent());
  }, [dispatch]);

  return (
    <div className={`app-wrapper ${theme}-theme`}>
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;