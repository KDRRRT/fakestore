import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
  Container,
  Grid,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";

const ProductList = () => {
  const { filteredItems } = useSelector((state) => state.products);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {filteredItems.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
