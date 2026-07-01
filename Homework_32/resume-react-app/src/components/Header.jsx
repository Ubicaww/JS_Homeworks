import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  '&.active': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontWeight: 'bold',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }
}));

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold' 
            }}>
          My Portfolio
        </Typography>
        <Box>
          <StyledNavLink to="/">Resume</StyledNavLink>
          <StyledNavLink to="/todo">TODO</StyledNavLink>
          <StyledNavLink to="/swapi">SWAPI</StyledNavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;