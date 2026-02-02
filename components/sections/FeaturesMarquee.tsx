'use client';

import React from 'react';
import { Box, Container } from '@mui/material';
import Marquee from '@/components/ui/Marquee';
import { EVENT_FEATURES } from '@/lib/constants';

const FeaturesMarquee = () => {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 6 },
        backgroundColor: '#00759c',
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
        <Marquee speed="slow" separator={true}>
          {EVENT_FEATURES.map((feature) => (
            <Box
              key={feature.id}
              component="p"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 800,
                color: 'white',
                m: 0,
                whiteSpace: 'nowrap',
              }}
            >
              {feature.text.toUpperCase()}
            </Box>
          ))}
        </Marquee>
      </Container>
    </Box>
  );
};

export default FeaturesMarquee;
