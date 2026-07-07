import { Box, Drawer, IconButton, Typography, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlined';
import ImageIcon from '@mui/icons-material/Image';
import { useSelector } from 'react-redux';

const styles = {
  drawerContainer: { 
    width: { xs: '100vw', sm: '60vw', md: '45vw', lg: '35vw' },
    minWidth: { sm: 400 },
    maxWidth: 700,
    p: { xs: 2, sm: 4 },
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%', 
    overflowY: 'auto' 
  },
  headerRow: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    mb: 3 
  },
  loaderWrapper: { 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexGrow: 1 
  },
  imageBox: (photo) => ({
    width: '100%', 
    height: 300, 
    backgroundImage: photo ? `url(${photo})` : 'none',
    bgcolor: photo ? 'transparent' : 'grey.200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    mb: 4,
    borderRadius: 1
  }),
  statusText: (isOutOfStock) => ({ 
    color: isOutOfStock ? 'grey.500' : '#00a046', 
    display: 'flex', 
    alignItems: 'center', 
    mb: 1, 
    fontWeight: 'bold' 
  }),
  priceText: (isOutOfStock) => ({ 
    color: isOutOfStock ? 'grey.500' : '#ff5252', 
    fontWeight: 'bold', 
    mb: 2 
  }),
  descriptionText: { 
    whiteSpace: 'pre-wrap', 
    wordBreak: 'break-word', 
    color: 'text.secondary', 
    lineHeight: 1.6,
  }
};

const ProductDetailDrawer = ({ open, onClose }) => {
  const { currentProduct, loading } = useSelector((state) => state.products);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={styles.drawerContainer}>
        <Box sx={styles.headerRow}>
          <Typography variant="h5" fontWeight="bold">Деталі товару</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        {loading || !currentProduct ? (
          <Box sx={styles.loaderWrapper}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box>
            <Typography variant="h4" fontWeight="bold" mb={3}>{currentProduct.name}</Typography>
            
            <Box sx={styles.imageBox(currentProduct.photo)}>
              {!currentProduct.photo && <ImageIcon sx={{ fontSize: 80, color: 'grey.400' }} />}
            </Box>
            
            <Typography variant="h6" sx={styles.statusText(Number(currentProduct.quantity) <= 0)}>
              {Number(currentProduct.quantity) <= 0 ? <><ErrorOutlineIcon sx={{ mr: 1 }} /> Немає в наявності</> : <><CheckCircleOutlineIcon sx={{ mr: 1 }} /> Є в наявності</>}
            </Typography>
            
            <Typography variant="h3" sx={styles.priceText(Number(currentProduct.quantity) <= 0)}>
              {currentProduct.price} ₴
            </Typography>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Кількість на складі: {currentProduct.quantity}
            </Typography>
            
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Опис</Typography>
            
            <Typography variant="body1" sx={styles.descriptionText}>
              {currentProduct.description || 'Опис для цього товару відсутній...'}
            </Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default ProductDetailDrawer;