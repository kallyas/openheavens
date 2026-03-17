import { NextResponse } from "next/server";
import { createPayPalOrder, getPayPalClientConfig } from "@/lib/paypal";

const MIN_DONATION = 5;

const normalizeAmount = (value: unknown) => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed < MIN_DONATION) {
    return null;
  }

  return parsed.toFixed(2);
};

export async function POST(request: Request) {
  try {
    const { configured, currency } = getPayPalClientConfig();

    if (!configured) {
      return NextResponse.json(
        { error: "PayPal is not configured on the server." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as { amount?: number | string };
    const amount = normalizeAmount(body.amount);

    if (!amount) {
      return NextResponse.json(
        { error: `Donation amount must be at least ${currency} ${MIN_DONATION}.` },
        { status: 400 }
      );
    }

    const orderId = await createPayPalOrder(amount, currency);
    return NextResponse.json({ id: orderId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create PayPal order.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
