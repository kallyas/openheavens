"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const rationaleItems = [
  "Recognition and visibility of Black women in healthcare.",
  "Mental wellness and community appreciation for frontline Black women working in healthcare.",
  "Cultural pride and community cohesion within Black communities of women in healthcare.",
  "Cultural visibility for Black immigrant cultural expressions, especially those centred on women, youth, and family.",
  "Addressing workplace bullying, racism, and inequity affecting Black immigrant women.",
  "Creative employment pathways for emerging Black female artists and youth who lack paid and professional performance opportunities.",
  "Community connection and healing through music and storytelling for intergenerational connection, identity affirmation, and emotional wellbeing.",
];

const OverviewSection = () => {
  return (
    <Box
      component="section"
      id="overview"
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        background:
          "radial-gradient(circle at top left, rgba(234,179,8,0.18), transparent 30%), linear-gradient(180deg, #120f08 0%, #1d1508 45%, #0a0a0a 100%)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: 900, mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              color: "#facc15",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.78rem",
              mb: 2,
            }}
          >
            About The Concert
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              lineHeight: 1.05,
              fontSize: { xs: "2.25rem", md: "4rem" },
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Honouring The Hands That Heal
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: "1rem", md: "1.12rem" },
              lineHeight: 1.8,
              maxWidth: 820,
            }}
          >
            The MAAMA Concert is an annual cultural and community celebration
            designed to honour and uplift Black African women working in
            Canada&apos;s healthcare sector. It creates a dedicated space to
            recognize their sacrifice, celebrate their leadership, and affirm
            their dignity through music, storytelling, and shared community.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.12)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                Mission
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.75,
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                }}
              >
                The MAAMA Concert exists to honour, celebrate, and uplift Black
                African women serving in Canada&apos;s healthcare sector by
                recognizing their contributions, promoting cultural pride, and
                fostering community appreciation.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                border: "1px solid rgba(250,204,21,0.25)",
                background:
                  "linear-gradient(180deg, rgba(250,204,21,0.12), rgba(255,255,255,0.04))",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                Vision
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.75,
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                }}
              >
                To build a nationally recognized platform that celebrates and
                empowers Black African women in healthcare, strengthens cultural
                identity, and inspires future generations toward leadership and
                service.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: "28px",
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: { xs: "1.4rem", md: "2rem" },
              mb: 1.5,
            }}
          >
            Why It Matters
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              mb: 3,
              maxWidth: 840,
            }}
          >
            The concert responds to a set of connected community needs across
            recognition, healing, culture, equity, and opportunity.
          </Typography>

          <Grid container spacing={2}>
            {rationaleItems.map((item, index) => (
              <Grid key={item} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    p: 2.5,
                    height: "100%",
                    borderRadius: "18px",
                    backgroundColor: "rgba(0,0,0,0.22)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "rgba(250,204,21,0.14)",
                      color: "#facc15",
                      fontWeight: 800,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.96rem", md: "1rem" },
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OverviewSection;
