import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import TodoPage from './pages/TodoPage';
import SwapiPage from './pages/SwapiPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' }}>
        <Header />
        
        <Box component="main" sx={{ 
          flexGrow: 1, 
          p: 3 
          }}>
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/swapi" element={<SwapiPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;