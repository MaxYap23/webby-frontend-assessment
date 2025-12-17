"use client";

import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box sx={{ padding: "2rem", textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Home Page
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        This is a simple frontend application demonstrating task tracker functionality and public API integration using React, TypeScript, and Material UI.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" component={Link} href="/tasks">
          Task Tracker
        </Button>
        <Button variant="outlined" component={Link} href="/listing">
          Country Listing
        </Button>
        <Button variant="outlined" component={Link} href="/about">
          About
        </Button>
      </Box>
    </Box>
  );
}