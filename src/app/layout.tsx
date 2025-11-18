import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navigation/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Banner from "@/components/Banner/Banner";
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
  const basePath = process.env.NODE_ENV === "production" ? "/gozumunnuru" : "";
  
  return (
    <html lang="tr">
      <body 
        className={dmSans.className}
        style={{ 
          "--base-path": basePath,
          "--hero-image": `url("${basePath}/hero1.png")`,
          "--newsection-image": `url("${basePath}/newsection.jpg")`,
          "--necklace-image": `url("${basePath}/necklace.jpg")`,
          "--bracelets-image": `url("${basePath}/bracelets.jpg")`
        } as React.CSSProperties}
      >
        <Navbar />
        <Header />
        <Slider />
        <Banner />
        <main>{children}</main>
      </body>
    </html>
  );
}
