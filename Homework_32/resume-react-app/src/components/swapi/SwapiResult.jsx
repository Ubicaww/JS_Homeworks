import { useSelector } from 'react-redux';
import { selectSwapiData, selectSwapiLoading, selectSwapiError } from '../../redux/selectors';
import { Paper, Typography, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const JsonBlock = styled(Box)(({ theme }) => ({
  backgroundColor: '#272c34',
  color: '#abb2bf',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  overflowX: 'auto',
  fontFamily: 'monospace',
  fontSize: '14px',
}));

function SwapiResult() {
  const data = useSelector(selectSwapiData);
  const loading = useSelector(selectSwapiLoading);
  const error = useSelector(selectSwapiError);

  if (loading) {
    return <Box sx={{ 
        textAlign: 'center', 
        mt: 4 
    }}><CircularProgress /></Box>;
  }

  if (error) {
    return (
      <Paper sx={{ 
        p: 3, 
        bgcolor: '#fee2e2', 
        color: '#dc2626' }}>
        <Typography variant="h6">Помилка</Typography>
        <Typography>{error}</Typography>
      </Paper>
    );
  }

  if (!data) return null;

  return (
    <Paper sx={{ 
        p: 3, 
        borderTop: '4px solid', 
        borderColor: 'primary.main' 
        }} elevation={3}>
      <Typography variant="h5" gutterBottom>Профіль ID: {data.id}</Typography>
      <JsonBlock component="pre">
        {JSON.stringify(data, null, 2)}
      </JsonBlock>
    </Paper>
  );
}

export default SwapiResult;