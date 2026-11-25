import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ActiveSectionProvider } from "@/components/active-section";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";
import { Announcement } from "@/components/announcement";
import { Intro } from "@/components/intro";

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
    default: "Alex Mitkov | Custom websites and AI workflows for small businesses",
    template: "%s | Alex Mitkov",
  },
  description:
    "Alex Mitkov designs and builds websites, booking systems and AI tools for small businesses. Based in Las Vegas. Projects from $1,500.",
  metadataBase: new URL("https://amitkov.dev"),
  openGraph: {
    title: "Alex Mitkov | Custom websites and AI workflows for small businesses",
    description:
      "Custom web experiences. AI-integrated intelligent business workflows.",
    url: "https://amitkov.dev",
    siteName: "Alex Mitkov",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Mitkov | Custom websites and AI workflows for small businesses",
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
              "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');if(sessionStorage.getItem('intro-seen')==='1')document.documentElement.classList.add('no-intro')}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Intro />
        <ActiveSectionProvider>
          <Navbar />
          <Announcement />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
