import { NextAuthOptions } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import clientPromise from "@/lib/mongodb/config";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    // adapter required to use email
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        // Passwordless / email sign in
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                secure: true,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
        // OAuth authentication providers...
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID ?? "",
        //     clientSecret: process.env.APPLE_SECRET ?? "",
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID ?? "",
        //     clientSecret: process.env.FACEBOOK_SECRET ?? "",
        // }),
    ],
    pages: {
        signIn: "/auth/signin",
        signOut: "/",
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        //newUser: '/auth/new-user'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.userId = token.id as string; // Ensure 'id' is present on the session object
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};
