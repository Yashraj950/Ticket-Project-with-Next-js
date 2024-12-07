import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { homepath, ticketPath, ticketsPath } from "@/paths";
import { Button, buttonVariants } from "@/components/ui/button";
import { Kanban, LucideKanban } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wanted creation with next",
  description: "My Creation is best application ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          className=" supports-backdrop-blur:bg-background/60
         fixed left-0 right-0 top-0 z-20
          border-b bg-background/95 backdrop-blur
           w-full flex py-2.5 px-5 justify-between"
        >
          <div>

              <Link href={homepath()}
              className={buttonVariants({variant: "ghost"})}>
                <LucideKanban />
               <h1 className=" ml-2 text-lg font-semibold">TicketBounty</h1>
              </Link>

          </div>
          <div>
            {/* <Button> */}
            <Link href={ticketsPath()} className={buttonVariants({variant: "default"})} >
              Tickets
            </Link>
            {/* </Button> */}
          </div>
        </nav>

        <main
          className="min-h-screen flex-1
        overflow-y-auto overflow-x-hidden
        py-24 px-8
        bg-secondary/20
        flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
