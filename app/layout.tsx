import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenSouq - Plants & Garden Store",
  description: "Your one-stop shop for indoor plants, outdoor plants, and gardening supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
