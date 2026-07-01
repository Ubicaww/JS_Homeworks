import { Container, Paper, Typography, Box, Divider } from '@mui/material';

function Resume() {
  return (
    <Container maxWidth="md">
      <Paper sx={{ 
          p: 4, 
          mt: 2, 
          borderRadius: 2 
          }} elevation={3}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Роман Розумняк
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Frontend Developer
        </Typography>
        
        <Divider sx={{ 
            my: 3 
            }} />
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Про мене</Typography>
          <Typography variant="body1" sx={{ 
            lineHeight: 1.8 
            }}>
            Привіт! Моя спеціалізація — Frontend Developer. Перетворюю складні дизайнерські макети на живий, інтерактивний 
            та pixel-perfect інтерфейс.Мій технологічний стек: JavaScript (ES6+), React, 
            Redux, Git. Вірю, що якісний фронтенд — це не лише про гарні анімації, а й про 
            високу продуктивність, доступність (Accessibility) та вирішення бізнес-задач. Завжди 
            відкритий до нових викликів, цікавих проєктів та командної роботи!
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Навички</Typography>
          <Typography variant="body1">
            🚀 React, Redux, JavaScript (ES6+), Material-UI, Git, HTML/CSS.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Resume;