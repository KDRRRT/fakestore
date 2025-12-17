import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  filteredItems: [],
  selectedProduct: null,
  status: 'idle', 
  error: null,
  searchQuery: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
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
    setLoading: (state) => {
      state.status = 'loading';
    },
    setSuccess: (state) => {
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { 
  setProducts, 
  setSearchQuery, 
  selectProduct, 
  clearSelectedProduct,
  setLoading,
  setSuccess,
  setError 
} = productSlice.actions;

export default productSlice.reducer;