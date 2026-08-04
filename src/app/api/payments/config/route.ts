import { NextResponse } from "next/server";

// Public PayPal client id for loading the PayPal JS SDK on the client.
// The client id is public by design (PayPal docs); the secret stays server-side.
export async function GET() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json({ error: "PAYPAL_CLIENT_ID not configured" }, { status: 500 });
  }
  return NextResponse.json({ clientId });
}
