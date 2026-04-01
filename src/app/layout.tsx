import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OpenGUT",
  description: "Open-source gastrointestinal sensing toolkit — hardware, firmware, and analysis software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)]">
        <div className="site-shell">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
