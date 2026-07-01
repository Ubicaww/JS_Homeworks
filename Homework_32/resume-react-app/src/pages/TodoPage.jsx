import { Container, Typography } from '@mui/material';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

function TodoPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" sx={{ 
        mb: 4, 
        fontWeight: 'bold' 
        }}>
        ToDo List
      </Typography>
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default TodoPage;