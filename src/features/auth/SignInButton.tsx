"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";

interface SignInButtonProps {
    icon: React.ReactNode;
    method: string;
    text?: string;
    className?: string;
    disabled?: boolean;
}

export const SignInButton =  ({ icon, method, text, className, disabled }: SignInButtonProps) => {
    return (
        <Button 
                disabled={disabled}
                className={className}
                onClick={() => signIn(method, { callbackUrl: '/dashboard', redirect: true })}
        >
            {icon}
            {text ?? 'Sign In'}
        </Button>
    )
}