"use server"

import { baseAuth } from "@/auth/auth";
import { stripe } from "@/stripe";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma";

export async function BuyAction(formData: FormData) {
    "use server";

    const authSession = await baseAuth()
    if(!authSession?.user) {
        redirect('/api/auth/signin')
    }

    const user = await prisma.user.findUnique({
        where: {
            id: authSession?.user?.id,
        },
        select: {
            stripeCustomerId: true,
        },
    })

    if(!user) {
        throw new Error('User not found')
    }

    const stripeCustomerId = user?.stripeCustomerId ?? undefined

    if (!stripeCustomerId) {
        throw new Error('Stripe customer ID not found')
    }

    const priceId = formData.get('priceId') as string
    const isSubscription = formData.get('isSubscription') === 'true'

    const session = await stripe.checkout.sessions.create({
        customer: stripeCustomerId,
        mode: isSubscription ? 'subscription' : 'payment',
        payment_method_types: ['card'],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    })

    if(!session.url) throw new Error('Session URL not found')
    redirect(session.url)
}