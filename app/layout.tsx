import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Structured Partners | M&A Advisory",
  description:
    "Boutique, senior-led M&A advisory for industrial and field services companies."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-spbg text-sptext antialiased">{children}</body>
    </html>
  );
}
