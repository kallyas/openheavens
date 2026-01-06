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
        bgcolor: '#111827', // gray-900
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' }, fontWeight: 900, color: 'white', mb: 2, textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.25rem', color: '#9ca3af' }}> {/* gray-400 */}
              Everything you need to know about Open Heavens Toronto 2025
            </Typography>
          </Box>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ maxWidth: '48rem', mx: 'auto' }}>
            <Accordion items={accordionItems} />
          </Box>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography sx={{ color: '#9ca3af', fontSize: '1.125rem' }}>
              Still have questions?{" "}
              <Box
                component="a"
                href="#contact"
                sx={{
                  color: '#eab308', // accent-500
                  fontWeight: 700,
                  textDecoration: 'underline',
                  '&:hover': { color: '#facc15' } // accent-400
                }}
              >
                Contact us
              </Box>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQSection;
