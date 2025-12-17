import { configureStore } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
    searchQuery: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      
      if (action.payload.trim() === '') {
        state.filteredItems = state.items;
      } else {
        const query = action.payload.toLowerCase();
        state.filteredItems = state.items.filter(product =>
          product.title.toLowerCase().includes(query)
        );
      }
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  }
});

export const { setSearchQuery, selectProduct, clearSelectedProduct } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});