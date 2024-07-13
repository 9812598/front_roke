import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Header from "@/components/(header)/Header";
import Footer from "@/components/(footer)/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ROKE FLUID EQUIPMENT",
  description: "Компоненты гидравлики. Надежность и качество",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          "min-h-svh flex flex-col justify-between items-center bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
