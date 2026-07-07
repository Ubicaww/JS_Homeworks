import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, TextField, Button, IconButton, InputAdornment, FormControl, InputLabel, FilledInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../assets/logo-green.svg';

const styles = {
  pageContainer: { 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    bgcolor: '#4caf50' 
  },
  formCard: { 
    p: 5, 
    width: 400, 
    textAlign: 'center', 
    borderRadius: 2 
  },
  logo: { 
    height: 50, 
    mb: 4 
  },
  submitBtn: { 
    mt: 3, 
    py: 1.5, 
    fontSize: '1.1rem' 
  },
  errorText: { 
    mt: 2 
  }
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const adminUser = import.meta.env.VITE_ADMIN_USER;
    const adminPass = import.meta.env.VITE_ADMIN_PASS;

    if (data.username === adminUser && data.password === adminPass) {
      const fakeToken = btoa(data.username + data.password);
      dispatch(loginSuccess(fakeToken));
      navigate('/products');
    } else {
      setLoginError('Такого користувача не існує або невірний пароль');
    }
  };

  const handleTogglePasswordVisibility = () => {
    const input = document.getElementById("filled-adornment-password");
    const cursorPosition = input ? input.selectionStart : 0;
    setShowPassword(!showPassword);
    setTimeout(() => {
      const activeInput = document.getElementById("filled-adornment-password");
      if (activeInput) {
        activeInput.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, 0);
  };

  return (
    <Box sx={styles.pageContainer}>
      <Paper sx={styles.formCard} elevation={5}>
        <Box component="img" src={logo} alt="Rozetka" sx={styles.logo} />
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth label="User Name" margin="normal" variant="filled"
            {...register('username', { required: true })}
            error={!!errors.username}
          />
          
          <FormControl fullWidth variant="filled" margin="normal" error={!!errors.password}>
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} onMouseDown={(e) => e.preventDefault()} edge="end">
                    {showPassword ? <VisibilityOff sx={{ color: 'green' }} /> : <Visibility sx={{ color: 'green' }} />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          
          <Button fullWidth type="submit" variant="contained" color="primary" sx={styles.submitBtn}>
            Login
          </Button>
          
          {loginError && <Typography color="error" variant="body2" sx={styles.errorText}>{loginError}</Typography>}
        </form>
      </Paper>
    </Box>
  );
};

export default Login;