"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";
import Button from "@/components/ui/Button";

const VolunteerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#111827', // gray-900
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(30, 27, 75, 0.4), transparent)' }} /> {/* primary-900/40 */}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ maxWidth: '56rem', mx: 'auto', textAlign: 'center' }}>
            {/* Heading */}
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' }, fontWeight: 900, color: 'white', mb: 4, textTransform: 'uppercase' }}>
              Get Involved!
            </Typography>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Typography sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, color: '#d1d5db', mb: 6, lineHeight: 1.625 }}>
                Experience the joy of serving in God’s presence—join us and make a difference! Whether you enjoy greeting people, preparing spaces, or supporting behind the scenes, every contribution helps foster a welcoming and uplifting environment. Get involved, serve, and discover how rewarding it can be.
                </Typography>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                href="https://Hopevents.typeform.com/OHVol2025"
                external
                variant="primary"
                size="lg"
              >
                Volunteer With Us
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default VolunteerSection;
