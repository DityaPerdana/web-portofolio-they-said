import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/NavbarDemo";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Suspense } from "react";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/context/LoadingContent";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider>
          <LoadingProvider>
            <Suspense>
              <Navigation />
              {children}
              <ServiceCTA />
              <Footer />
            </Suspense>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
