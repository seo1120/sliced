import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixel",
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sliced — Turn Your IP Into a World Fans Can Enter",
  description:
    "Bring your manga, anime, and comic worlds to life in Minecraft. Fans explore, interact with your characters, and spend — you earn. Creator IP monetization, reimagined.",
  keywords: [
    "Sliced",
    "creator IP monetization",
    "Minecraft server",
    "anime Minecraft",
    "manga IP",
    "fan experience",
    "creator economy",
    "NPC AI characters",
  ],
  authors: [{ name: "Sliced" }],
  openGraph: {
    title: "Sliced — Turn Your IP Into a World Fans Can Enter",
    description:
      "Bring your manga & anime worlds to life in Minecraft. Fans explore, interact, and spend — you earn.",
    url: "https://sliced.dev",
    siteName: "Sliced",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sliced — Turn Your IP Into a World Fans Can Enter",
    description:
      "Bring your manga & anime worlds to life in Minecraft. Fans explore, interact, and spend — you earn.",
  },
  icons: {
    icon: "/sliced-icon.svg",
    apple: "/sliced-icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
