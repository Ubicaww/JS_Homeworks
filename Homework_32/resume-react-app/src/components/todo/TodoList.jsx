import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/selectors';
import { Stack, Typography } from '@mui/material';
import TodoItem from './TodoItem';

function TodoList() {
  const items = useSelector(selectTodos);

  if (items.length === 0) {
    return <Typography align="center" color="text.secondary">Список порожній</Typography>;
  }

  return (
    <Stack spacing={2}>
      {items.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
}

export default TodoList;