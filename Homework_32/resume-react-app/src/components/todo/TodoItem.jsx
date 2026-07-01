import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux/slices/todoSlice';
import { Paper, Checkbox, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ItemPaper = styled(Paper)(({ theme, checked }) => ({
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  backgroundColor: checked ? theme.palette.action.hover : theme.palette.background.paper,
  cursor: 'pointer',
  transition: 'background-color 0.2s',
}));

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <ItemPaper checked={todo.checked} onClick={() => dispatch(toggleTodo(todo.id))}>
      <Checkbox 
        checked={todo.checked} 
        disableRipple 
        sx={{ 
            p: 0, 
            mr: 2 
        }} 
      />
      <Typography 
        sx={{ 
          textDecoration: todo.checked ? 'line-through' : 'none', 
          opacity: todo.checked ? 0.6 : 1,
          wordBreak: 'break-word',
          flexGrow: 1
        }}
      >
        {todo.text}
      </Typography>
    </ItemPaper>
  );
}

export default TodoItem;