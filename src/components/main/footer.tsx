import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_FULL_NAME } from "@/lib/constants";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <>
            <section className="pb-8 relative">
                <section className="px-6 w-full rounded-t-[45px] relative z-[1] overflow-hidden bg-linear-gradient mx-auto">
                <div className="absolute inset-0 h-full w-full bg-gray-300 dark:bg-[#111111] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:26px_24px]"/>
                    <div className="relative z-[20] w-full max-w-3xl mx-auto grid grid-cols-1 gap-6 lg:gap-8 py-20 lg:pt-24 h-full lg:pb-36">
                        <p className="text-xl lg:text-5xl text-left lg:text-center">
                            What are you waiting for? <br/> Let&apos;s get started. {" "}
                            <span className="font-italic italic font-light">
                                Join us!
                            </span>
                        </p>
                        <div className="group lg:mx-auto w-full lg:max-w-lg relative">
                            <div className="bg-foreground/20 w-full transition-all duration-200 border border-foreground/20 group-focus-within:border-opacity-30 rounded-full relative overflow-hidden flex flex-row items-center justify-between gap-3 pl-6 pr-2 py-2 group-focus-within:ring-4 group-focus-within:ring-dark-100 group-focus-within:ring-opacity-0">
                                <Input type="email" placeholder="Email" className="flex items-center justify-start text-lg font-light lg:-translate-y-[1px] w-full border-transparent outline-transparent focus-visible:ring-0 bg-transparent"/>
                                <Button variant="default" className="duration-300 hover:scale-105 transform transition rounded-[45px]"><Link href="#">Join</Link></Button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bg-gradient-to-t to-transparent from-body w-full h-full bottom-0 left-0 z-[1] pointer-events-none"/>
                </section>
                <footer className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-8 max-lg:space-y-8">
                    <div>
                        <div className="font-title text-2xl font-bold flex items-center justify-start gap-2">
                            <p className="text-center text-2xl pt-2 pr-2 font-bold">
                                ∞
                            </p>
                            <span>{COMPANY_FULL_NAME}</span>
                        </div>
                        <p className="font-sans mt-2 text-sm font-medium">
                            Copyright © 2024 {COMPANY_FULL_NAME}
                        </p>
                        <ul className="mt-10 flex gap-5">
                            <Button variant="outline" className={" hover:fill-primary border-transparent shadow-sm"} >
                                <Link href="https://discord.gg/XzpfdfzPnd"><DiscordLogoIcon/></Link>
                            </Button>
                            <Button variant="outline" className={"hover:fill-primary border-transparent shadow-2xl"} >
                                <Link href="https://github.com/polarisdev-fr"><GitHubLogoIcon/></Link>
                            </Button>
                        </ul>
                    </div>
                </footer>
            </section>
        </>
    )
}