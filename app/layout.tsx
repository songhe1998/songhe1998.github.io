import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://songhe1998.github.io"),
  title: "Songhe Wang — Computer Vision Researcher",
  description:
    "Academic homepage of Songhe Wang, a Ph.D. researcher in computer vision and machine learning at Penn State.",
  openGraph: {
    type: "website",
    url: "https://songhe1998.github.io",
    title: "Songhe Wang — Computer Vision Researcher",
    description:
      "Physics-grounded 3D vision, adversarial machine learning, and intelligent systems.",
    siteName: "Songhe Wang",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 909,
        alt: "Songhe Wang — Computer Vision and Machine Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Songhe Wang — Computer Vision Researcher",
    description:
      "Physics-grounded 3D vision, adversarial machine learning, and intelligent systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
