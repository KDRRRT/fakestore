import React from "react";
import { useDispatch } from "react-redux";
import { selectProduct } from "../store/productSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectProduct(product));
  };

  return (
    <Card
      sx={{
        height: "100%",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea onClick={handleClick} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", p: 2 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {product.title}
          </Typography>
          <Box sx={{ mt: "auto" }}>
            <Typography variant="h5" color="primary" fontWeight="bold">
              ${product.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
