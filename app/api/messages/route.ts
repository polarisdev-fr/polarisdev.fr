import { NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { baseAuth } from '@/auth/auth';

export async function POST(req: Request, res: Response) {
    const session = await baseAuth()

    if (!session || !session.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { ticketId, content } = body;

    if (!ticketId || !content) {
        return NextResponse.json({ error: 'Ticket ID and message content are required' }, { status: 400 });
    }

    try {
        const message = await prisma.message.create({
            data: {
                content,
                // Assuming you are storing user IDs in session.user.id
                sender: { connect: { id: session.user.id } },
                supportTicket: { connect: { id: ticketId } },
            },
        });

        return NextResponse.json(message, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
