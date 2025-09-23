"use client";

import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductCard from "./components/ProductCard";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function EcommerceLanding() {
  // Example product data
  const products = [
    { id: 1, name: "Product A", price: "$10", image: "/images/product1.jpg" },
    { id: 2, name: "Product B", price: "$15", image: "/images/product2.jpg" },
    { id: 3, name: "Product C", price: "$20", image: "/images/product3.jpg" },
    { id: 4, name: "Product D", price: "$25", image: "/images/product4.jpg" },
    { id: 5, name: "Product C", price: "$30", image: "/images/product3.jpg" },
    { id: 6, name: "Product D", price: "$35", image: "/images/product4.jpg" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Products Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Featured Products
          </Typography>

          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 6, textAlign: "center", background: "#f5f5f5" }}>
        <Container maxWidth="md">
          <Typography variant="h6">
            © 2025 Our Store. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
