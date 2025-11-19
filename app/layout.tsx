import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
        {/* Floating Call Button */}
        <a 
          href="tel:+971585121105" 
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 hover:scale-110 transition-transform duration-200"
        >
          <Image 
            src="/call.png" 
            alt="Call us" 
            width={50}
            height={50}
            className="drop-shadow-lg md:w-[60px] md:h-[60px]"
          />
        </a>
      </body>
    </html>
  );
}
