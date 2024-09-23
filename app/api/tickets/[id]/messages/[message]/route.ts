import { NextResponse } from "next/server"
import { prisma } from "@/prisma"
import { baseAuth } from "@/auth/auth"

export async function DELETE(
  request: Request,
  { params }: { params: { message: string } }
) {
  try {
    const session = await baseAuth()
    
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const messageId = params.message

    const message = await prisma.message.findUnique({
      where: {
        id: messageId,
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

    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 })
    }

    if (message.sender.id !== session.user.id) {
      return NextResponse.json({ error: "You are not authorized to delete this message" }, { status: 403 })
    }

    await prisma.message.delete({
      where: {
        id: messageId,
      },
    })

    return NextResponse.json({ message: "Message deleted successfully" })
  } catch (error) {
    console.error("Error deleting message:", error)
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 })
  }
}