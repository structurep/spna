import "./globals.css";
import type { ReactNode } from "react";
import { Manrope, Newsreader } from "next/font/google";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"]
});

export const metadata = {
  title: "Structured Partners | M&A Advisory",
  description:
    "Boutique, senior-led M&A advisory for industrial and field services companies."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} page-fade bg-spbg text-sptext antialiased`}>
        {children}
      </body>
    </html>
  );
}
