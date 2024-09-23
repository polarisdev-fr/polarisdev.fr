import { NextResponse } from 'next/server'
import { prisma } from "@/prisma"
import { baseAuth } from '@/auth/auth'

export async function GET() {
  try {
    const tickets = await prisma.supportTicket.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        priority: true,
        createdAt: true,
        updatedAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    })
    return NextResponse.json(tickets)
  } catch (error) {
    console.error("Error fetching tickets:", error)
    return NextResponse.json({ error: "Failed to fetch tickets" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await baseAuth()
    
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const body = await request.json()
    const { title, description, priority } = body
    console.log(body)

    if (!title || !description || !priority) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const newTicket = await prisma.supportTicket.create({
      data: {
        title,
        description,
        priority: priority,
        status: 'open',
        user: {
          connect: { id: user.id }
        },
        messages: {
          create: {
            content: `Hello ${user.name}, your ticket has been created. We will get back to you shortly.`,
            sender: {
              connect: { id: user.id }
            }
          }
        }
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    })

    return NextResponse.json(newTicket)
  } catch (error) {
    console.error("Error creating ticket:", error)
    return NextResponse.json({ error: "Failed to create ticket" }, { status: 500 })
  }
}