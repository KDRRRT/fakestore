import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setLoading, setSuccess, setError, clearSelectedProduct } from './store/productSlice.js';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import { CssBaseline } from '@mui/material';

function App() {
  const dispatch = useDispatch();
  

  const selectedProduct = useSelector((state) => state.products?.selectedProduct || null);
  const status = useSelector((state) => state.products?.status || 'idle');
  



 const fetchProducts = async () => {
    dispatch(setLoading());
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setSuccess());
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

    useEffect(() => {
    if (status === 'idle') {
      fetchProducts();
    }
  }, [status]);

  const handleModalClose = () => {
    dispatch(clearSelectedProduct());
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <SearchBar />
      <ProductList />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}

export default App;

