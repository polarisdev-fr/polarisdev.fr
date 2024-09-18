'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendHorizontal, MoreVertical, Pencil } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from '@prisma/client'

interface Message {
  id: number
  content: string
  sender: 'user' | 'agent'
}

interface ChatComponentProps {
  userSession: User | null
  initialMessages: Message[]
}

export default function ChatComponent({ userSession, initialMessages }: ChatComponentProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputMessage, setInputMessage] = useState('')
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() !== '') {
      if (editingMessageId) {
        setMessages(messages.map(msg => 
          msg.id === editingMessageId ? { ...msg, content: inputMessage } : msg
        ))
        setEditingMessageId(null)
      } else {
        const newMessage: Message = {
          id: messages.length + 1,
          content: inputMessage,
          sender: 'user'
        }
        setMessages([...messages, newMessage])

        // Simulate agent response
        setTimeout(() => {
          const agentResponse: Message = {
            id: messages.length + 2,
            content: "Thank you for your message. Our support team will get back to you shortly.",
            sender: 'agent'
          }
          setMessages(prevMessages => [...prevMessages, agentResponse])
        }, 1000)
      }
      setInputMessage('')
    }
  }

  const handleEditMessage = (id: number) => {
    const messageToEdit = messages.find(msg => msg.id === id)
    if (messageToEdit) {
      setInputMessage(messageToEdit.content)
      setEditingMessageId(id)
    }
  }

  return (
    <div className="flex flex-col h-[500px]">
      <ScrollArea className="flex-grow mb-4" ref={scrollAreaRef}>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <Avatar className="w-8 h-8">
                <AvatarFallback>{message.sender === 'user' ? userSession?.name?.[0].toUpperCase() : 'A'}</AvatarFallback>
                <AvatarImage src={message.sender === 'user' ? userSession?.image ?? '' : ''} alt={userSession?.name?.[0]} />
              </Avatar>
              <div 
                className={`mx-2 px-3 py-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                }`}
              >
                {message.content}
              </div>
              {message.sender === 'user' && (
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