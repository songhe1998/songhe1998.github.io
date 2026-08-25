import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://songhe1998.github.io"),
  title: "Songhe Wang | Penn State University",
  description:
    "Academic homepage of Songhe Wang, a Computer Science Ph.D. candidate at Penn State University.",
  openGraph: {
    type: "website",
    url: "https://songhe1998.github.io",
    title: "Songhe Wang | Penn State University",
    description:
      "Computer vision, multimodal large language models, 3D vision, and video generation.",
    siteName: "Songhe Wang",
  },
  twitter: {
    card: "summary",
    title: "Songhe Wang | Penn State University",
    description:
      "Computer vision, multimodal large language models, 3D vision, and video generation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
