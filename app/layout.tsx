import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/NavbarDemo";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Suspense } from "react";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/context/LoadingContent";
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
  metadataBase: new URL("https://nyctowl.studio"),
  title: "NyctOwl Studio",
  description: "...",
  openGraph: {
    images: [
      {
        url: "./opengraph.png",
      },
    ],
  },
  twitter: {
    images: ["./opengraph.png"],
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

              <SpeedInsights />
            </LoadingProvider>
          </ThemeProvider>
        </ClientShell>
      </body>
    </html>
  );
}
