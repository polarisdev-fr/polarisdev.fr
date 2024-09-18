import Link from "next/link"
import { ContentLayout } from "@/components/dashboard/content-layout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { currentUser } from "@/auth/current-user"
import ChatComponent from "./chat-component"

// Simulated function to fetch user session
async function fetchUserSession() {
  // In a real application, this would be an API call or database query
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
  return await currentUser();
}

// Simulated function to fetch initial messages
async function fetchInitialMessages() {
  // In a real application, this would be an API call or database query
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay
  return [
    { id: 1, content: "Hello! How can I assist you today?", sender: "agent" as "agent" },
  ]
}

export default async function Component() {
  const userSession = await fetchUserSession()
  const initialMessages = await fetchInitialMessages()

  return (
    <ContentLayout title="Support">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Support</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Support Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <ChatComponent userSession={userSession} initialMessages={initialMessages} />
        </CardContent>
      </Card>
    </ContentLayout>
  )
}