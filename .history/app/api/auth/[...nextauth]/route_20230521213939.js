import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/provider/google'
console.log({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
const handler = NextAuth({
    Providers: [GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })]
    async session({session}){

    },
    async signId({profile}){

    }
})