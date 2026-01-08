'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FEATURED_ARTISTS } from '@/lib/constants';

const ArtistsSection = () => {
  return (
    <Box
      id="featuring"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 900,
              color: '#000',
              textTransform: 'uppercase',
              mb: 1,
              letterSpacing: '-0.02em',
            }}
          >
            RAISING VOICES TO WORSHIP THE LORD
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: '#6B7280',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            ALL RAISING VOICES TO JESUS
          </Typography>
        </Box>

        {/* Artists Grid */}
        <Grid container spacing={3}>
          {FEATURED_ARTISTS.map((artist) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={artist.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '125%',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                {/* Artist Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                  }}
                >
                  <Image
                    src={artist.image}
                    alt={`${artist.name} performing`}
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                </Box>

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
                  }}
                />

                {/* Artist Info */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      mb: 0.5,
                    }}
                  >
                    Featuring
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {artist.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ArtistsSection;
