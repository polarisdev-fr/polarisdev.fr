"use server"

import { baseAuth } from "@/auth/auth";
import { prisma } from "@/prisma";
import { stripe } from "@/stripe";
import { redirect } from "next/navigation";

export async function UserBilling() {
    'use server'

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

    const session = await stripe.billingPortal.sessions.create({
        customer: stripeCustomerId,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    })

    if(!session.url) throw new Error('Session URL not found')
    prisma.$disconnect()
    redirect(session.url)
}

export async function UserDeleteAccount() {
    'use server'

    const authSession = await baseAuth()
    if(!authSession?.user) {
        redirect('/api/auth/signin')
    }

    const user = await prisma.user.delete({
        where: {
            id: authSession?.user?.id,
        },
    })

    if(!user) {
        throw new Error('User not found')
    }
    prisma.$disconnect()
    redirect('/')
}

export async function GetUserRole(): Promise<string[]> {
    'use server'

    const authSession = await baseAuth()
    if(!authSession?.user) {
        return []
    }

    const user = await prisma.user.findUnique({
        where: {
            id: authSession?.user?.id,
        },
        select: {
            role: true,
        },
    })

    if(!user) {
        throw new Error('User not found')
    }

    prisma.$disconnect()
    return [user.role]
}

export async function CheckIfUserHasRole(role: Array<string>) {
    'use server'

    const authSession = await baseAuth()
    if(!authSession?.user) {
        return false
    }

    const user = await prisma.user.findUnique({
        where: {
            id: authSession?.user?.id,
        },
        select: {
            role: true,
        },
    })

    if(!user) {
        throw new Error('User not found')
    }

    prisma.$disconnect()
    return role.includes(user.role) ? true : false
}