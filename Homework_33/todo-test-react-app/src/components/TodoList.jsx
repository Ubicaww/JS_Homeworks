import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/selectors';
import TodoItem from './TodoItem';

function TodoList() {
  const items = useSelector(selectTodos);

  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;