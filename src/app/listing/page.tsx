"use client";

import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, Grid, CircularProgress, } from '@mui/material';
import { fetchCountries, Country } from '@/library/api';

export default function ListingPage() {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCountries().then((data) => setCountries(data)).catch(()=> setError("Failed to load countries")).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress/>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Country Listing
      </Typography>

      <Grid container spacing={2}>
        {countries.slice(0,12).map((country, index) => {
          const currencyList = country.currencies? Object.values(country.currencies).map((c) => c.name).join(", "): "N/A";
          const languageList = country.languages? Object.values(country.languages).join(", "): "N/A";

          return (
            <Grid key={index} style={{ width: '100%', maxWidth: 400 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {country.name.common}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Region: {country.region}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Currency: {currencyList}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Languages: {languageList}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}