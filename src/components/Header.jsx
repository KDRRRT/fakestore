import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <StoreIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FakeStore
          </Typography>
          <Typography variant="body1">
            Интернет-магазин
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;