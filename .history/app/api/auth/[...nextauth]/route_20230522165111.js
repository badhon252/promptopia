import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";
import User from "@models/users";

const handler = NextAuth({
  Providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });
    session.user.id = sessionUser._id.toString();
    return session;
  },

  async signIn({ profile }) {
    try {
      await connectDB();
      // Check if user exists
      const userExists = await User.findOne({
        email: profile.email,
      });
      // If user exists, return user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.image,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
export default handler;
