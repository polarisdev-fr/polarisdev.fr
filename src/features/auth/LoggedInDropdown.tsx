"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { PropsWithChildren } from "react";
import { Home, LogOut } from "lucide-react";
import Link from "next/link";
import { signOutAction } from "./auth.actions";
export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href={"/home"} className="w-full">
                        <Home size={16} className={"mr-2"}/>
                        Home
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => {
                        signOutAction();
                    }}
                >
                    <LogOut size={16} className={"mr-2"}/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}