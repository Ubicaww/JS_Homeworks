import { Container, Typography } from '@mui/material';
import SwapiForm from '../components/swapi/SwapiForm';
import SwapiResult from '../components/swapi/SwapiResult';

function SwapiPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" sx={{ 
        mb: 4, 
        fontWeight: 'bold' 
        }}>
        SWAPI
      </Typography>
      <SwapiForm />
      <SwapiResult />
    </Container>
  );
}

export default SwapiPage;