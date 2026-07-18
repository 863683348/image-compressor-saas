import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { usage } from "@/db/schema";
import { and, gte, lte, eq } from "drizzle-orm";

// Free tier: 10 compressions per day
const FREE_DAILY_LIMIT = 10;

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  // Get current period (today)
  const now = new Date();
  const periodStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const periodEnd = new Date(periodStart.getTime() + 86400000);

  // Find or create usage record
  let usageRecord = await db
    .select()
    .from(usage)
    .where(
      and(
        eq(usage.userId, userId),
        gte(usage.periodStart, periodStart),
        lte(usage.periodEnd, periodEnd)
      )
    )
    .then((rows) => rows[0]);

  if (!usageRecord) {
    usageRecord = {
      id: crypto.randomUUID(),
      userId,
      periodStart,
      periodEnd,
      compressCount: 0,
      batchCount: 0,
      zipCount: 0,
    };
  }

  const remaining = Math.max(0, FREE_DAILY_LIMIT - usageRecord.compressCount);

  return NextResponse.json({
    plan: "free",
    limit: FREE_DAILY_LIMIT,
    used: usageRecord.compressCount,
    remaining,
    resetsAt: periodEnd.toISOString(),
  });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const now = new Date();
  const periodStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const periodEnd = new Date(periodStart.getTime() + 86400000);

  const body = await req.json().catch(() => ({}));
  const action = body.action || "compress"; // compress | batch | zip

  // Find or create usage record
  let usageRecord = await db
    .select()
    .from(usage)
    .where(
      and(
        eq(usage.userId, userId),
        gte(usage.periodStart, periodStart),
        lte(usage.periodEnd, periodEnd)
      )
    )
    .then((rows) => rows[0]);

  if (!usageRecord) {
    usageRecord = {
      id: crypto.randomUUID(),
      userId,
      periodStart,
      periodEnd,
      compressCount: 0,
      batchCount: 0,
      zipCount: 0,
    };
  }

  // Check limit
  if (usageRecord.compressCount >= FREE_DAILY_LIMIT) {
    return NextResponse.json({ error: "Daily limit reached", remaining: 0 }, { status: 403 });
  }

  // Increment
  const field = action === "batch" ? "batchCount" : action === "zip" ? "zipCount" : "compressCount";
  const updateData = { [field]: (usageRecord as any)[field] + 1 };

  if (usageRecord.id) {
    await db.update(usage).set(updateData).where(eq(usage.id, usageRecord.id));
  } else {
    await db.insert(usage).values({
      userId,
      periodStart,
      periodEnd,
      compressCount: 1,
      batchCount: 0,
      zipCount: 0,
    });
  }

  const remaining = Math.max(0, FREE_DAILY_LIMIT - usageRecord.compressCount - 1);

  return NextResponse.json({
    success: true,
    remaining,
    limit: FREE_DAILY_LIMIT,
  });
}
