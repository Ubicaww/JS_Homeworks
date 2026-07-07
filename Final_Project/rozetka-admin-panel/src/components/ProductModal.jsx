import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/productsSlice';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProductModal = ({ open, onClose, product }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const isEdit = !!product;

  useEffect(() => {
    if (product) {
      reset(product);
    } else {
      reset({
        category: "",
        name: "",
        quantity: "",
        price: "",
        photo: "",
        description: "",
      });
    }
  }, [product, reset]);

  const onSubmit = (data) => {
    if (isEdit) {
      dispatch(updateProduct({ id: product.id, data }));
    } else {
      dispatch(addProduct(data));
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {isEdit ? 'Edit product' : 'Add product'}
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <TextField fullWidth label="Category" margin="dense" {...register('category', { required: true })} />
          <TextField fullWidth label="Name" margin="dense" {...register('name', { required: true })} />
          <TextField fullWidth label="Quantity" type="number" margin="dense" {...register('quantity', { required: true })} />
          <TextField fullWidth label="Price" type="number" margin="dense" {...register('price', { required: true })} />
          <TextField fullWidth label="Photo URL" margin="dense" {...register('photo')} />
          <TextField fullWidth label="Description" multiline rows={4} margin="dense" {...register('description')} />
        </DialogContent>
        <DialogActions sx={{ p: 2, justifyContent: 'center', gap: 2 }}>
          <Button onClick={onClose} variant="contained" sx={{ bgcolor: 'grey.600' }}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ProductModal;