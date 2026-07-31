import { pgTable, text, timestamp, integer, uuid, varchar, boolean } from "drizzle-orm/pg-core";

// ---- Auth.js tables (required by @auth/drizzle-adapter) ----
// 注意：列属性名必须用 snake_case（与数据库列名一致），
// 因为 @auth/drizzle-adapter 通过 accountsTable.refresh_token 等方式访问列。
// 之前用 camelCase 属性名（refreshToken）+ snake_case 列名，
// adapter 找不到 refresh_token 属性 → 类型报错 / 42P01。

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  email_verified: timestamp("email_verified"),
  image: text("image"),
  // Custom fields
  plan: varchar("plan", { length: 20 }).notNull().default("free"),
  plan_expires_at: timestamp("plan_expires_at"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const accounts = pgTable("accounts", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 50 }).notNull(),
  provider: varchar("provider", { length: 50 }).notNull(),
  provider_account_id: varchar("provider_account_id", { length: 255 }).notNull(),
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
  session_token: varchar("session_token", { length: 255 }).notNull().unique(),
  user_id: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires").notNull(),
});

export const verificationTokens = pgTable("verification_tokens", {
  identifier: varchar("identifier", { length: 255 }).notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  expires: timestamp("expires").notNull(),
});

// ---- App tables ----

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
