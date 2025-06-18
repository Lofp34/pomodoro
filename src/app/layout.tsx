import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { analyticsConfig, isAnalyticsEnabled } from "@/config/analytics";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laurent Serre Développement - Expert Commercial & Formation",
  description: "Accompagnement commercial pour PME : structuration des équipes, formation à la vente, méthodes éprouvées. 20 ans d'expérience terrain + outils IA.",
  keywords: "formation commerciale, accompagnement vente, expert commercial, PME, structuration équipe commerciale, Laurent Serre",
  authors: [{ name: "Laurent Serre" }],
  creator: "Laurent Serre",
  openGraph: {
    title: "Laurent Serre Développement - Expert Commercial",
    description: "De l'effort commercial au levier stratégique. Accompagnement et formation pour équipes commerciales.",
    type: "website",
    locale: "fr_FR",
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
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content="Laurent Serre Développement - Expert Commercial" />
        <meta property="og:description" content="De l'effort commercial au levier stratégique. Accompagnement et formation pour équipes commerciales." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://laurentserre.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laurent Serre Développement - Expert Commercial" />
        <meta name="twitter:description" content="De l'effort commercial au levier stratégique. Accompagnement et formation pour équipes commerciales." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://laurentserre.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* Google Analytics - Chargé uniquement si configuré */}
        {isAnalyticsEnabled() && (
          <GoogleAnalytics measurementId={analyticsConfig.measurementId} />
        )}
        
        {children}
      </body>
    </html>
  );
}
