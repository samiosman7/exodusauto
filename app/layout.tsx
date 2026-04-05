import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Platinum Mobile Car Detailing Demo",
  description:
    "A redesigned demo homepage for Platinum Mobile Car Detailing built around the exact live domain and clearly labeled placeholder specifics.",
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
