import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearSelectedProduct } from '../store/productSlice';
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  CardMedia,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: 600 },
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflow: 'auto',
};

const ProductModal = ({ product, open, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    dispatch(clearSelectedProduct());
  };

  const handleBuyClick = () => {
    alert(`Товар "${product.title}" добавлен в корзину!`);
    handleClose();
  };

  if (!product) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="h2" fontWeight="bold">
            {product.title}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            width: '100%',
            height: 300,
            objectFit: 'contain',
            mb: 3,
          }}
        />
        
        <Typography variant="body1" paragraph>
          {product.description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            ${product.price}
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingCartIcon />}
            onClick={handleBuyClick}
            sx={{ px: 4 }}
          >
            Купить
          </Button>
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" color="text.secondary">
            Категория: {product.category}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductModal;