import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductById, clearCurrentProduct } from '../redux/productsSlice';
import { Container, Card, CardContent, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ImageIcon from '@mui/icons-material/Image';
import Header from '../components/Header';
import ProductDetailDrawer from '../components/ProductDetailDrawer';

const styles = {
  pageContainer: {
    bgcolor: '#4caf50', 
    height: 'calc(100vh - 64px)', 
    overflowY: 'auto',
    py: 4,
    '&::-webkit-scrollbar': { display: 'none' },
    msOverflowStyle: 'none', 
    scrollbarWidth: 'none'
  },
  gridContainer: {
    display: 'grid', 
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
    gap: 3 
  },
  card: {
    display: 'flex', 
    flexDirection: 'column', 
    cursor: 'pointer',
    borderRadius: 2, 
    '&:hover': { boxShadow: 10 } 
  },
  imageWrapper: {
    p: 2, 
    borderBottom: '1px solid #f0f0f0', 
    display: 'flex', 
    justifyContent: 'center'
  },

  imageBox: (photo, isOutOfStock) => ({
    height: 180, 
    width: '100%', 
    backgroundImage: photo ? `url(${photo})` : 'none',
    bgcolor: photo ? 'transparent' : 'grey.200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: isOutOfStock ? 'grayscale(100%) opacity(70%)' : 'none',
    transition: '0.3s',
    borderRadius: 1
    
  }),
  cardContent: {
    flexGrow: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    p: 2, 
    '&:last-child': { pb: 2 }
  },
  productTitle: {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    mb: 3, 
    lineHeight: 1.2
  },
  priceRow: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    mb: 2, 
    flexWrap: 'nowrap'
  },
  priceText: (isOutOfStock) => ({
    color: isOutOfStock ? 'grey.500' : '#ff5252', 
    fontWeight: 'bold', 
    lineHeight: 1,
    whiteSpace: 'nowrap',
    mr: 1
  }),
  statusRow: (isOutOfStock) => ({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    color: isOutOfStock ? 'grey.500' : '#00a046', 
    flexWrap: 'nowrap'
  })
};

const Preview = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleOpenDrawer = (id) => {
    setDrawerOpen(true);
    dispatch(fetchProductById(id));
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => dispatch(clearCurrentProduct()), 300);
  };

  return (
    <>
      <Header />
      <Box sx={styles.pageContainer}>
        <Container>
          <Box sx={styles.gridContainer}>
            {items.map((product) => {
              const isOutOfStock = Number(product.quantity) <= 0;

              return (
                <Card key={product.id} sx={styles.card} onClick={() => handleOpenDrawer(product.id)}>
                  <Box sx={styles.imageWrapper}>
                    <Box sx={styles.imageBox(product.photo, isOutOfStock)}>
                      {!product.photo && <ImageIcon sx={{ fontSize: 60, color: 'grey.400' }} />}
                    </Box>
                  </Box>
                  
                  <CardContent sx={styles.cardContent}>
                    <Typography variant="subtitle1" align="center" fontWeight="bold" sx={styles.productTitle}>
                      {product.name}
                    </Typography>
                    
                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={styles.priceRow}>
                        <Typography variant="h5" sx={styles.priceText(isOutOfStock)}>
                          {product.price} <span style={{ fontSize: '1rem' }}>₴</span>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'medium', whiteSpace: 'nowrap' }}>
                          Кількість: {product.quantity}
                        </Typography>
                      </Box>
                      
                      <Box sx={styles.statusRow(isOutOfStock)}>
                        {isOutOfStock ? <RemoveShoppingCartIcon sx={{ mr: 1, fontSize: '1.2rem', flexShrink: 0 }} /> : <ShoppingCartIcon sx={{ mr: 1, fontSize: '1.2rem', flexShrink: 0 }} />}
                        <Typography variant="body2" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                          {isOutOfStock ? 'Немає в наявності' : 'Готовий до відправки'}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Box>
      <ProductDetailDrawer open={drawerOpen} onClose={handleCloseDrawer} />
    </>
  );
};

export default Preview;