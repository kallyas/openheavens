'use client';

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Alert, Box, Button, Container, Snackbar, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { EVENT_INFO } from "@/lib/constants";
import { shareToSocial } from "@/lib/utils";
import {
  homeButtonPrimaryOnDarkSx,
  homeButtonSecondaryOnDarkSx,
} from "@/lib/buttonStyles";

const POSTER_URL = "/images/posters/main-poster.png";

export default function ShareOHClient() {
  const [toast, setToast] = useState<string>("");

  const shareText = useMemo(
    () =>
      `Join us at ${EVENT_INFO.title} on ${EVENT_INFO.date} at ${EVENT_INFO.venue.name}.`,
    []
  );

  const getShareLink = () => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/`;
  };

  const handleNativeShare = async () => {
    const shareUrl = getShareLink();

    if (navigator.share) {
      try {
        await navigator.share({
          title: EVENT_INFO.title,
          text: shareText,
          url: shareUrl,
        });
        setToast("Share dialog opened.");
        return;
      } catch {
        // continue to fallback
      }
    }

    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setToast("Share text copied. Paste it into any social app.");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 13, md: 17 },
        pb: { xs: 10, md: 12 },
        background: "linear-gradient(180deg, #000000 0%, #020617 45%, #111827 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography sx={{ color: "rgba(255,255,255,0.78)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, mb: 1 }}>
            Share Mama Concert
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.3rem", md: "3.6rem" },
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            Spread The Poster
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.78)", maxWidth: 700, mx: "auto", mt: 1.2 }}>
            Share this event poster with your community and invite others to worship.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.38)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <Image
              src={POSTER_URL}
              alt="Mama Concert event poster by Pastor Judith Babirye"
              width={1200}
              height={1500}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </Box>

          <Box
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: "14px",
              backgroundColor: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography sx={{ color: "#fff", fontWeight: 800, textTransform: "uppercase", mb: 1 }}>
              Quick Share Actions
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 2.5 }}>
              Post directly to social platforms or copy share text for status updates.
            </Typography>

            <Box sx={{ display: "grid", gap: 1.3 }}>
              <Button
                onClick={() => shareToSocial("whatsapp", getShareLink(), shareText)}
                startIcon={<WhatsAppIcon />}
                sx={{ ...homeButtonPrimaryOnDarkSx, justifyContent: "flex-start" }}
              >
                Share on WhatsApp
              </Button>
              <Button
                onClick={() => shareToSocial("facebook", getShareLink(), shareText)}
                startIcon={<FacebookIcon />}
                sx={{ ...homeButtonSecondaryOnDarkSx, justifyContent: "flex-start" }}
              >
                Share on Facebook
              </Button>
              <Button
                onClick={() => shareToSocial("twitter", getShareLink(), shareText)}
                startIcon={<XIcon />}
                sx={{ ...homeButtonSecondaryOnDarkSx, justifyContent: "flex-start" }}
              >
                Share on X
              </Button>
              <Button
                component="a"
                href={POSTER_URL}
                download
                startIcon={<FileDownloadIcon />}
                sx={{ ...homeButtonSecondaryOnDarkSx, justifyContent: "flex-start" }}
              >
                Download Poster
              </Button>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Button onClick={handleNativeShare} sx={{ ...homeButtonPrimaryOnDarkSx, width: "100%" }}>
                Share Anywhere
              </Button>
            </Box>

            <Box sx={{ mt: 2.2, textAlign: "center" }}>
              <Button component={Link} href="/" sx={{ ...homeButtonSecondaryOnDarkSx }}>
                Back to Home
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={2800}
        onClose={() => setToast("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setToast("")} severity="info" variant="filled">
          {toast}
        </Alert>
      </Snackbar>
    </Box>
  );
}
