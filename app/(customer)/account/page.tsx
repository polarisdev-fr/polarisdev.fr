// app/(customer)/account/page.tsx

import { ContentLayout } from '@/components/dashboard/content-layout'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Github } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from 'next/link'
import { currentUser } from '@/auth/current-user'
import DeleteAccountButton from './delete-account-button'
import { Role } from '@prisma/client'
import { CheckIfUserHasRole, GetUserRole } from '@/lib/actions/user-settings'
import Image from 'next/image'

export default async function UserPage() {
  const user = await currentUser() // Fetch data server-side
  
  return (
    <ContentLayout title="User Profile">
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
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>User Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-3xl mx-auto space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
            src={user?.image ?? ""}
            alt={`${user?.name}'s avatar`}
            width={96}
            height={96}
            className="rounded-full w-24 h-24"
          />
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-muted-foreground">{user?.email}</p>
            <p className="text-muted-foreground text-[12px]">Stripe ID: {user?.stripeCustomerId}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Information</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={user?.name ?? ''} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user?.email} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select>
                <SelectTrigger className="w-[180px]" disabled>
                  <SelectValue placeholder={GetUserRole()} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Role?.USER || 'USER'}>User</SelectItem>
                  <SelectItem value={Role?.HELPER || 'HELPER'}>Helper</SelectItem>
                  <SelectItem value={Role?.MODERATOR || 'MODERATOR'}>Moderator</SelectItem>
                  <SelectItem value={Role?.ADMIN || 'ADMIN'}>Admin</SelectItem>
                  <SelectItem value={Role?.FOUNDER || 'FOUNDER'}>Moderator</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connected Accounts</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </div>
              <Switch checked={false} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FaDiscord className="w-5 h-5" />
                <span>Discord</span>
              </div>
              <Switch checked={false} />
            </div>
          </div>
        </div>

        <Separator />

        {/* Client-side component for delete functionality */}
        <DeleteAccountButton />
      </div>
    </ContentLayout>
  )
}
