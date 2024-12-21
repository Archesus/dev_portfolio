import type { Metadata } from "next";
import "./globals.css";
import { Inter, Afacad } from "next/font/google";
import LoaderWrapper from "@/components/LoaderWrapper";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  display: "swap",
  variable: "--font-inter"
})

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad"
})

export const metadata: Metadata = {
  title: "Anurag's Portfolio",
  description: "A beautiful showcase of my skills and capabilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${afacad.variable} antialiased`}>
        <LoaderWrapper>
          <Navbar />
          {children}
        </LoaderWrapper>
      </body>
    </html>
  );
}