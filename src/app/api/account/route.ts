import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { users, orders } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

// Personal center data: 会员信息 + 订单历史。Pro 过期自动降级为 free。
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  const userRows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      image: users.image,
      plan: users.plan,
      planExpiresAt: users.planExpiresAt,
    })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const user = userRows[0];
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Auto-downgrade plan if expired
  const now = new Date();
  const expiresAt = user.planExpiresAt ? new Date(user.planExpiresAt) : null;
  const isPro = user.plan === "pro" && (!expiresAt || expiresAt > now);
  const effectivePlan = isPro ? "pro" : "free";

  const orderRows = await db
    .select({
      id: orders.id,
      plan: orders.plan,
      amount: orders.amount,
      currency: orders.currency,
      status: orders.status,
      provider: orders.provider,
      providerOrderId: orders.provider_order_id,
      createdAt: orders.created_at,
      completedAt: orders.completed_at,
    })
    .from(orders)
    .where(eq(orders.user_id, userId))
    .orderBy(desc(orders.created_at))
    .limit(20);

  return NextResponse.json({
    user: {
      name: user.name,
      email: user.email,
      image: user.image,
    },
    plan: effectivePlan,
    planExpiresAt: isPro ? expiresAt?.toISOString() : null,
    orders: orderRows.map((o) => ({
      id: o.id,
      plan: o.plan,
      amount: o.amount,
      currency: o.currency,
      status: o.status,
      provider: o.provider,
      providerOrderId: o.providerOrderId,
      createdAt: o.createdAt?.toISOString() ?? null,
      completedAt: o.completedAt?.toISOString() ?? null,
    })),
  });
}
