import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AEVRA",
  description: "An intelligent workspace for building what's next.",
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