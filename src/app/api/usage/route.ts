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
        eq(usage.user_id, userId),
        gte(usage.period_start, periodStart),
        lte(usage.period_end, periodEnd)
      )
    )
    .then((rows) => rows[0]);

  if (!usageRecord) {
    usageRecord = {
      id: crypto.randomUUID(),
      user_id,
      periodStart,
      periodEnd,
      compress_count: 0,
      batch_count: 0,
      zip_count: 0,
    };
  }

  const remaining = Math.max(0, FREE_DAILY_LIMIT - usageRecord.compress_count);

  return NextResponse.json({
    plan: "free",
    limit: FREE_DAILY_LIMIT,
    used: usageRecord.compress_count,
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
        eq(usage.user_id, userId),
        gte(usage.period_start, periodStart),
        lte(usage.period_end, periodEnd)
      )
    )
    .then((rows) => rows[0]);

  if (!usageRecord) {
    usageRecord = {
      id: crypto.randomUUID(),
      user_id,
      periodStart,
      periodEnd,
      compress_count: 0,
      batch_count: 0,
      zip_count: 0,
    };
  }

  // Check limit
  if (usageRecord.compress_count >= FREE_DAILY_LIMIT) {
    return NextResponse.json({ error: "Daily limit reached", remaining: 0 }, { status: 403 });
  }

  // Increment
  const field = action === "batch" ? "batchCount" : action === "zip" ? "zipCount" : "compressCount";
  const updateData = { [field]: (usageRecord as any)[field] + 1 };

  if (usageRecord.id) {
    await db.update(usage).set(updateData).where(eq(usage.id, usageRecord.id));
  } else {
    await db.insert(usage).values({
      user_id,
      periodStart,
      periodEnd,
      compress_count: 1,
      batch_count: 0,
      zip_count: 0,
    });
  }

  const remaining = Math.max(0, FREE_DAILY_LIMIT - usageRecord.compress_count - 1);

  return NextResponse.json({
    success: true,
    remaining,
    limit: FREE_DAILY_LIMIT,
  });
}
