"use client";
import { LogInIcon } from "lucide-react";
import { Button } from "../ui/button"
import { signIn, signOut } from "next-auth/react"
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

export const LoginButton = () => {
    return (
        <Link href="/login">
            <Button variant="secondary">
                    <LogInIcon className="w-4 h-4 mr-2"/>
                    <span>Login</span>
            </Button>
        </Link>

    )
}

export const LogoutButton = () => {
    return <Button onClick={() => signOut()} className="text-destructive">Logout</Button>
}