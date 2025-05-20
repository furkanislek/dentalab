import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DentaLab - Dental Klinik Yönetim Uygulaması",
  description:
    "Dental klinik yönetimi için modern ve kullanıcı dostu bir uygulama",
  keywords: "dental, klinik, uygulama, yönetim, diş hekimi",
  authors: [{ name: "DentaLab Ekibi" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
