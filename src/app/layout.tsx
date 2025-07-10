import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruslan Gordin - Frontend Engineer",
  description:
    "Personal portfolio website showcasing my work and skills in frontend development",
  keywords: "frontend developer, web developer, react, next.js, typescript",
  authors: [{ name: "Ruslan Gordin" }],
  openGraph: {
    title: "Ruslan Gordin - Frontend Engineer",
    description:
      "Personal portfolio website showcasing my work and skills in frontend development",
    url: "https://ruslangordin.com",
    siteName: "Ruslan Gordin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruslan Gordin - Frontend Engineer",
    description:
      "Personal portfolio website showcasing my work and skills in frontend development",
    creator: "@ruslangordin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div className="min-h-screen bg-background text-text-primary relative overflow-hidden">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,transparent_50%)] opacity-10 pointer-events-none" />
            <main>{children}</main>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
