import type { Metadata } from "next";
import { aquire, cn } from "@/lib/utils";
//import { polarismetadata } from "@/lib/constants";
import "./globals.css";
import { Providers } from "./providers";
import { Orbitron } from 'next/font/google'
import { Head } from "next/document";
/*export const metadata: Metadata = {
  ...polarismetadata
}*/

export const metadata: Metadata = {
  title: "polarisdev.fr",
  description: "Make your dreams come true with PolarisDev",
  metadataBase: new URL("https://polarisdev.fr"),
};


const orbitron = Orbitron({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "7abd75d791254ce9bbdf9cbc22b95e9b"}'
          ></script>
      </head>
      <body 
        className={cn(aquire.className, "min-h-screen bg-background antialiased")}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
