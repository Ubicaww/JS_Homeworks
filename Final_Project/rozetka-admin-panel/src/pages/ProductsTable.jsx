import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import ProductModal from '../components/ProductModal';
import DeleteModal from '../components/DeleteModal';

const styles = {
  pageContainer: { 
    bgcolor: '#4caf50', 
    minHeight: 'calc(100vh - 64px)', 
    py: 6 
  },
  headerRow: { 
    position: 'relative', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    mb: 10, 
    height: '40px' 
  },
  headerBtnLeft: { 
    position: 'absolute', 
    left: 0, 
    bgcolor: 'white', 
    color: '#00a046', 
    '&:hover': { bgcolor: '#f1f1f1' }, 
    px: 3, 
    py: 1, 
    fontWeight: 'bold' 
  },
  headerBtnRight: { 
    position: 'absolute', 
    right: 0, 
    bgcolor: 'white', 
    color: '#00a046', 
    '&:hover': { bgcolor: '#f1f1f1' }, 
    px: 3, 
    py: 1, 
    fontWeight: 'bold' 
  },
  title: { 
    color: 'white', 
    fontWeight: 'bold' 
  },
  tableContainer: { 
    borderRadius: 0, 
    boxShadow: 5 
  },
  tableHeadCell: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: '1.1rem', 
    borderBottom: 'none', 
    userSelect: 'none' 
  },
  sortableHeader: { 
    display: 'inline-flex', 
    alignItems: 'center',
    cursor: 'pointer', 
    '&:hover': { color: '#e8f5e9' } 
  },
  resetBtn: { 
    color: 'white', 
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' } 
  },
  tableRow: (index) => ({ 
    bgcolor: index % 2 === 0 ? '#e0e0e0' : '#81c784', 
    transition: 'background-color 0.3s' 
  }),
  bodyCell: { 
    borderBottom: 'none', 
    color: 'black', 
    fontWeight: 'bold', 
    whiteSpace: 'normal', 
    wordWrap: 'break-word' 
  }
};

const ProductsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading } = useSelector((state) => state.products);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = () => {
    setSelectedProduct(null);
    setModalOpen(true);
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        if (['id', 'price', 'quantity'].includes(sortConfig.key)) {
          aValue = Number(aValue); bValue = Number(bValue);
        } else {
          aValue = String(aValue).toLowerCase(); bValue = String(bValue).toLowerCase();
        }
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const columns = [
    { label: 'ID', key: 'id', width: '10%' },
    { label: 'Category', key: 'category', width: '20%' },
    { label: 'Name', key: 'name', width: '30%' },
    { label: 'Quantity', key: 'quantity', width: '15%' },
    { label: 'Price (₴)', key: 'price', width: '15%' },
  ];

  return (
    <>
      <Header />
      <Box sx={styles.pageContainer}>
        <Container maxWidth="lg">
          <Box sx={styles.headerRow}>
            <Button variant="contained" startIcon={<PersonOutlineIcon />} sx={styles.headerBtnLeft} onClick={() => navigate('/preview')}>
              Preview
            </Button>
            <Typography variant="h2" sx={styles.title}>Products</Typography>
            <Button variant="contained" startIcon={<AddIcon />} sx={styles.headerBtnRight} onClick={handleAdd}>
              Add product
            </Button>
          </Box>

          <TableContainer component={Paper} sx={styles.tableContainer}>
            <Table sx={{ tableLayout: 'fixed', width: '100%' }}>
              <TableHead sx={{ bgcolor: '#2ecc71' }}>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell key={col.key} sx={{ ...styles.tableHeadCell, width: col.width }}>
                      <Box component="span" onClick={() => requestSort(col.key)} sx={styles.sortableHeader} title={`Сортувати за ${col.label}`}>
                        {col.label}
                        <Box component="span" sx={{ ml: 0.5, fontSize: '1rem', opacity: sortConfig.key === col.key ? 1 : 0.6 }}>
                          {sortConfig.key === col.key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↓↑'}
                        </Box>
                      </Box>
                    </TableCell>
                  ))}
                  <TableCell sx={{ color: 'white', borderBottom: 'none', width: '10%' }} align="right">
                    <IconButton onClick={() => setSortConfig({ key: null, direction: 'asc' })} sx={styles.resetBtn} title="Скинути сортування">
                      <RestartAltIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={6} align="center">Завантаження...</TableCell></TableRow>
                ) : items.length === 0 ? (
                  <TableRow><TableCell colSpan={6} align="center">Товарів немає!</TableCell></TableRow>
                ) : (
                  sortedItems.map((row, index) => (
                    <TableRow key={row.id} sx={styles.tableRow(index)}>
                      <TableCell sx={{ ...styles.bodyCell, whiteSpace: 'nowrap' }}>{row.id}</TableCell>
                      <TableCell sx={styles.bodyCell}>{row.category}</TableCell>
                      <TableCell sx={styles.bodyCell}>{row.name}</TableCell>
                      <TableCell sx={{ ...styles.bodyCell, whiteSpace: 'nowrap' }}>{row.quantity}</TableCell>
                      <TableCell sx={{ ...styles.bodyCell, whiteSpace: 'nowrap' }}>{row.price}</TableCell>
                      <TableCell align="right" sx={{ borderBottom: 'none' }}>
                        <IconButton sx={{ color: 'black' }} onClick={() => { setSelectedProduct(row); setModalOpen(true); }}><EditIcon /></IconButton>
                        <IconButton sx={{ color: 'black' }} onClick={() => { setSelectedProduct(row); setDeleteModalOpen(true); }}><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      {modalOpen && <ProductModal open={modalOpen} onClose={() => setModalOpen(false)} product={selectedProduct} />}
      {deleteModalOpen && <DeleteModal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} productId={selectedProduct?.id} />}
    </>
  );
};

export default ProductsTable;