import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ActiveSectionProvider } from "@/components/active-section";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alex Mitkov | Custom web experiences and AI workflows",
    template: "%s | Alex Mitkov",
  },
  description:
    "Alex Mitkov builds custom, interactive websites for small businesses, with online booking, animation and AI-integrated workflows.",
  metadataBase: new URL("https://amitkov.dev"),
  openGraph: {
    title: "Alex Mitkov | Custom web experiences and AI workflows",
    description:
      "Custom web experiences. AI-integrated intelligent business workflows.",
    url: "https://amitkov.dev",
    siteName: "Alex Mitkov",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Mitkov | Custom web experiences and AI workflows",
    description:
      "Custom web experiences. AI-integrated intelligent business workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ActiveSectionProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
