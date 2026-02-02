"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Container, Grid } from '@mui/material';
import Button from "@/components/ui/Button";
import { EVENT_INFO } from "@/lib/constants";

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder for photo album
  const communityPhotos = [1, 2, 3, 4, 5, 6];

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Content */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
                  fontWeight: 900,
                  color: '#1e1b4b', // primary-900
                  mb: 4,
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                This Could Be You
                <br />
                At Mama Concert 2026
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  color: '#374151', // gray-700
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                People just like you, experiencing worship, connection, and
                transformation. This isn't just a concert but a life-changing experience that brings people together from all walks of life.
                Join us and be part of something extraordinary Worship , Praise.
              </Typography>

              <Button
                href={EVENT_INFO.ticketUrl}
                external
                variant="primary"
                size="lg"
              >
                Grab Your Seat Now
              </Button>
            </motion.div>
          </Grid>

          {/* Right Column - Photo Album */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Decorative blob behind */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: '-16px',
                  background: 'linear-gradient(to right, #dbeafe, #f3e8ff)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  opacity: 0.5,
                  zIndex: 0,
                }}
              />

              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, position: 'relative', zIndex: 10 }}>
                {/* Large Feature Image */}
                <motion.div
                  style={{ gridColumn: 'span 2', aspectRatio: '16/9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', position: 'relative' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <img
                    src="/images/event-img/img2.jpeg"
                    alt="Community worship"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 3
                  }}>
                    <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '1.125rem' }}>Worship together</Typography>
                  </Box>
                </motion.div>

                {/* Smaller Images */}
                <motion.div
                  style={{ aspectRatio: '1/1', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', position: 'relative' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <img
                    src="/images/event-img/img10.jpeg"
                    alt="Singing together"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>

                <motion.div
                  style={{ aspectRatio: '1/1', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', position: 'relative' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <img
                    src="/images/event-img/img8.jpeg"
                    alt="Friends at concert"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunitySection;
