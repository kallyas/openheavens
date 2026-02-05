'use client';

import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import Image from 'next/image';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import galleryData from '../../gallery_by_year.json';

// Dynamic import for Lightbox to reduce initial bundle size
const Lightbox = lazy(() => import('yet-another-react-lightbox'));

interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>(
    Object.keys(galleryData)[0]
  );
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Get years in descending order - memoized to prevent recalculation
  const years = useMemo(
    () => Object.keys(galleryData).sort((a, b) => parseInt(b) - parseInt(a)),
    []
  );

  // Prepare photos for the selected year - memoized
  const photos: Photo[] = useMemo(
    () =>
      galleryData[selectedYear as keyof typeof galleryData].map(
        (filename: string) => ({
          src: `/images/gallery/${filename}`,
          width: 1500,
          height: 1000,
          alt: `Gallery image from ${selectedYear}`,
        })
      ),
    [selectedYear]
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #0a0a0a, #111827)',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            mb: 8,
            textAlign: 'center',
            animation: 'fadeIn 0.8s ease-out',
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem', lg: '7rem' },
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              mb: 3,
              lineHeight: 0.9,
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(124, 58, 237, 0.3)',
            }}
          >
            Gallery
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            Capturing moments of worship, fellowship, and divine encounters
          </Typography>
        </Box>

        {/* Year Filter Chips */}
        <Box
          sx={{
            mb: 8,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
            animation: 'fadeIn 1s ease-out 0.2s backwards',
          }}
        >
          {years.map((year) => (
            <Chip
              key={year}
              label={year}
              onClick={() => setSelectedYear(year)}
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 700,
                height: '40px',
                borderRadius: '20px',
                border: selectedYear === year ? '2px solid #7c3aed' : '2px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: selectedYear === year
                  ? 'rgba(124, 58, 237, 0.2)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: selectedYear === year ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: selectedYear === year
                    ? 'rgba(124, 58, 237, 0.3)'
                    : 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(124, 58, 237, 0.3)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            />
          ))}
        </Box>

        {/* Photo Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, md: 3 },
            animation: 'fadeIn 1.2s ease-out 0.4s backwards',
          }}
        >
          {photos.map((photo, index) => (
            <Box
              key={`${selectedYear}-${index}`}
              onClick={() => setLightboxIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                position: 'relative',
                aspectRatio: '3/4',
                overflow: 'hidden',
                borderRadius: '16px',
                cursor: 'pointer',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 20px 60px rgba(124, 58, 237, 0.4)',
                  borderColor: 'rgba(124, 58, 237, 0.5)',
                },
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={85}
                priority={index < 8} // Load first 8 images with priority
                loading={index < 8 ? undefined : 'lazy'}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                }}
              />

              {/* Overlay on Hover */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: hoveredIndex === index
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(124, 58, 237, 0.3) 50%, transparent 100%)'
                    : 'transparent',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  p: 3,
                  pointerEvents: 'none',
                }}
              >
                {hoveredIndex === index && (
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                    }}
                  >
                    Click to view
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Empty State */}
        {photos.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 10,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              No images available for {selectedYear}
            </Typography>
          </Box>
        )}
      </Container>

      {/* Lightbox - Only loaded when opened */}
      {lightboxIndex >= 0 && (
        <Suspense fallback={null}>
          <Lightbox
            slides={photos}
            open={lightboxIndex >= 0}
            index={lightboxIndex}
            close={() => setLightboxIndex(-1)}
            plugins={[Zoom, Fullscreen]}
            styles={{
              container: {
                backgroundColor: 'rgba(0, 0, 0, 0.97)',
              },
            }}
            zoom={{
              maxZoomPixelRatio: 3,
              scrollToZoom: true,
            }}
          />
        </Suspense>
      )}
    </Box>
  );
}
