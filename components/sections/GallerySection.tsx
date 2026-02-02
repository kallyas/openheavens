'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const GallerySection = () => {
  const showcaseImages = [
    { id: 1, src: '/images/event-img/img1.jpeg', alt: 'Preview from Mama Concert' },
    { id: 2, src: '/images/event-img/img2.jpeg', alt: 'Preview from Mama Concert' },
    { id: 3, src: '/images/event-img/img3.jpeg', alt: 'Preview from Mama Concert' },
    { id: 4, src: '/images/event-img/img4.jpeg', alt: 'Preview from Mama Concert' },
    { id: 5, src: '/images/event-img/img5.jpeg', alt: 'Preview from Mama Concert' },
    { id: 6, src: '/images/event-img/img6.jpeg', alt: 'Preview from Mama Concert' },
    { id: 7, src: '/images/event-img/img7.jpeg', alt: 'Preview from Mama Concert' },
    { id: 8, src: '/images/event-img/img8.jpeg', alt: 'Preview from Mama Concert' },
    { id: 9, src: '/images/event-img/img9.jpeg', alt: 'Preview from Mama Concert' },
    { id: 10, src: '/images/event-img/img10.jpeg', alt: 'Preview from Mama Concert' },
  ];

  return (
    <Box
      id="experience"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        backgroundColor: '#111827',
        overflow: 'hidden',
        minHeight: { xs: '600px', md: '800px' },
      }}
    >
      {/* Decorative Gradients */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '70%',
          background: 'linear-gradient(180deg, #7c3aed 0%, transparent 100%)',
          opacity: 0.1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          opacity: 0.1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
          opacity: 0.1,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Section Header - Centered */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '3rem', md: '5rem', lg: '7rem' },
            fontWeight: 900,
            color: 'white',
            textTransform: 'uppercase',
            mb: 3,
            lineHeight: 0.9,
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          THE GOD
          <br />
          OF GLORY
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.75rem', lg: '2.25rem' },
            fontWeight: 700,
            color: '#60a5fa',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          MAMA CONCERT 2026
        </Typography>
      </Box>

      {/* Floating Gallery Images */}
      {showcaseImages.map((image, index) => {
        const positions = [
          { top: '15%', left: '10%', width: 250, height: 150 },
          { top: '10%', right: '15%', width: 250, height: 150 },
          { bottom: '20%', left: '8%', width: 250, height: 150 },
          { bottom: '15%', right: '12%', width: 250, height: 150 },
          { top: '40%', left: '5%', width: 250, height: 150 },
          { top: '45%', right: '8%', width: 250, height: 150 },
          { top: '60%', left: '15%', width: 250, height: 150 },
          { bottom: '40%', right: '20%', width: 250, height: 150 },
          { top: '25%', left: '30%', width: 250, height: 150 },
          { bottom: '30%', right: '35%', width: 250, height: 150 },
        ];

        const position = positions[index] || positions[0];

        return (
          <Box
            key={image.id}
            sx={{
              position: 'absolute',
              ...position,
              display: { xs: index < 4 ? 'block' : 'none', md: 'block' },
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              '&:hover': {
                transform: 'scale(1.08)',
                zIndex: 10,
                boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={position.width}
              height={position.height}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default GallerySection;
