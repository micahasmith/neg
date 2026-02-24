import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID ?? "",
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET ?? ""
    })
  ],
  session: {
    strategy: "database"
  },
  pages: {
    signIn: "/login"
  }
};
