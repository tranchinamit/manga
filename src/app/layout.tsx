import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasane - Inkr NamTran",
  description: "Kasane - Inkr NamTran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
