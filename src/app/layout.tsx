import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  themeColor: "#0ea5e9",
};

export const metadata: Metadata = {
  title: "DentaLab - Dental Klinik Yönetim Uygulaması",
  description:
    "Dental klinik yönetimi için modern ve kullanıcı dostu bir uygulama",
  keywords: "dental, klinik, uygulama, yönetim, diş hekimi",
  authors: [{ name: "DentaLab Ekibi" }],
  icons: {
    icon: "/svg/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preload" href="/photos/bg.png" as="image" type="image/png" />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
