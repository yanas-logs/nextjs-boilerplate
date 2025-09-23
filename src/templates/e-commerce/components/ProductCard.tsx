"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        boxShadow: 3,
        borderRadius: 2,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.price}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ borderRadius: 2 }}
          >
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
