import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navigation/Navbar/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "gözümün nuru",
  description: "Zarif mücevher ve özel tasarım koleksiyonu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={dmSans.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
