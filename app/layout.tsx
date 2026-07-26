import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = { title: "WT Market", description: "War Thunder account marketplace" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Header /><main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main></body></html>;
}