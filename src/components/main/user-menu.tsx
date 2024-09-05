"use client"
import { useEffect, useState } from "react";
import { getSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { LoginButton } from "./auth-buttons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { CreditCard, LayoutGrid, LogOut, User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/features/theme/mode-toogle";
import { Button } from "../ui/button";
//import { UserBilling } from "@/lib/actions/user-settings";
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from "../ui/tooltip";

export default function UserMenu() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session) {
        setSession(session);
      }
    };
    fetchSession();
  }, []);

  return (
    <div className="flex items-center gap-4">
        <ModeToggle/>
        {
            session ? (
                <DropdownMenu>
                    <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                            <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="relative h-8 w-8 rounded-full"
                            >
                                <Avatar className="h-8 w-8">
                                <AvatarImage src={session?.user?.image as string} alt="Avatar" />
                                <AvatarFallback className="bg-transparent">{session?.user?.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </Button>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">Profile</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{session?.user?.name}</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {session?.user?.email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem className="hover:cursor-pointer" asChild>
                                    <Link href="/dashboard" className="flex items-center z-10">
                                        <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:cursor-pointer" asChild>
                                    <Link href="/account" className="flex items-center">
                                        <User className="w-4 h-4 mr-3 text-muted-foreground" />
                                        Account
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:cursor-pointer" asChild onClick={() => /*UserBilling()*/ null}>
                                    <Link href="/account" className="flex items-center">
                                        <CreditCard className="w-4 h-4 mr-3 text-muted-foreground" />
                                        Billing
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="hover:cursor-pointer" onClick={() => {signOut()}}>
                            <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
                            Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <LoginButton/>
            )
        }
    </div>
  );
}
