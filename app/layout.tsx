import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/NavbarDemo";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Suspense } from "react";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/context/LoadingContent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientShell from "@/components/ClientShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NyctOwl Studio",
  description:
    "NyctOwl Studio offers professional web design, development, and creative digital solutions. We transform your ideas into elegant, functional websites and applications with precision and expertise.",
  metadataBase: new URL("https://nyctowl.vercel.app"),
  openGraph: {
    title: "NyctOwl Studio - Web Design & Development Solutions",
    description:
      "Professional web design, development, and creative digital solutions by NyctOwl Studio.",
    url: "https://nyctowl.vercel.app",
    siteName: "NyctOwl Studio",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "NyctOwl Studio - From Pixels to Impact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NyctOwl Studio - Web Design & Development",
    description: "Professional web design and development services",
    images: ["/opengraph.png"],
    creator: "@nyctowlstudio",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientShell>
          <ThemeProvider>
            <LoadingProvider>
              <Suspense
                fallback={<div className="h-20 bg-white dark:bg-black"></div>}
              >
                <Navigation />
              </Suspense>

              {children}

              <Suspense
                fallback={
                  <div className="py-12 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                }
              >
                <ServiceCTA />
              </Suspense>

              <Suspense
                fallback={
                  <div className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900/70"></div>
                }
              >
                <Footer />
              </Suspense>

              <Analytics />
              <SpeedInsights />
            </LoadingProvider>
          </ThemeProvider>
        </ClientShell>
      </body>
    </html>
  );
}
