import type { Metadata } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/ink.css";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeScript } from "@/components/theme-script";
import SmoothScroll from "@/components/smooth-scroll";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-martian-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Victor Lopes Rosa · Arquitetura de Produto",
  description:
    "Desenvolvedor full stack com foco em produto real, arquitetura de software e decisões técnicas com impacto no negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${martianMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeScript />
        <LanguageProvider>
          <SmoothScroll />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
