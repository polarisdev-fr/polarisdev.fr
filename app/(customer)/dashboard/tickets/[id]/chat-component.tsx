// app/tickets/[id]/chat-component.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendHorizontal, MoreVertical, Pencil, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Message } from '@prisma/client'
import { toast } from 'sonner'

interface ChatComponentProps {
  ticketId: string
  initialMessages: (Message & { user: User })[]
}

export default function ChatComponent({ ticketId, initialMessages }: ChatComponentProps) {
  const [messages, setMessages] = useState<(Message & { user: User })[]>(initialMessages)
  const [inputMessage, setInputMessage] = useState('')
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() !== '') {
      try {
        const response = await fetch(`/api/tickets/${ticketId}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: inputMessage }),
        })

        if (!response.ok) {
          throw new Error('Failed to send message')
        }

        const newMessage = await response.json()
        setMessages([...messages, newMessage])
        setInputMessage('')
      } catch (error) {
        console.error('Error sending message:', error)
        alert('Failed to send message. Please try again.')
      }
    }
  }

  const handleEditMessage = (id: string) => {
    const messageToEdit = messages.find(msg => msg.id === id)
    if (messageToEdit) {
      setInputMessage(messageToEdit.content)
      setEditingMessageId(id)
    }
  }

  const handleDeleteMessage = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`/api/tickets/${ticketId}/messages/${id}`, {
          method: 'DELETE',
        })

        if (!response.ok) {
          throw new Error('Failed to delete message')
        }

        setMessages(messages.filter(msg => msg.id !== id))
        toast.success('Message deleted successfully.')
      } catch (error) {
        console.error('Error deleting message:', error)
        toast.error('Failed to delete message. Please try again.')
      }
    }
  }

  return (
    <div className="flex flex-col h-[500px]">
      <ScrollArea className="flex-grow mb-4" ref={scrollAreaRef}>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.user.role === 'USER' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex items-start ${message.user.role === 'USER' ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar className="w-8 h-8">
                <AvatarFallback>{message.user.name?.[0].toUpperCase()}</AvatarFallback>
                <AvatarImage src={message.user.image ?? ''} alt={message.user.name?.[0]} />
              </Avatar>
              <div 
                className={`mx-2 px-3 py-2 rounded-lg ${
                  message.user.role === 'USER' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                }`}
              >
                {message.content}
              </div>
              {message.user.role === 'USER' && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEditMessage(message.id)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteMessage(message.id)}>
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete Message</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder={editingMessageId ? "Edit your message..." : "Type your message..."}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow"
          aria-label="Chat message input"
        />
        <Button type="submit" size="icon" aria-label={editingMessageId ? "Update message" : "Send message"}>
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}