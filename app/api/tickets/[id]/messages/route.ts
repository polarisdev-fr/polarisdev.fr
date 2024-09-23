// app/api/tickets/[id]/messages/route.ts
import { NextResponse } from 'next/server'
import { prisma } from "@/prisma"
import { baseAuth } from "@/auth/auth"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await baseAuth()
    
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const ticketId = params.id

    const messages = await prisma.message.findMany({
      where: {
        id: ticketId,
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}

// app/api/tickets/[id]/messages/route.ts
// Add this to the existing file

// app/api/tickets/[id]/messages/route.ts
// Add this to the existing file

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await baseAuth()
    
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const ticketId = params.id
    const { content } = await request.json()

    if (!content) {
      return NextResponse.json({ error: "Message content is required" }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const newMessage = await prisma.message.create({
      data: {
        content,
        supportTicket: { connect: { id: ticketId } },
        sender: { connect: { id: user.id } },
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    })

    return NextResponse.json(newMessage)
  } catch (error) {
    console.error("Error creating message:", error)
    return NextResponse.json({ error: "Failed to create message" }, { status: 500 })
  }
}