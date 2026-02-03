"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Container, Button } from "@mui/material";

const TransportationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      id="transportation"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' }, fontWeight: 900, color: 'black', mb: 4, textTransform: 'uppercase', lineHeight: 1.2 }}>
              Ride With Us<br />We'll Pick You Up
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'black', maxWidth: '48rem', mx: 'auto', mb: 4 }}>
              Reserve a seat on one of the many{' '}
              <Typography component="span" sx={{ color: '#1e40af', fontWeight: 700 }}>
                FREE
              </Typography>
              {' '}buses heading out for the event. Shuttles depart after the midnight blessing, so you're covered for the trip there and back.
            </Typography>
          </Box>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component="a"
              href="https://form.typeform.com/to/Ij072pJa?typeform-source=helicon-dinosaur-2nx4.squarespace.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              data-testid="tf-v1-popup"
              sx={{
                bgcolor: 'black',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: '0.5rem',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#333',
                }
              }}
            >
              Grab A Free Ride
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TransportationSection;