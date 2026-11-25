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
    default: "Alex Mitkov | AI research and engineering",
    template: "%s | Alex Mitkov",
  },
  description:
    "Alex Mitkov researches reinforcement learning and AI safety, and builds custom web experiences and AI-integrated workflows for small businesses.",
  metadataBase: new URL("https://amitkov.dev"),
  openGraph: {
    title: "Alex Mitkov | AI research and engineering",
    description:
      "Custom web experiences. AI-integrated intelligent business workflows.",
    url: "https://amitkov.dev",
    siteName: "Alex Mitkov",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Mitkov | AI research and engineering",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
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
