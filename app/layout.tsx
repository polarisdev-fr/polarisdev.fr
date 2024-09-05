import type { Metadata } from "next";
import { aquire, cn } from "@/lib/utils";
//import { polarismetadata } from "@/lib/constants";
import "./globals.css";
import { Providers } from "./providers";

/*export const metadata: Metadata = {
  ...polarismetadata
}*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link href="https://fonts.cdnfonts.com/css/aquire" rel="stylesheet"/>
      </head>
      <body 
        className={cn(aquire.className, "min-h-screen bg-background font-sans antialiased")}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
