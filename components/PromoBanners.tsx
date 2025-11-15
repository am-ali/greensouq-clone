"use client";

import Image from "next/image";

export default function PromoBanners() {
  const banners = [
    {
      title: "Best Seller Large Plant Bundle",
      price: "1050 AED",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Home Collection For Business",
      price: "799 AED",
      image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Office Bundle",
      price: "725 AED",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
  <section className="max-w-screen-2xl mx-auto px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner, index) => (
          <div key={index} className="relative h-80 rounded-lg overflow-hidden group">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              priority={index === 0}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(min-width:1024px) 33vw, 100vw"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
            <div className="absolute top-4 right-4 text-4xl font-bold text-orange-400 drop-shadow">
              {banner.price.split(" ")[0]}<span className="text-lg ml-1">AED</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
              <h3 className="text-white text-xl font-semibold mb-3 max-w-[220px] leading-snug">
                {banner.title}
              </h3>
              <button className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
