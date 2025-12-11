import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/main/navigation/language/language-context";
import { getBasePath } from "@/utils/basePath";

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
  const basePath = getBasePath();

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
        <LanguageProvider>
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
