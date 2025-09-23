"use client";

import { Box, Typography, Paper } from "@mui/material";

export default function Features() {
  const features = [
    { title: "Free Shipping", description: "Available for all orders above X " },
    { title: "Guaranteed Quality", description: "100% authentic & premium quality products" },
    { title: "24/7 Support", description: "Our team is ready to assist you anytime" },
  ];

  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4, // spacing between cards
        }}
      >
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              flex: "1 1 300px", // responsive min width
              maxWidth: 360,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {feature.title}
            </Typography>
            <Typography color="text.secondary">
              {feature.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
