import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poojan Paradise",
  description: "Premium Pooja Items Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
