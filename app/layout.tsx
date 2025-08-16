import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
/* import { GeistSans } from "geist/font/sans"; */
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anekTelugu = Anek_Telugu({
  variable: "--font-anek-telugu",
  subsets: ["telugu"],
});

export const metadata: Metadata = {
  title: "Dorian Peltier - Fullstack Developer, Software Engineer",
  description:
    "Engineer with a degree in Telecommunications specialized in Software Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${anekTelugu.variable} ${geistMono.variable} font-sans h-full bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
