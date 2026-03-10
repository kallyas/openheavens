import { NextResponse } from "next/server";
import { createPaypalOrder, getPaypalAccessToken } from "@/lib/paypal";

const TICKET_PRICE = 100;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { quantity?: number };
    const quantity = Math.min(Math.max(Number(body.quantity ?? 1), 1), 10);
    const amount = (quantity * TICKET_PRICE).toFixed(2);

    const accessToken = await getPaypalAccessToken();
    const order = (await createPaypalOrder({
      accessToken,
      amount,
      currencyCode: "CAD",
      description: `MAAMA CONCERT 2026 - ${quantity} ticket(s)`,
    })) as { id?: string };

    if (!order.id) {
      return NextResponse.json(
        { error: "PayPal order ID missing from response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create PayPal order.",
      },
      { status: 500 }
    );
  }
}
