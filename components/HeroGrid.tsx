"use client";

import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
];

export default function HeroGrid() {
  return (
    <section className="max-w-screen-2xl mx-auto px-78 py-0">
    <div className="grid grid-cols-3 gap-0">
        {images.map((src, idx) => (
            <div key={idx} className="relative overflow-hidden min-w-0 h-[300px]">
                <Image
                    src={src}
                    alt={`Hero ${idx + 1}`}
                    fill
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={idx < 3}
                />
            </div>
        ))}
    </div>
    </section>
  );
}
