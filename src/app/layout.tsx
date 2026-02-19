import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LearnTrack - Lộ trình Backend SE",
  description: "Theo dõi hành trình 6 tháng trở thành Kỹ sư Phần mềm Backend",
  keywords: ["backend", "học tập", "lộ trình", "java", "spring boot", "dsa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="pt-[120px] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
