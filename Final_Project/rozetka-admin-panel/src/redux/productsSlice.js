import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../api/mockApi';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await apiClient.get('/products');
  return response.data;
});

export const fetchProductById = createAsyncThunk('products/fetchById', async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
});

export const addProduct = createAsyncThunk('products/add', async (productData) => {
  const response = await apiClient.post('/products', productData);
  return response.data;
});

export const updateProduct = createAsyncThunk('products/update', async ({ id, data }) => {
  const response = await apiClient.put(`/products/${id}`, data);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await apiClient.delete(`/products/${id}`);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    currentProduct: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentProduct: (state) => { state.currentProduct = null; }
  },
extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { 
        state.loading = true; 
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Помилка завантаження з MockAPI:", action.error.message);
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export const { clearCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;