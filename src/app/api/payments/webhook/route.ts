import { NextResponse } from "next/server";
import { db } from "@/db";
import { orders, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { PLAN_PRICES } from "@/lib/paypal";

// PayPal webhook verification endpoint
// Register this URL in PayPal Developer Dashboard → Webhooks
export async function POST(req: Request) {
  // Verify webhook signature
  const headers = {
    "PAYPAL-AUTH-ALGO": req.headers.get("paypal-auth-algo") || "",
    "PAYPAL-CERT-URL": req.headers.get("paypal-cert-url") || "",
    "PAYPAL-TRANSMISSION-ID": req.headers.get("paypal-transmission-id") || "",
    "PAYPAL-TRANSMISSION-SIG": req.headers.get("paypal-transmission-sig") || "",
    "PAYPAL-TRANSMISSION-TIME": req.headers.get("paypal-transmission-time") || "",
  };

  const body = await req.text();

  // Verify signature via PayPal API
  const verified = await verifyWebhookSignature(headers, body);

  if (!verified) {
    console.error("PayPal webhook: signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // Parse webhook event
  let event;
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Handle CHECKOUT.ORDER.APPROVED — payment captured
  if (event.event_type === "CHECKOUT.ORDER.APPROVED") {
    const orderId = event.resource?.id;
    if (!orderId) return NextResponse.json({ error: "Missing order ID" }, { status: 400 });

    // Find our order
    const existingOrders = await db
      .select()
      .from(orders)
      .where(eq(orders.providerOrderId, orderId))
      .limit(1);

    const existingOrder = existingOrders[0];
    if (!existingOrder) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    if (existingOrder.status === "completed") {
      return NextResponse.json({ success: true });
    }

    // Update order status
    await db.update(orders)
      .set({ status: "completed", completedAt: new Date() })
      .where(eq(orders.id, existingOrder.id));

    // Determine plan from the order record
    const planConfig = PLAN_PRICES[`${existingOrder.plan}_monthly` as keyof typeof PLAN_PRICES]
      || PLAN_PRICES[`${existingOrder.plan}_yearly` as keyof typeof PLAN_PRICES];

    if (planConfig) {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + planConfig.period * 86400000);

      await db.update(users)
        .set({ plan: planConfig.plan, planExpiresAt: expiresAt })
        .where(eq(users.id, existingOrder.userId));
    }
  }

  // Handle PAYMENT.CAPTURE.COMPLETED
  if (event.event_type === "PAYMENT.CAPTURE.COMPLETED") {
    const orderId = event.resource?.supplementary_data?.related_ids?.order_id;
    if (!orderId) return NextResponse.json({ success: true });

    const existingOrders = await db
      .select()
      .from(orders)
      .where(eq(orders.providerOrderId, orderId))
      .limit(1);

    const existingOrder = existingOrders[0];
    if (!existingOrder || existingOrder.status === "completed") {
      return NextResponse.json({ success: true });
    }

    await db.update(orders)
      .set({ status: "completed", completedAt: new Date() })
      .where(eq(orders.id, existingOrder.id));

    const planConfig = PLAN_PRICES[`${existingOrder.plan}_monthly` as keyof typeof PLAN_PRICES]
      || PLAN_PRICES[`${existingOrder.plan}_yearly` as keyof typeof PLAN_PRICES];

    if (planConfig) {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + planConfig.period * 86400000);
      await db.update(users)
        .set({ plan: planConfig.plan, planExpiresAt: expiresAt })
        .where(eq(users.id, existingOrder.userId));
    }
  }

  return NextResponse.json({ success: true });
}

async function verifyWebhookSignature(
  headers: Record<string, string>,
  body: string
): Promise<boolean> {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  if (!webhookId) {
    // Production MUST verify signatures — fail closed if webhook id is missing.
    if (process.env.NODE_ENV === "production") {
      console.error("PAYPAL_WEBHOOK_ID not set in production; rejecting webhook (fail-closed)");
      return false;
    }
    // Dev convenience only: skip verification when id not configured.
    console.warn("PAYPAL_WEBHOOK_ID not set, skipping webhook verification (dev only)");
    return true;
  }

  // Respect PAYPAL_SANDBOX so verification hits the correct PayPal environment.
  const API_BASE =
    process.env.PAYPAL_SANDBOX === "true"
      ? "https://api-m.sandbox.paypal.com"
      : "https://api-m.paypal.com";

  try {
    const auth = Buffer.from(
      `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString("base64");

    const tokenRes = await fetch(`${API_BASE}/v1/oauth2/token`, {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: "grant_type=client_credentials",
    });
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const verifyRes = await fetch(
      `${API_BASE}/v1/notifications/verify-webhook-signature`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth_algo: headers["PAYPAL-AUTH-ALGO"],
          cert_url: headers["PAYPAL-CERT-URL"],
          transmission_id: headers["PAYPAL-TRANSMISSION-ID"],
          transmission_sig: headers["PAYPAL-TRANSMISSION-SIG"],
          transmission_time: headers["PAYPAL-TRANSMISSION-TIME"],
          webhook_id: webhookId,
          webhook_event: JSON.parse(body),
        }),
      }
    );

    const verifyData = await verifyRes.json();
    return verifyData.verification_status === "SUCCESS";
  } catch (e) {
    console.error("Webhook verification error:", e);
    return false;
  }
}
