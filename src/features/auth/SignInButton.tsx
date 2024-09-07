"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";

interface SignInButtonProps {
    icon: React.ReactNode;
    method: string;
    text?: string;
    className?: string;
}

export const SignInButton =  ({ icon, method, text, className }: SignInButtonProps) => {
    return (
        <Button 
                className={className}
                onClick={() => signIn(method, { callbackUrl: '/dashboard', redirect: true })}
        >
            {icon}
            {text ?? 'Sign In'}
        </Button>
    )
}