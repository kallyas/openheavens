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
        backgroundColor: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              mb: 2,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            LEADING VOICES
          </Typography>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: '#9CA3AF',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            ALL POINTING TO JESUS
          </Typography>
        </Box>

        {/* Artists Grid */}
        <Grid container spacing={4}>
          {FEATURED_ARTISTS.map((artist) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={artist.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '140%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
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
                    src={artist.image ?? '/images/placeholder-artist.jpg'}
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                  }}
                />

                {/* Artist Info */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 3, md: 4 },
                    zIndex: 1,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    Featuring
                  </Typography>
                  <Typography
                    component="h2"
                    sx={{
                      color: 'white',
                      fontSize: { xs: '1.75rem', md: '2rem' },
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
