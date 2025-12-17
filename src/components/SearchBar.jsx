import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/productSlice";
import { TextField, Container, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon
          sx={{ color: "action.active", mr: 1, my: 0.5, fontSize: "40px" }}
        />
        <TextField
          fullWidth
          label="Поиск товаров"
          variant="outlined"
          onChange={handleSearchChange}
          placeholder="Введите название товара..."
        />
      </Box>
    </Container>
  );
};

export default SearchBar;
