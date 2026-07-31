import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

// Surface config state to runtime logs so we can diagnose
// NextAuth's masked "Configuration" page error from Vercel logs.
console.log("[auth init] env:", {
  AUTH_SECRET: !!process.env.AUTH_SECRET,
  GOOGLE_CLIENT_ID: !!process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: !!process.env.GOOGLE_CLIENT_SECRET,
  DATABASE_URL: !!process.env.DATABASE_URL,
  AUTH_URL: process.env.AUTH_URL || "(unset)",
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV || "(unset)",
});

if (!process.env.AUTH_SECRET) {
  throw new Error("[auth] AUTH_SECRET is required");
}
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("[auth] GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are required");
}
if (!process.env.DATABASE_URL) {
  throw new Error("[auth] DATABASE_URL is required");
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  trustHost: true, // required on Vercel — behind reverse proxy
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});