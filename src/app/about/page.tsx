"use client";

import React from 'react';
import { Typography, Box, Link as MuiLink } from '@mui/material';

export default function AboutPage() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        About This Application
      </Typography>

      <Typography variant="body1" paragraph>
        This web application was created as part of a frontend assessment for Webby Group.
        It demonstrates practical skills in React, TypeScript, Next.js, Material UI, and state management with Zustand.
      </Typography>

      <Typography variant="body1" paragraph>
        Features:
      </Typography>
      <ul>
        <li>Task Tracker with CRUD operations</li>
        <li>Country Listing using REST Countries API</li>
        <li>Responsive design with Material UI</li>
      </ul>

      <Typography variant="body1" paragraph>
        You can find the REST Countries API documentation here:{" "}
        <MuiLink href="https://restcountries.com/" target="_blank" rel="noopener">
          https://restcountries.com/
        </MuiLink>
      </Typography>

      <Typography variant="body1" paragraph>
        This project is entirely frontend and does not include any backend services.
      </Typography>
    </Box>
  );
}