import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSwapiData, clearData } from '../../redux/slices/swapiSlice';
import { Box, Divider, IconButton, InputBase, Paper, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

function SwapiForm() {
  const [id, setId] = useState('1');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim()) {
      dispatch(fetchSwapiData(id));
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
      <Typography sx={{ 
        pl: 2, 
        color: 'text.secondary' 
        }}>
            ID:</Typography>
      <InputBase
        sx={{ 
            ml: 1, 
            flex: 1 
        }}

        placeholder="Введіть ID..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center' 
        }}>
        <Divider orientation="vertical" sx={{ 
            height: 34, 
            m: 0.5 
            }} />
        <IconButton color="primary" sx={{ 
            p: '10px' 
            }} type="submit">
          <SearchIcon />
        </IconButton>
        <Button 
          color="error" 
          startIcon={<DeleteIcon />} 
          onClick={() => dispatch(clearData())}
          sx={{ 
            ml: 1 
        }}
        >
          Очистити
        </Button>
      </Box>
    </Paper>
  );
}

export default SwapiForm;
import { Typography } from '@mui/material';