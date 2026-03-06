'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Box, CircularProgress, Typography } from "@mui/material";

type PayPalButtonsInstance = {
  render: (container: HTMLElement) => Promise<void>;
  close: () => Promise<void>;
};

type PayPalNamespace = {
  Buttons: (options: {
    createOrder: () => Promise<string>;
    onApprove: (data: { orderID?: string }) => Promise<void>;
    onError: (error: Error) => void;
  }) => PayPalButtonsInstance;
};

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

interface PayPalCheckoutProps {
  quantity: number;
}

const SDK_SCRIPT_ID = "paypal-sdk-script";

const PayPalCheckout: React.FC<PayPalCheckoutProps> = ({ quantity }) => {
  const paypalContainerRef = useRef<HTMLDivElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const sdkSrc = useMemo(() => {
    if (!clientId) return "";
    const params = new URLSearchParams({
      "client-id": clientId,
      currency: "CAD",
      intent: "capture",
      components: "buttons",
    });
    return `https://www.paypal.com/sdk/js?${params.toString()}`;
  }, [clientId]);

  useEffect(() => {
    const ensureScriptLoaded = async () => {
      if (!clientId) {
        setErrorMessage(
          "PayPal is not configured. Add NEXT_PUBLIC_PAYPAL_CLIENT_ID to enable checkout."
        );
        setIsLoading(false);
        return;
      }

      if (window.paypal) {
        setIsLoading(false);
        return;
      }

      const existing = document.getElementById(
        SDK_SCRIPT_ID
      ) as HTMLScriptElement | null;

      if (existing) {
        existing.addEventListener("load", () => setIsLoading(false), {
          once: true,
        });
        existing.addEventListener(
          "error",
          () => {
            setErrorMessage("Unable to load PayPal checkout script.");
            setIsLoading(false);
          },
          { once: true }
        );
        return;
      }

      const script = document.createElement("script");
      script.id = SDK_SCRIPT_ID;
      script.src = sdkSrc;
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => {
        setErrorMessage("Unable to load PayPal checkout script.");
        setIsLoading(false);
      };
      document.body.appendChild(script);
    };

    void ensureScriptLoaded();
  }, [clientId, sdkSrc]);

  useEffect(() => {
    if (isLoading || !window.paypal || !paypalContainerRef.current || isPaid) {
      return;
    }

    paypalContainerRef.current.innerHTML = "";

    const buttons = window.paypal.Buttons({
      createOrder: async () => {
        const response = await fetch("/api/paypal/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity }),
        });

        const data = (await response.json()) as {
          orderId?: string;
          error?: string;
        };

        if (!response.ok || !data.orderId) {
          throw new Error(data.error || "Unable to create PayPal order.");
        }

        return data.orderId;
      },
      onApprove: async (data) => {
        if (!data.orderID) {
          throw new Error("Missing PayPal order ID.");
        }

        const response = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: data.orderID }),
        });

        const payload = (await response.json()) as { error?: string };
        if (!response.ok) {
          throw new Error(payload.error || "Unable to capture payment.");
        }

        setIsPaid(true);
        setStatusMessage("Payment complete. Your ticket booking is confirmed.");
      },
      onError: (error) => {
        setErrorMessage(error.message || "PayPal checkout failed.");
      },
    });

    void buttons.render(paypalContainerRef.current);

    return () => {
      void buttons.close();
    };
  }, [isLoading, quantity, isPaid]);

  return (
    <Box>
      <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}>
        Secure checkout powered by PayPal.
      </Typography>

      {isLoading && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <CircularProgress size={18} />
          <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
            Loading checkout...
          </Typography>
        </Box>
      )}

      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      {statusMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {statusMessage}
        </Alert>
      )}

      {!isPaid && <Box ref={paypalContainerRef} />}
    </Box>
  );
};

export default PayPalCheckout;
