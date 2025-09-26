"use client";

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import Image from "next/image";

const sampleProducts = [
  { label: "Cement Bag" },
  { label: "Paint 5L White" },
  { label: "Wooden Door" },
  { label: "Steel Pipe" },
  { label: "Ceramic Tiles" },
];

export default function Navigation() {
  return (
    <header>
      {/* 🔹 Promo Banner */}
      <Box className="bg-blue-600 text-white text-center py-2 text-sm">
        <Link href="/promotions" className="hover:underline font-medium">
          🎉 Special Promo! Click here to see all offers 🎉
        </Link>
      </Box>

      {/* 🔹 Main Header */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={1}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={120}
              height={40}
            />
          </Link>

          {/* Search with Autocomplete */}
          <Box className="flex-1 max-w-xl">
            <Autocomplete
              freeSolo
              options={sampleProducts.map((option) => option.label)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Find your products..."
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {params.InputProps.endAdornment}
                        <IconButton edge="end">
                          <SearchIcon />
                        </IconButton>
                      </>
                    ),
                  }}
                />
              )}
            />
          </Box>

          {/* Actions */}
          <Box className="flex items-center gap-3 shrink-0">
            <IconButton color="inherit" aria-label="shopping cart">
              <ShoppingCartIcon />
            </IconButton>
            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              size="small"
            >
              Login
            </Button>
            <Button variant="contained" color="primary" size="small">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}
