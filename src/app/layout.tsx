import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] })

// const geistSans = Space_Grotesk({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Space_Grotesk({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Bagwis 1.0",
  description: "The first AI for PAF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${spaceGrotesk.className} antialiased h-screen overflow-hidden flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
