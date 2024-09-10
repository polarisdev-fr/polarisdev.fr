"use client"

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/features/theme/ThemeProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { env } from "@/env"

const queryClient = new QueryClient()

export const Providers = (props: PropsWithChildren) => {
    return(
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
            >
                <QueryClientProvider client={queryClient}>
                    <Toaster/>
                    <GoogleAnalytics gaId={"G-WGGG0HXC39"} />
                    {props.children}
                </QueryClientProvider>
            </ThemeProvider>
        </SessionProvider>
    )
}