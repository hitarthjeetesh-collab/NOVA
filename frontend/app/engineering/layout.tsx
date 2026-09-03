import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering Platform",
  description: "AI-powered engineering workspace",
};

export default function EngineeringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}