import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlined';

const styles = {
  pageContainer: { 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    bgcolor: '#f5f5f5'
  },
  icon: { 
    fontSize: 100, 
    color: '#00a046', 
    mb: 2 
  },
  titleText: { 
    color: '#333', 
    fontSize: { xs: '4rem', sm: '6rem' } 
  },
  subtitleText: { 
    color: 'text.secondary', 
    mb: 4, 
    fontWeight: 'medium' 
  },
  bodyText: { 
    color: 'text.secondary', 
    mb: 5 
  },
  homeBtn: { 
    bgcolor: '#00a046', 
    color: 'white',
    px: 5,
    py: 1.5,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    '&:hover': { bgcolor: '#008a3c' }
  }
};

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.pageContainer}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <ErrorOutlineIcon sx={styles.icon} />
        
        <Typography variant="h1" fontWeight="bold" sx={styles.titleText}>
          404
        </Typography>
        
        <Typography variant="h5" sx={styles.subtitleText}>
          Ой! Здається, такої сторінки не існує.
        </Typography>
        
        <Typography variant="body1" sx={styles.bodyText}>
          Можливо, ви ввели неправильну адресу або сторінку було видалено.
        </Typography>
        
        <Button variant="contained" size="large" onClick={() => navigate('/products')} sx={styles.homeBtn}>
          Повернутися на головну
        </Button>
      </Container>
    </Box>
  );
};

export default NotFound;