'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { EVENT_FEATURES } from '@/lib/constants';

const FeaturesMarquee = () => {
  const features = [...EVENT_FEATURES, ...EVENT_FEATURES, ...EVENT_FEATURES, ...EVENT_FEATURES];
  const featureText = features.map(f => f.text).join(' • ');

  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          overflow: 'hidden',
        }}
      >
        <Box
          className="infiniteScroll_scrollItems"
          sx={{
            display: 'flex',
            whiteSpace: 'nowrap',
            animation: 'scroll-features 60s linear infinite',
            '@keyframes scroll-features': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {/* First set */}
          {features.map((feature, index) => (
            <Typography
              key={`feature-1-${index}`}
              component="p"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                fontWeight: 600,
                color: '#111827',
                px: 0,
                '&::after': {
                  content: '"•"',
                  display: 'inline-block',
                  mx: 3,
                  fontSize: '1.5rem',
                  color: '#6b7280',
                },
              }}
            >
              {feature.text}
            </Typography>
          ))}
          {/* Second set for seamless loop */}
          {features.map((feature, index) => (
            <Typography
              key={`feature-2-${index}`}
              component="p"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                fontWeight: 600,
                color: '#111827',
                px: 0,
                '&::after': {
                  content: '"•"',
                  display: 'inline-block',
                  mx: 3,
                  fontSize: '1.5rem',
                  color: '#6b7280',
                },
              }}
            >
              {feature.text}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesMarquee;
