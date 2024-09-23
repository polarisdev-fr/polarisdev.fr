// app/tickets/[id]/page.tsx
import Link from "next/link"
import { ContentLayout } from "@/components/dashboard/content-layout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/prisma"
import ChatComponent from "./chat-component"
import { baseAuth } from "@/auth/auth"
import { redirect } from "next/navigation"

async function fetchTicketData(ticketId: string) {
  const ticket = await prisma.supportTicket.findUnique({
    where: { id: ticketId },
    include: {
      messages: {
        orderBy: { createdAt: 'asc' },
        include: { sender: true },
      },
    },
  })

  if (!ticket) {
    redirect('/dashboard/tickets')
  }
  prisma.$disconnect()
  return ticket
}

export default async function TicketPage({ params }: { params: { id: string } }) {
  const session = await baseAuth()
  if (!session || !session.user?.email) {
    throw new Error('Not authenticated')
  }

  const ticketData = await fetchTicketData(params.id)

  return (
    <ContentLayout title="Support Ticket">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/tickets">Tickets</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Ticket #{ticketData.id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Ticket: {ticketData.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ChatComponent 
            ticketId={ticketData.id} 
            initialMessages={ticketData.messages.map(message => ({
              ...message,
              user: message.sender
            }))} 
          />
        </CardContent>
      </Card>
    </ContentLayout>
  )
}