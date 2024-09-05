"use client";
import { LogInIcon } from "lucide-react";
import { Button } from "../ui/button"
import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
    return (
        <Button onClick={() => signIn()} variant="secondary">
            <LogInIcon className="w-4 h-4 mr-2"/>
            <span>Login</span>
        </Button>
    )
}

export const LogoutButton = () => {
    return <Button onClick={() => signOut()} className="text-destructive">Logout</Button>
}