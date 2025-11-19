"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroGrid() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto px-0 md:px-20 lg:px-78 py-0 mt-[110px] md:mt-0">
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px]">
        <Image
          src={isMobile ? "/hero2.webp" : "/hero.webp"}
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          sizes="(min-width: 1536px) 1536px, 100vw"
          priority
        />
      </div>
    </section>
  );
}
