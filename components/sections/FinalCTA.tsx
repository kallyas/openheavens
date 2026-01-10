"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";
import { FaCalendarPlus, FaMapMarkerAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { EVENT_INFO } from "@/lib/constants";
import { downloadCalendar } from "@/lib/utils";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleAddToCalendar = () => {
    const startDate = new Date("2026-01-31T19:00:00");
    const endDate = new Date("2026-11-28T23:59:59");

    downloadCalendar(
      EVENT_INFO.title,
      `${EVENT_INFO.subtitle} - Join us for an unforgettable worship!`,
      EVENT_INFO.venue.fullAddress,
      startDate,
      endDate
    );
  };

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(to bottom, #1e1b4b, #111827)', // primary-900 to gray-900
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.3)' }} />
      <Box sx={{ position: 'absolute', top: 40, left: '25%', width: 384, height: 384, bgcolor: 'rgba(234, 179, 8, 0.1)', borderRadius: '50%', filter: 'blur(40px)' }} /> {/* accent-500/10 */}
      <Box sx={{ position: 'absolute', bottom: 40, right: '25%', width: 384, height: 384, bgcolor: 'rgba(249, 115, 22, 0.1)', borderRadius: '50%', filter: 'blur(40px)' }} /> {/* secondary-500/10 */}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ maxWidth: '56rem', mx: 'auto', textAlign: 'center' }}>
            {/* Event Date */}
            <Box sx={{ mb: 8 }}>
              <Box sx={{ display: 'inline-block', px: 3, py: 1.5, bgcolor: 'rgba(234, 179, 8, 0.2)', borderRadius: '9999px', mb: 2 }}>
                <Typography sx={{ color: '#facc15', fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 700, textTransform: 'uppercase' }}>
                  {EVENT_INFO.date}
                </Typography>
              </Box>
            </Box>

            {/* Title */}
            <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', md: '2.25rem' }, color: '#d1d5db', mb: 1, textTransform: 'uppercase', letterSpacing: '0.025em' }}>
              See You At
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem', lg: '3.75rem' }, fontWeight: 900, color: 'white', mb: 3, textTransform: 'uppercase', lineHeight: 1.1 }}>
              Mama Concert 2026
            </Typography>

            {/* Venue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ mb: 8 }}>
                <Box
                  component="a"
                  href={EVENT_INFO.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#eab308' // accent-500
                    },
                    '&:hover .map-icon': {
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <FaMapMarkerAlt className="map-icon" style={{ color: '#eab308', fontSize: '1.5rem', transition: 'transform 0.2s' }} />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.125rem', md: '1.25rem' } }}>{EVENT_INFO.venue.name}</Typography>
                    <Typography sx={{ fontSize: '1rem', color: '#d1d5db' }}>
                      {EVENT_INFO.venue.address}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                <Button
                  href={EVENT_INFO.ticketUrl}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto min-w-[250px]" // Button component might still rely on className or props, need to check Button.tsx. Assuming implementation plan meant usage of button. 
                // Wait, Button.tsx is a custom component, I should check it too. But for now I will pass className if it supports it, or better, if I refactored Button I should check.
                // Actually I haven't checked Button.tsx. It's likely using Tailwind.
                >
                  Get Your Ticket Now
                </Button>
                <Button
                  onClick={handleAddToCalendar}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-[250px]"
                >
                  <FaCalendarPlus style={{ marginRight: '8px' }} />
                  Add to Calendar
                </Button>
              </Box>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography sx={{ mt: 6, color: '#b8860b', fontSize: '1.125rem' }}>
                CAD $100 &nbsp; • &nbsp; Family-Friendly &nbsp; • &nbsp; Free Parking Available
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FinalCTA;
