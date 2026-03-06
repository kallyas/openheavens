'use client';

import React, { useMemo, useState } from "react";
import { Box, Container, Typography, Button, TextField } from "@mui/material";
import Link from "next/link";
import PayPalCheckout from "@/components/payments/PayPalCheckout";
import { EVENT_INFO } from "@/lib/constants";
import {
  homeButtonPrimaryOnDarkSx,
  homeButtonSecondaryOnDarkSx,
} from "@/lib/buttonStyles";

const TICKET_PRICE = 100;

export default function TicketsPage() {
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => quantity * TICKET_PRICE, [quantity]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 13, md: 17 },
        pb: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #000000 0%, #020617 40%, #111827 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.22), transparent 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "2%",
          right: "-10%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Box
            component="img"
            src="/images/logo/concert.png"
            alt="Mama Concert"
            sx={{ width: { xs: 140, md: 190 }, height: "auto", mb: 2, mx: "auto" }}
          />
          <Typography
            component="p"
            sx={{
              color: "rgba(255,255,255,0.82)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
            }}
          >
            Secure Checkout
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              mb: 0.5,
              background:
                "linear-gradient(135deg, #ffffff 0%, #fde68a 40%, #93c5fd 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 60px rgba(234, 179, 8, 0.2)",
            }}
          >
            Mama Concert Tickets
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 700, mx: "auto" }}>
            Book your seat for <strong>Pastor Judith Babirye&apos;s Mama Concert</strong> and worship with leading voices.
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {[
            `Date: ${EVENT_INFO.date}`,
            `Starts: ${EVENT_INFO.timing.eventStart}`,
            `Price: CAD $${TICKET_PRICE}`,
          ].map((fact) => (
            <Box
              key={fact}
              sx={{
                px: 2,
                py: 1,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.28)",
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "0.78rem", md: "0.88rem" },
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                {fact}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            maxWidth: 700,
            mx: "auto",
            p: { xs: 2.5, md: 4 },
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 800, textTransform: "uppercase", mb: 0.8 }}>
            Ticket Quantity
          </Typography>

          <TextField
            type="number"
            value={quantity}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (Number.isNaN(value)) return;
              setQuantity(Math.min(Math.max(value, 1), 10));
            }}
            inputProps={{ min: 1, max: 10 }}
            fullWidth
            placeholder="Enter ticket quantity (1-10)"
            sx={{
              mb: 2,
              "& input": {
                color: "#0f172a",
                WebkitTextFillColor: "#0f172a",
                fontWeight: 700,
              },
              "& input::placeholder": {
                color: "#64748b",
                opacity: 1,
              },
              "& .MuiInputBase-root": {
                backgroundColor: "rgba(255,255,255,0.96)",
                borderRadius: "10px",
                border: "1px solid rgba(30, 41, 59, 0.35)",
              },
            }}
          />

          <Typography sx={{ color: "#fff", fontWeight: 800, mb: 3 }}>
            Total: CAD ${total.toFixed(2)}
          </Typography>

          <PayPalCheckout quantity={quantity} />
        </Box>

        <Box sx={{ mt: 3.5, display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
          <Button component={Link} href="/" sx={{ ...homeButtonSecondaryOnDarkSx }}>
            Back to Home
          </Button>
          <Button
            component="a"
            href={EVENT_INFO.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...homeButtonPrimaryOnDarkSx }}
          >
            View Venue
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
