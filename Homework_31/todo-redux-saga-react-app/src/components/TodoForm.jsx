import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoIntent } from '../redux/slices/todoSlice';
import { selectIsLoading } from '../redux/selectors';

function TodoForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    dispatch(addTodoIntent(data.todoText));
    reset();
  };

  return (
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
      <button type="submit" className="form__btn" disabled={isLoading}>
        {isLoading ? "..." : "Додати"}
      </button>
    </form>
  );
}

export default TodoForm;