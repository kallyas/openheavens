"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@/components/ui/Button";
import { DONATION_PRESETS } from "@/lib/constants";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: Record<string, string | number>;
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError: (error: unknown) => void;
        onCancel?: () => void;
      }) => {
        render: (selector: HTMLElement) => Promise<void>;
        close?: () => void;
      };
    };
  }
}

type DonateClientProps = {
  clientId: string;
  currency: string;
  configured: boolean;
};

const MIN_DONATION = 5;
const SDK_SCRIPT_ID = "paypal-donate-sdk";

const formatAmount = (value: number) => value.toFixed(2);

const loadPayPalSdk = (clientId: string, currency: string) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SDK_SCRIPT_ID) as HTMLScriptElement | null;

    if (existing) {
      if (window.paypal) {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("Failed to load PayPal SDK.")), {
          once: true,
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = SDK_SCRIPT_ID;
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=${encodeURIComponent(currency)}&intent=capture`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load PayPal SDK."));
    document.body.appendChild(script);
  });

export default function DonateClient({
  clientId,
  currency,
  configured,
}: DonateClientProps) {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(DONATION_PRESETS[1] ?? null);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const [sdkError, setSdkError] = useState<string | null>(null);
  const buttonContainerRef = useRef<HTMLDivElement | null>(null);

  const parsedCustomAmount = Number(customAmount);
  const customAmountIsValid =
    customAmount.trim() !== "" &&
    Number.isFinite(parsedCustomAmount) &&
    parsedCustomAmount >= MIN_DONATION;

  const selectedAmount = customAmountIsValid ? parsedCustomAmount : selectedPreset;
  const displayAmount = selectedAmount ? formatAmount(selectedAmount) : null;

  useEffect(() => {
    if (!configured || !clientId) {
      return;
    }

    let cancelled = false;

    loadPayPalSdk(clientId, currency)
      .then(() => {
        if (!cancelled) {
          setSdkReady(true);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setSdkError(error instanceof Error ? error.message : "Unable to load PayPal.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [clientId, configured, currency]);

  useEffect(() => {
    if (!sdkReady || !window.paypal || !buttonContainerRef.current || !selectedAmount) {
      return;
    }

    const container = buttonContainerRef.current;
    container.innerHTML = "";

    const buttons = window.paypal.Buttons({
      style: {
        layout: "vertical",
        shape: "rect",
        label: "paypal",
        height: 48,
      },
      createOrder: async () => {
        setStatus(null);
        const response = await fetch("/api/paypal/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: selectedAmount }),
        });

        const data = (await response.json()) as { id?: string; error?: string };

        if (!response.ok || !data.id) {
          throw new Error(data.error || "Unable to create PayPal order.");
        }

        return data.id;
      },
      onApprove: async (data) => {
        const response = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId: data.orderID }),
        });

        const result = (await response.json()) as { error?: string };

        if (!response.ok) {
          throw new Error(result.error || "Unable to capture PayPal donation.");
        }

        setStatus({
          type: "success",
          message: `Donation received successfully. Thank you for supporting MAAMA Concert with ${currency} ${formatAmount(selectedAmount)}.`,
        });
      },
      onCancel: () => {
        setStatus({
          type: "info",
          message: "PayPal checkout was cancelled before completion.",
        });
      },
      onError: (error) => {
        setStatus({
          type: "error",
          message:
            error instanceof Error ? error.message : "An unexpected PayPal error occurred.",
        });
      },
    });

    buttons.render(container).catch((error) => {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to render PayPal button.",
      });
    });

    return () => {
      if (typeof buttons.close === "function") {
        buttons.close();
      }
      container.innerHTML = "";
    };
  }, [currency, sdkReady, selectedAmount]);

  const helperText = useMemo(() => {
    if (customAmount.trim() !== "" && !customAmountIsValid) {
      return `Enter at least ${currency} ${MIN_DONATION}.`;
    }

    return "You can enter any amount you would like to give.";
  }, [currency, customAmount, customAmountIsValid]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        background:
          "radial-gradient(circle at top, rgba(234,179,8,0.16), transparent 30%), linear-gradient(180deg, #050505 0%, #111827 45%, #050505 100%)",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Box sx={{ textAlign: "center" }}>
            <Chip
              label="Support MAAMA Concert"
              sx={{
                mb: 2,
                bgcolor: "rgba(250, 204, 21, 0.14)",
                color: "#fde68a",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "4rem" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                mb: 2,
              }}
            >
              Donate With PayPal
            </Typography>
            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              Your giving helps fund the concert experience, community support, and the
              wider mission behind MAAMA Concert 2026.
            </Typography>
          </Box>

          <Card
            sx={{
              borderRadius: 4,
              background: "rgba(10,10,10,0.84)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Stack spacing={4}>
                {!configured ? (
                  <Alert severity="warning" sx={{ borderRadius: 3 }}>
                    PayPal is not configured yet. Add `PAYPAL_CLIENT_ID` and
                    `PAYPAL_CLIENT_SECRET` on the server to enable donations.
                  </Alert>
                ) : null}

                {sdkError ? (
                  <Alert severity="error" sx={{ borderRadius: 3 }}>
                    {sdkError}
                  </Alert>
                ) : null}

                {status ? (
                  <Alert severity={status.type} sx={{ borderRadius: 3 }}>
                    {status.message}
                  </Alert>
                ) : null}

                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1.5 }}>
                    Choose a predefined amount
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
                      gap: 1.5,
                    }}
                  >
                    {DONATION_PRESETS.map((amount) => {
                      const active = !customAmountIsValid && selectedPreset === amount;

                      return (
                        <Button
                          key={amount}
                          onClick={() => {
                            setSelectedPreset(amount);
                            setCustomAmount("");
                            setStatus(null);
                          }}
                          variant={active ? "secondary" : "outline"}
                          sx={{
                            width: "100%",
                            borderColor: active ? "transparent" : "rgba(255,255,255,0.18)",
                            bgcolor: active ? undefined : "rgba(255,255,255,0.02)",
                          }}
                        >
                          {currency} {amount}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1.5 }}>
                    Or enter your own amount
                  </Typography>
                  <TextField
                    fullWidth
                    type="number"
                    label={`Custom amount (${currency})`}
                    value={customAmount}
                    onChange={(event) => {
                      setCustomAmount(event.target.value);
                      setStatus(null);
                    }}
                    inputProps={{ min: MIN_DONATION, step: "0.01" }}
                    helperText={helperText}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#fff",
                        bgcolor: "rgba(255,255,255,0.03)",
                        borderRadius: 3,
                      },
                      "& .MuiInputLabel-root": {
                        color: "rgba(255,255,255,0.7)",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "rgba(255,255,255,0.64)",
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, rgba(234,179,8,0.14), rgba(249,115,22,0.08))",
                    border: "1px solid rgba(250,204,21,0.18)",
                  }}
                >
                  <Typography sx={{ color: "#fde68a", fontWeight: 700, mb: 1 }}>
                    Donation summary
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: 900 }}>
                    {displayAmount ? `${currency} ${displayAmount}` : "Choose an amount"}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.72)", mt: 1 }}>
                    Complete your donation securely with PayPal checkout.
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1.5 }}>
                    Checkout
                  </Typography>
                  {!configured ? null : !sdkReady ? (
                    <Box
                      sx={{
                        minHeight: 52,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        color: "rgba(255,255,255,0.72)",
                      }}
                    >
                      <CircularProgress size={22} sx={{ color: "#facc15" }} />
                      <Typography>Loading PayPal checkout…</Typography>
                    </Box>
                  ) : (
                    <Box
                      ref={buttonContainerRef}
                      sx={{
                        minHeight: 52,
                        "& > div": {
                          minHeight: 48,
                        },
                      }}
                    />
                  )}
                </Box>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button href="/" variant="outline" size="lg" sx={{ flex: 1 }}>
                    Back To Home
                  </Button>
                  <Button href="/tickets" variant="primary" size="lg" sx={{ flex: 1 }}>
                    Need Tickets Instead?
                  </Button>
                </Stack>

                <Typography sx={{ color: "rgba(255,255,255,0.58)", fontSize: "0.95rem" }}>
                  Questions about giving? <Link href="/#contact">Contact the team</Link>.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
