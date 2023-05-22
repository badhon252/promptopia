import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/users";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session(session) {
      try {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });
        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }
        return session;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async signIn({ profile, email }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({
          email: profile.email || email,
        });
        if (!userExists) {
          await User.create({
            email: profile.email || email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.image,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
