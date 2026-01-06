"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import type { AccordionItem } from "@/types";

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Box className={className} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            border: '1px solid',
            borderColor: 'rgba(55, 65, 81, 1)', // gray-700
            borderRadius: '0.5rem',
            overflow: 'hidden',
            bgcolor: 'rgba(17, 24, 39, 0.5)', // gray-900/50
            backdropFilter: 'blur(4px)',
          }}
        >
          <Box
            component="button"
            onClick={() => toggleItem(item.id)}
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 3,
              textAlign: 'left',
              transition: 'background-color 0.2s',
              bgcolor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'inherit',
              '&:hover': {
                bgcolor: 'rgba(31, 41, 55, 0.5)', // gray-800/50
              },
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: '1.125rem', color: 'white' }}>{item.title}</Typography>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown style={{ color: '#eab308', fontSize: '1.25rem' }} /> {/* accent-500 */}
            </motion.div>
          </Box>

          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Box sx={{ px: 3, pb: 3, color: '#d1d5db', lineHeight: 1.625 }}> {/* gray-300 */}
                  {item.content}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Box>
  );
};

export default Accordion;
