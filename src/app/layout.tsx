import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sliced — 복잡한 문제를 깔끔하게 나누다",
  description:
    "Sliced는 복잡한 업무를 작은 단위로 분리하여 팀의 생산성을 극대화합니다. 프로젝트 관리, 태스크 분배, 실시간 협업을 하나의 플랫폼에서.",
  keywords: [
    "Sliced",
    "프로젝트 관리",
    "태스크 관리",
    "팀 협업",
    "생산성",
    "업무 관리",
  ],
  authors: [{ name: "Sliced Team" }],
  openGraph: {
    title: "Sliced — 복잡한 문제를 깔끔하게 나누다",
    description:
      "복잡한 업무를 작은 단위로 분리하여 팀의 생산성을 극대화하는 올인원 협업 플랫폼",
    url: "https://sliced.dev",
    siteName: "Sliced",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sliced — 복잡한 문제를 깔끔하게 나누다",
    description:
      "복잡한 업무를 작은 단위로 분리하여 팀의 생산성을 극대화하는 올인원 협업 플랫폼",
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
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
