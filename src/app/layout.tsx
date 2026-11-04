import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THREADSPARK — Personal Intelligence for Everything You Create",
  description: "An AI platform that develops an ongoing contextual understanding of your creative projects, fictional universes, research archives, and documents.",
  keywords: ["AI", "Creative Intelligence", "Personal Knowledge", "Worldbuilding", "Writing Assistant", "Threadspark"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-brand-void text-slate-200 antialiased selection:bg-brand-violet/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

