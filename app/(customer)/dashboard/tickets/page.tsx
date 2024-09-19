import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ContentLayout } from "@/components/dashboard/content-layout"
import { EyeIcon, FilePenIcon, MoveHorizontalIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function Component() {
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
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center bg-muted/50 px-6 py-3">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Support Tickets
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                      <span className="sr-only">Create New Ticket</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>View and manage your support tickets.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden sm:table-cell">Issue</TableHead>
                      <TableHead className="hidden sm:table-cell">Status</TableHead>
                      <TableHead className="hidden sm:table-cell">Priority</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">#123456</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">John Doe</div>
                        <div className="hidden text-sm text-muted-foreground sm:inline">john@example.com</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Website not loading</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Open
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs">High</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Ticket Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <EyeIcon className="h-4 w-4" />
                                View Ticket
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <FilePenIcon className="h-4 w-4" />
                                Update Status
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <TrashIcon className="h-4 w-4" />
                                Close Ticket
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">#234567</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Jane Smith</div>
                        <div className="hidden text-sm text-muted-foreground sm:inline">jane@example.com</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Can&apos;t log in to account</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Open
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="destructive">
                          Medium
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Ticket Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <EyeIcon className="h-4 w-4" />
                                View Ticket
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <FilePenIcon className="h-4 w-4" />
                                Update Status
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <TrashIcon className="h-4 w-4" />
                                Close Ticket
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="font-medium">#345678</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Michael Johnson</div>
                        <div className="hidden text-sm text-muted-foreground sm:inline">michael@example.com</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">Billing issue</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="secondary">
                          Open
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge className="text-xs" variant="destructive">
                          High
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Ticket Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <EyeIcon className="h-4 w-4" />
                                View Ticket
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <FilePenIcon className="h-4 w-4" />
                                Update Status
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <TrashIcon className="h-4 w-4" />
                                Close Ticket
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center bg-muted/50 px-6 py-3">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Ticket Details
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <FilePenIcon className="h-3.5 w-3.5" />
                      <span className="sr-only">Edit Ticket</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>View and manage the selected ticket.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Ticket Information</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Ticket #</span>
                      <span>#123456</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Customer</span>
                      <span>John Doe</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Issue</span>
                      <span>Website not loading</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <Badge className="text-xs" variant="secondary">
                        Open
                      </Badge>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Priority</span>
                      <Badge className="text-xs">High</Badge>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Created</span>
                      <span>2023-06-01</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Name</dt>
                      <dd>John Doe</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="#">john@example.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="#">+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Ticket History</div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-xs text-muted-foreground">Created ticket</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">2023-06-01 10:30 AM</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                          <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Sarah Davis</p>
                          <p className="text-xs text-muted-foreground">Updated status to Open</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">2023-06-02 02:15 PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Last updated <time dateTime="2023-06-02">June 2, 2023</time>
                </div>
                <div className="ml-auto flex gap-2">
                  <Button variant="outline" size="sm">
                    Update Status
                  </Button>
                  <Button variant="outline" size="sm">
                    Close Ticket
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </ContentLayout>
  )
}