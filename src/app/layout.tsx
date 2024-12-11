import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header";
import ThemeProvider from "@/components/theme/theme-provider";
// import { ThemeProvider } from "next-themes";

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
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main
            className="min-h-screen flex-1
        overflow-y-auto overflow-x-hidden
        py-24 px-8
        bg-secondary/20
        flex flex-col"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
