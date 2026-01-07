"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaBus, FaDownload } from "react-icons/fa";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { SHUTTLE_ROUTES, EVENT_INFO } from "@/lib/constants";

const TransportationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);

  return (
    <Box
      id="transportation"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(135deg, var(--primary-900) 0%, var(--primary-700) 100%)', // gradient-primary
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Elements */}
      <Box sx={{ position: 'absolute', top: 80, left: 40, width: 256, height: 256, bgcolor: 'rgba(234, 179, 8, 0.05)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <Box sx={{ position: 'absolute', bottom: 80, right: 40, width: 256, height: 256, bgcolor: 'rgba(249, 115, 22, 0.05)', borderRadius: '50%', filter: 'blur(40px)' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box sx={{ display: 'inline-flex', p: 2, bgcolor: 'rgba(249, 115, 22, 0.2)', borderRadius: '50%', mb: 3 }}>
              <FaBus style={{ fontSize: '3.75rem', color: '#fb923c' }} />
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' }, fontWeight: 900, color: 'white', mb: 2, textTransform: 'uppercase' }}>
              Ride With Us
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: '#facc15', fontWeight: 700, mb: 2 }}>
              We'll Pick You Up
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: '#d1d5db', maxWidth: '48rem', mx: 'auto' }}>
              Take advantage of other people moving to the same event by booking a seat to ride along. Reserve your spot today!
            </Typography>
          </Box>
        </motion.div>

        {/* Shuttle Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ maxWidth: '56rem', mx: 'auto', mb: 6 }}>
            <Typography variant="h3" sx={{ fontSize: '1.875rem', fontWeight: 700, color: 'white', textAlign: 'center', mb: 4 }}>
              Shuttle Schedule
            </Typography>

            {/* Routes Grid */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {SHUTTLE_ROUTES.map((route, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={route.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Box
                      onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}
                      sx={{
                        bgcolor: selectedRoute === route.id ? 'rgba(31, 41, 55, 0.5)' : 'rgba(17, 24, 39, 0.5)',
                        backdropFilter: 'blur(4px)',
                        border: '2px solid',
                        borderColor: selectedRoute === route.id ? '#eab308' : '#374151',
                        borderRadius: '0.5rem',
                        p: 3,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: selectedRoute === route.id ? '#eab308' : '#4b5563',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: selectedRoute === route.id ? 2 : 0 }}>
                        <Typography variant="h4" sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>{route.name}</Typography>
                        <Typography variant="caption" sx={{ color: '#eab308', fontWeight: 700, textTransform: 'uppercase' }}>
                          {selectedRoute === route.id ? "Hide" : "See Detail"}
                        </Typography>
                      </Box>

                      {selectedRoute === route.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #374151' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                              {route.pickupLocations.map((location, idx) => (
                                <Typography key={idx} sx={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                                  {location}
                                </Typography>
                              ))}
                            </Box>
                          </Box>
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Download Schedule */}
            <Box sx={{ textAlign: 'center' }}>
              <Button
                component="a"
                href="/docs/OH_25_Transportation_Schedule.pdf"
                download
                variant="contained"
                startIcon={<FaDownload />}
                sx={{
                  bgcolor: '#1f2937',
                  color: 'white',
                  px: 3,
                  py: 1.5,
                  borderRadius: '0.5rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#374151'
                  }
                }}
              >
                Download Full Schedule
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ color: '#d1d5db', fontSize: '1.125rem', mb: 2 }}>
              For Shared Transportation inquiries, contact us at:
            </Typography>
            <Typography
              component="a"
              href={`tel:${EVENT_INFO.contact.phone}`}
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#eab308',
                textDecoration: 'none',
                '&:hover': {
                  color: '#facc15'
                }
              }}
            >
              {EVENT_INFO.contact.phone}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TransportationSection;
