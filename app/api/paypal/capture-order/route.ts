import { NextResponse } from "next/server";
import { capturePayPalOrder, getPayPalClientConfig } from "@/lib/paypal";

export async function POST(request: Request) {
  try {
    const { configured } = getPayPalClientConfig();

    if (!configured) {
      return NextResponse.json(
        { error: "PayPal is not configured on the server." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as { orderId?: string };

    if (!body.orderId) {
      return NextResponse.json({ error: "Missing orderId." }, { status: 400 });
    }

    const details = await capturePayPalOrder(body.orderId);
    return NextResponse.json(details);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to capture PayPal order.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
