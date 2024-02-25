import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ''
    }),

    // CredentialsProvider({
    //   name: "Sign in",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "example@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials.password) {
    //       return null;
    //     }
    //     // call API

    //     if (!user || !(await compare(credentials.password, user.password))) {
    //       return null;
    //     }

    //     return {
    //       id: user.id,
    //       email: user.email,
    //       name: user.name,
    //       randomKey: "Hey cool",
    //     };
    //   },
    // }),
  ],
};
