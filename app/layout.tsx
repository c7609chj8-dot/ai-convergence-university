import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui";
import { siteDescription } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI 융합대학 | 배움에서, 나의 가능성으로",
    template: "%s | AI 융합대학",
  },
  description: siteDescription,
  openGraph: {
    title: "AI 융합대학",
    description: siteDescription,
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main-content">
          본문 바로가기
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
