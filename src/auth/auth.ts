import NextAuth, { NextAuthConfig } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Github from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"
import { stripe } from "@/stripe"

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      Github({
          clientId: process.env.AUTH_GITHUB_ID,
          clientSecret: process.env.AUTH_GITHUB_SECRET,
      }),
      Discord({
          clientId: process.env.AUTH_DISCORD_ID,
          clientSecret: process.env.AUTH_DISCORD_SECRET,
      })
    ],
    pages: {
      signIn: '/login',
    },
    events: {
      createUser: async (message) => {
          const userId = message.user.id;
          const userEmail = message.user.email;
  
          if (!userEmail || !userId) {
              return;
          }
  
          const stripeCustomer = await stripe.customers.create({
              name: message.user.email ?? undefined,
              email: userEmail,
          });
          
          await prisma.user.update({
              where: {
                  id: userId,
              },
              data: {
                  stripeCustomerId: stripeCustomer.id,
              },
          });
      }
  }
} as NextAuthConfig 

export const { handlers, auth: baseAuth, signIn, signOut } = NextAuth(authOptions)