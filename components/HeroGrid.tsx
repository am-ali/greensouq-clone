"use client";

import Image from "next/image";

export default function HeroGrid() {
  return (
    <section className="max-w-screen-2xl mx-auto px-78 py-0">
      <div className="relative w-full h-[600px]">
        <Image
          src="/hero.webp"
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
