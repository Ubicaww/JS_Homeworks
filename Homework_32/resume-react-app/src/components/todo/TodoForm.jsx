import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todoSlice';
import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{ 
        p: '2px 4px', 
        display: 'flex', 
        alignItems: 'center', 
        mb: 3 
      }}
    >
      <InputBase
        sx={{ 
          ml: 1, 
          flex: 1 
        }}
        placeholder="Додати нове завдання..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Box sx={{ display: 'flex' }}>
        <Divider orientation="vertical" sx={{ 
            height: 34, 
            m: 0.5 
            }} />
        <IconButton color="primary" sx={{ 
            p: '10px' 
            }} type="submit">
          <AddIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default TodoForm;