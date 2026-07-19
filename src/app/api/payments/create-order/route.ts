import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createPayPalOrder, PLAN_PRICES, type PlanId } from "@/lib/paypal";
import { db } from "@/db";
import { orders } from "@/db/schema";

export async function POST(req: Request) {
  // Must be authenticated
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Validate plan
  const body = await req.json().catch(() => ({}));
  const planId = body.planId as PlanId;

  if (!planId || !PLAN_PRICES[planId]) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  try {
    // Create PayPal order
    const paypalOrder = await createPayPalOrder(planId);
    const plan = PLAN_PRICES[planId];

    // Store order in DB (pending)
    await db.insert(orders).values({
      userId: session.user.id,
      plan: plan.plan,
      amount: plan.amount,
      currency: plan.currency,
      provider: "paypal",
      providerOrderId: paypalOrder.id,
      status: "pending",
    });

    return NextResponse.json({
      orderId: paypalOrder.id,
      status: paypalOrder.status,
      links: paypalOrder.links,
    });
  } catch (e: any) {
    console.error("PayPal create error:", e);
    return NextResponse.json({ error: e.message || "Payment creation failed" }, { status: 500 });
  }
}
