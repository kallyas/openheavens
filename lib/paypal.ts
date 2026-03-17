import { EVENT_INFO } from "@/lib/constants";

const PAYPAL_API_BASE =
  process.env.PAYPAL_ENVIRONMENT === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

const getPayPalCredentials = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET.");
  }

  return { clientId, clientSecret };
};

export const getPayPalClientConfig = () => ({
  clientId: process.env.PAYPAL_CLIENT_ID || "",
  currency: process.env.PAYPAL_CURRENCY || EVENT_INFO.donationCurrency,
  configured: Boolean(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET),
});

export const getPayPalAccessToken = async () => {
  const { clientId, clientSecret } = getPayPalCredentials();
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`PayPal token request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as { access_token?: string };

  if (!data.access_token) {
    throw new Error("PayPal token response did not include an access token.");
  }

  return data.access_token;
};

export const createPayPalOrder = async (amount: string, currencyCode: string) => {
  const accessToken = await getPayPalAccessToken();
  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: `${EVENT_INFO.title} Donation`,
          amount: {
            currency_code: currencyCode,
            value: amount,
          },
        },
      ],
    }),
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok || !data.id) {
    throw new Error("PayPal order creation failed.");
  }

  return data.id as string;
};

export const capturePayPalOrder = async (orderId: string) => {
  const accessToken = await getPayPalAccessToken();
  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("PayPal order capture failed.");
  }

  return data;
};
