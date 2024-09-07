import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Github from "next-auth/providers/github"
import { env } from "@/env"
import { stripe } from "@/stripe"
const prisma = new PrismaClient()

export const { handlers, auth: baseAuth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
        clientId: env.AUTH_GITHUB_ID,
        clientSecret: env.AUTH_GITHUB_SECRET,
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
})