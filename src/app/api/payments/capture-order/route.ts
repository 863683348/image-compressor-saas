import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { capturePayPalOrder, PLAN_PRICES } from "@/lib/paypal";
import { db } from "@/db";
import { orders, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { orderId } = body;

  if (!orderId) {
    return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
  }

  try {
    // Find existing order in our DB
    const existingOrders = await db
      .select()
      .from(orders)
      .where(eq(orders.providerOrderId, orderId))
      .limit(1);

    const existingOrder = existingOrders[0];
    if (!existingOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Already completed — idempotent
    if (existingOrder.status === "completed") {
      return NextResponse.json({ success: true, message: "Already completed" });
    }

    // Capture via PayPal
    const result = await capturePayPalOrder(orderId);

    if (result.status !== "COMPLETED") {
      return NextResponse.json({ error: `PayPal capture returned ${result.status}` }, { status: 400 });
    }

    // Determine plan period from reference_id (planId)
    const planId = result.planId as keyof typeof PLAN_PRICES | undefined;
    const planConfig = planId ? PLAN_PRICES[planId] : null;

    // Update order status
    await db.update(orders)
      .set({ status: "completed", completedAt: new Date() })
      .where(eq(orders.id, existingOrder.id));

    // Upgrade user's plan
    if (planConfig) {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + planConfig.period * 86400000);

      await db.update(users)
        .set({
          plan: planConfig.plan,
          planExpiresAt: expiresAt,
        })
        .where(eq(users.id, session.user.id));
    }

    return NextResponse.json({
      success: true,
      plan: planConfig?.plan || "pro",
      expiresAt: planConfig ? new Date(Date.now() + planConfig.period * 86400000).toISOString() : null,
    });
  } catch (e: any) {
    console.error("PayPal capture error:", e);
    return NextResponse.json({ error: e.message || "Capture failed" }, { status: 500 });
  }
}
