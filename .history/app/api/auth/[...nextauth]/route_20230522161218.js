import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";

const handler = NextAuth({
  Providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signId({ profile }) {
    try {
      await connectDB();
      // Check if user exists
      // If user exists, return user
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
