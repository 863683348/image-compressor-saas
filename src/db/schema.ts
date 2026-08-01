import { pgTable, text, timestamp, integer, uuid, varchar, boolean } from "drizzle-orm/pg-core";

// ---- Auth.js tables (required by @auth/drizzle-adapter v1.11.2) ----
// 属性名必须精确匹配 adapter 的类型定义（混合命名！）：
//   users:     emailVerified（camelCase）
//   accounts:  userId / providerAccountId（camelCase）+ refresh_token / access_token /
//              expires_at / token_type / scope / id_token / session_state（snake_case）
//   sessions:  sessionToken / userId（camelCase）
// 数据库列名用 snake_case（pgTable 第二参数指定），Drizzle 负责映射。

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: timestamp("email_verified"),
  image: text("image"),
  // Custom fields
  plan: varchar("plan", { length: 20 }).notNull().default("free"),
  planExpiresAt: timestamp("plan_expires_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 50 }).notNull(),
  provider: varchar("provider", { length: 50 }).notNull(),
  providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: varchar("token_type", { length: 50 }),
  scope: varchar("scope", { length: 255 }),
  id_token: text("id_token"),
  session_state: varchar("session_state", { length: 255 }),
});

export const sessions = pgTable("sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  sessionToken: varchar("session_token", { length: 255 }).notNull().unique(),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
});

export const verificationTokens = pgTable("verification_tokens", {
  identifier: varchar("identifier", { length: 255 }).notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  expires: timestamp("expires").notNull(),
});

// ---- App tables（应用代码已按 snake_case 属性引用）----

export const usage = pgTable("usage", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  period_start: timestamp("period_start").notNull(),
  period_end: timestamp("period_end").notNull(),
  compress_count: integer("compress_count").notNull().default(0),
  batch_count: integer("batch_count").notNull().default(0),
  zip_count: integer("zip_count").notNull().default(0),
});

export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  plan: varchar("plan", { length: 20 }).notNull(),
  amount: integer("amount").notNull(),
  currency: varchar("currency", { length: 3 }).notNull().default("usd"),
  provider: varchar("provider", { length: 20 }).notNull(),
  provider_order_id: varchar("provider_order_id", { length: 255 }),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  completed_at: timestamp("completed_at"),
});
