import Link from "next/link"

import { Infinity } from "lucide-react"
import { SignInButton } from "@/features/auth/SignInButton"
import { FaGoogle, FaDiscord, FaGithub } from "react-icons/fa";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function LoginPage() {
  return (
    <section className="py-4 px-6 lg:p-6 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto w-full grid grid-cols-1 gap-16 relative">
            <main className="rounded-2xl border bg-body/30 border-white/5 p-8 w-full z-30">
                <Link href="/" className="font-bold font-title overflow-hidden text-2xl flex items-center justify-center gap-3 text-white fill-white relative z-1 shadow-sm w-16 h-16 rounded-lg mx-auto">
                    <Infinity className="w-16 h-16"/>
                </Link>
                <div className="w-full mt-10">
                    <p className="font-title text-white font-bold text-3xl text-center">Welcome back</p>
                    <p className="font-sans text-dark-200/60 text-center mt-2">Log in to your account to continue</p>
                    <div className="mt-8 w-full">
                        <div className="mt-8 w-full">
                            <div className="grid grid-cols-1 gap-4">
                                <SignInButton icon={<FaDiscord className="w-6 h-6 pr-2"/>} method="discord" text="Continue with Discord" className="bg-[#004EE4] transition-all duration-200 hover:bg-discord-hover rounded-md flex items-center justify-center gap-3 text-white px-4 py-3 font-light w-full" disabled/>
                                <SignInButton icon={<FaGoogle className="w-6 h-6 pr-2"/>} method="google" text="Continue with Google" className="bg-[#FFF] text-black transition-all duration-200 hover:bg-discord-hover rounded-md flex items-center justify-center gap-3font-sans px-4 py-3 font-light w-full" disabled/>
                                <SignInButton icon={<FaGithub className="w-6 h-6 pr-2"/>} method="github" text="Continue with GitHub" className="bg-[#333] transition-all duration-200 hover:bg-discord-hover rounded-md flex items-center justify-center gap-3 text-white font-light px-4 py-3 w-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-white text-center">
                <p className="font-sans text-dark-200/60 text-center">
                    © 2024 PolarisDev. All rights reserved.
                </p>
            </footer>
            <div className="z-10 w-[340px] h-[340px] rounded-full bg-gradient-linear blur-[110px] absolute top-0 left-1/2 -translate-x-1/2"/>
        </div>
    </section>
  )
}
