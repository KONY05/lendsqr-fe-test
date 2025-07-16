import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lendsqr",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
