// Plan prices in cents (USD) — server-side source of truth
export const PLAN_PRICES = {
  pro_monthly: { amount: 499, currency: "USD", plan: "pro", period: 30 },   // $4.99/month
  pro_yearly: { amount: 4999, currency: "USD", plan: "pro", period: 365 },  // $49.99/year
} as const;

export type PlanId = keyof typeof PLAN_PRICES;

// PayPal API helpers
const API_BASE = process.env.PAYPAL_SANDBOX === "true"
  ? "https://api-m.sandbox.paypal.com"
  : "https://api-m.paypal.com";

async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch(`${API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`PayPal auth failed: ${res.status} ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  return data.access_token;
}

export interface PayPalOrder {
  id: string;
  status: string;
  links: { href: string; rel: string; method: string }[];
}

export async function createPayPalOrder(planId: PlanId): Promise<PayPalOrder> {
  const plan = PLAN_PRICES[planId];
  if (!plan) throw new Error(`Invalid plan: ${planId}`);

  const token = await getAccessToken();
  const res = await fetch(`${API_BASE}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: planId,
          description: plan.period === 30 ? "Image Compressor Pro Monthly" : "Image Compressor Pro Yearly",
          amount: {
            currency_code: plan.currency,
            value: (plan.amount / 100).toFixed(2),
          },
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`PayPal create order failed: ${res.status} ${err.slice(0, 200)}`);
  }

  return res.json();
}

export async function capturePayPalOrder(orderId: string): Promise<{ status: string; planId?: string; payerEmail?: string }> {
  const token = await getAccessToken();

  // Capture
  const captRes = await fetch(`${API_BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!captRes.ok) {
    const err = await captRes.text();
    throw new Error(`PayPal capture failed: ${captRes.status} ${err.slice(0, 200)}`);
  }

  const data = await captRes.json();

  // Extract plan info
  const purchaseUnit = data.purchase_units?.[0];
  const planId = purchaseUnit?.reference_id as PlanId | undefined;
  const payerEmail = data.payer?.email_address;

  if (data.status !== "COMPLETED") {
    return { status: data.status, planId, payerEmail };
  }

  return {
    status: "COMPLETED",
    planId,
    payerEmail,
  };
}
