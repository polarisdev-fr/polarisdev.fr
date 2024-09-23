'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { User, Role } from "@prisma/client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { EyeIcon, FilePenIcon, MoveHorizontalIcon, PlusIcon, TrashIcon } from "lucide-react"
import Loading from "@/components/main/loading"
import { toast } from "sonner"
import { redirect } from "next/navigation"
import { ContentLayout } from "@/components/dashboard/content-layout"

interface Ticket {
  id: string
  title: string
  description: string
  status: 'open' | 'closed'
  priority: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    priority: ""
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [currentUserResponse, usersResponse, ticketsResponse] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/users'),
          fetch('/api/tickets')
        ])

        if (!currentUserResponse.ok || !usersResponse.ok || !ticketsResponse.ok) {
          throw new Error('Failed to fetch data')
        }

        const [currentUserData, usersData, ticketsData] = await Promise.all([
          currentUserResponse.json(),
          usersResponse.json(),
          ticketsResponse.json()
        ])

        setCurrentUser(currentUserData)
        setUsers(usersData)
        setTickets(ticketsData)
      } catch (err) {
        setError('Error fetching data')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewTicket(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setNewTicket(prev => ({ ...prev, priority: value }))
  }

  const handleCreateTicket = async () => {
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTicket),
      })
  
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create ticket')
      }
  
      const createdTicket = await response.json()
      setTickets(prev => [...prev, createdTicket])
      setIsDialogOpen(false)
      setNewTicket({
        title: "",
        description: "",
        priority: ""
      })
      toast.success('Ticket created successfully', {
        duration: 5000,
        action: {
          label: 'View',
          onClick: () => {
            console.log('View ticket:', createdTicket.id)
          }
        }
      })
    } catch (err) {
      console.error('Error creating ticket:', err)
      const errorMessage = err instanceof Error ? err.message : 'Failed to create ticket';
      toast.error(errorMessage)
    }
  }

  if (isLoading) return <Loading/>
  if (error) return <div className="flex items-center justify-center h-screen">Error: {error}</div>
  if (!currentUser) redirect('/login')

  const roleArray = [Role.ADMIN, Role.MODERATOR]

  const isAdmin = roleArray.includes(currentUser.role as "ADMIN" | "MODERATOR")

  return (
    <ContentLayout title="Support">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Manage your support tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>{ticket.id}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{ticket.description}</TableCell>
                      <TableCell>
                        <Badge variant={ticket.status === 'open' ? 'default' : 'secondary'}>
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={ticket.priority === 'low' ? 'bg-yellow-500 text-black' : ticket.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'}
                        >
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href={`/dashboard/tickets/${ticket.id}`}>
                                <EyeIcon className="mr-1 h-4 w-4" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FilePenIcon className="mr-2 h-4 w-4" />
                              Edit Ticket
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrashIcon className="mr-2 h-4 w-4" />
                              Close Ticket
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Create New Ticket
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Ticket</DialogTitle>
                    <DialogDescription>Fill in the details to create a new support ticket.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        value={newTicket.title}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={newTicket.description}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="priority" className="text-right">
                        Priority
                      </Label>
                      <Select onValueChange={handleSelectChange} value={newTicket.priority}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleCreateTicket}>Create Ticket</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>View and manage your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={currentUser.image || undefined} alt={currentUser.name || 'User avatar'} />
                  <AvatarFallback>{currentUser.name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-medium">{currentUser.name}</p>
                  <p className="text-sm text-gray-500">{currentUser.email}</p>
                  <p className="text-sm text-gray-500">{currentUser.mobilePhone}</p>
                </div>
              </div>
              <Separator className="my-4" />
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Role</dt>
                  <dd className="text-lg">{currentUser.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                  <dd className="text-lg">{new Date(currentUser.createdAt).toLocaleDateString()}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Support Priority</dt>
                  <dd className="text-lg">{currentUser.supportPriority}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Plan</dt>
                  <dd className="text-lg">{currentUser.plan}</dd>
                </div>
              </dl>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <Link href="/account">Edit Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8">
        {isAdmin && (
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage system users</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </ContentLayout>
  )
}