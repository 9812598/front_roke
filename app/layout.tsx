import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import Header from "@/components/(header)/Header";
import Footer from "@/components/(footer)/Footer";

// const myriadProRegular = localFont({
//   src: "../fonts/MyriadPro/MYRIADPRO-REGULAR.ttf",
//   display: "swap",
// });

// const myriadProSemibold = localFont({
//   src: "../fonts/MyriadPro/MYRIADPRO-SEMIBOLD.ttf",
//   display: "swap",
// });

const myriadPro = localFont({
  src: [
    {
      path: "../fonts/MyriadPro/MYRIADPRO-REGULAR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MyriadPro/MYRIADPRO-SEMIBOLD.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-myriadPro",
});

const centuryGothic = localFont({
  src: "../fonts/CenturyGothic/centurygothic_bold.ttf",
  display: "swap",
  variable: "--font-centuryGothic",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
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
          "min-h-svh flex flex-col justify-between items-stretch bg-background font-sans antialiased",
          inter.variable,
          centuryGothic.variable,
          myriadPro.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
