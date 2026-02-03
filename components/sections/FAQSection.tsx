"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";
import Accordion from "@/components/ui/Accordion";
import { FAQ_DATA } from "@/lib/constants";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const accordionItems = FAQ_DATA.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <Box
      id="faq"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: '#020617',
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            <Typography
              variant="h2"
              id="faq-heading"
              aria-label="FAQS"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
                fontWeight: 900,
                color: 'white',
                textTransform: 'uppercase'
              }}
            >
              FAQS
            </Typography>
            <Box
              component="a"
              href="mailto:openheavens@houseofpraise.ca"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 2,
                bgcolor: 'white',
                color: 'black',
                borderRadius: '0.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                textTransform: 'none',
                fontSize: '1rem',
                transition: 'background-color 0.2s',
                '&:hover': {
                  bgcolor: '#e5e5e5',
                }
              }}
            >
              Contact Us
            </Box>
          </Box>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            role="region"
            aria-label="Frequently Asked Questions"
            sx={{ mb: 6 }}
          >
            <Accordion items={accordionItems} />
          </Box>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="a"
              href="mailto:openheavens@houseofpraise.ca"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                px: 4,
                py: 2,
                bgcolor: 'white',
                color: 'black',
                borderRadius: '0.5rem',
                fontWeight: 700,
                textDecoration: 'none',
                textTransform: 'none',
                fontSize: '1rem',
                transition: 'background-color 0.2s',
                '&:hover': {
                  bgcolor: '#e5e5e5',
                }
              }}
            >
              Contact Us
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQSection;
