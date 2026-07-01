import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container sx={{ 
        textAlign: 'center', 
        mt: 10 
        }}>
      <Typography variant="h2" color="error" gutterBottom>404</Typography>
      <Typography variant="h5" gutterBottom>Сторінку не знайдено</Typography>
      <Button variant="contained" component={Link} to="/" sx={{ 
        mt: 3 
        }}>
        Повернутися на головну
      </Button>
    </Container>
  );
}

export default NotFound;