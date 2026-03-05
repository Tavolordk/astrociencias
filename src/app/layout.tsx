import "@/app/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Astrociencias",
  description: "Difundimos astrociencias en México y el mundo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
