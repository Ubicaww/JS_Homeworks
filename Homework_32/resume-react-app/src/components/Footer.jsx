import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(3),
  marginTop: 'auto',
  textAlign: 'center',
}));

function Footer() {
  return (
    <FooterContainer component="footer">
      <Typography variant="h6" gutterBottom>Контакти</Typography>
      <Stack direction="row" spacing={3} sx={{ 
        justifyContent: 'center' 
        }}>
        <Typography>
          📱 <MuiLink href="tel:+380931111111" color="inherit" underline="hover">+38(093)111-11-11</MuiLink>
        </Typography>
        <Typography>
          📧 <MuiLink href="mailto:test@gmail.com" color="inherit" underline="hover">test@gmail.com</MuiLink>
        </Typography>
        <Typography>
          🌐 <MuiLink href="https://github.com/Ubicaww" target="_blank" color="inherit" underline="hover">github.com</MuiLink>
        </Typography>
      </Stack>
    </FooterContainer>
  );
}

export default Footer;