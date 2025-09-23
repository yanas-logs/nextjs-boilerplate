"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import styled from "@emotion/styled";

const HeroSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: linear-gradient(135deg, #1976d2, #90caf9);
  color: white;
  text-align: center;
`;

export default function Hero() {
  return (
    <HeroSection>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom fontWeight="bold">
          Welcome to Our Store
        </Typography>
        <Typography variant="h5" gutterBottom color="rgba(255,255,255,0.9)">
          Discover the best products at affordable prices
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3, borderRadius: 2, px: 4 }}
        >
          Shop Now
        </Button>
      </Container>
    </HeroSection>
  );
}
