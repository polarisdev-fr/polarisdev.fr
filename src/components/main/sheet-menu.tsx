import * as React from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ModeToggle } from "@/features/theme/mode-toogle";
import { LoginButton } from "./auth-buttons";

export function SheetMenu({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
        <SheetTrigger asChild>
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
        >
            <HamburgerMenuIcon className={"text-2xl"} />
        </motion.div>
        </SheetTrigger>
        <SheetContent>
            <div className="flex flex-col space-y-4 p-4">
                {children}
                <LoginButton/>
                <ModeToggle/>
            </div>
        </SheetContent>
    </Sheet>
  );
}