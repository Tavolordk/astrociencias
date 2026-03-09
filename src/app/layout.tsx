import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/presentation/components/layout/Header";
import Footer from "@/presentation/components/layout/Footer";

export const metadata = {
  title: "Alianza de Proyectos de Astrociencias",
  description: "Red internacional de divulgación científica, proyectos y comunidad.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#05070D] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}