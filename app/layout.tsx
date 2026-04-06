import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exodus Auto Detailing Demo",
  description:
    "A redesigned demo homepage for Exodus Auto Detailing built around the company details, reviews, and location provided for Albuquerque, New Mexico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
