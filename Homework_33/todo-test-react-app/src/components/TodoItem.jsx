import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoIntent, editTodoIntent, deleteTodoIntent } from '../redux/slices/todoSlice';
import { selectIsLoading } from '../redux/selectors';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [editText, setEditText] = useState(todo.text);

  return (
    <li className={`todo-item ${todo.checked ? 'todo-item--checked' : ''}`}>
      <input
        type="checkbox"
        className="form-check-input me-3"
        checked={todo.checked}
        onChange={() => dispatch(toggleTodoIntent({ id: todo.id, checked: todo.checked }))}
        disabled={isLoading}
      />

      <span className="flex-grow-1">{todo.text}</span>

      <div className="actions">
        <button 
          className="btn btn-sm btn-outline-secondary" 
          data-bs-toggle="modal" 
          data-bs-target={`#editModal${todo.id}`}
        >
          ✏️
        </button>
        <button 
          className="todo-item__delete" 
          onClick={() => dispatch(deleteTodoIntent(todo.id))}
          disabled={isLoading}
        >
          Видалити
        </button>
      </div>

      <div className="modal fade" id={`editModal${todo.id}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"><h5>Редагувати задачу</h5></div>
            <div className="modal-body">
              <input 
                className="form-control"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Скасувати</button>
              <button 
                className="btn btn-primary" 
                onClick={() => dispatch(editTodoIntent({ id: todo.id, newText: editText }))}
                data-bs-dismiss="modal"
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;