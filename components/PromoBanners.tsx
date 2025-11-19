"use client";

import Image from "next/image";

export default function PromoBanners() {
  const banners = [
    {
      title: "Best Seller Large Plant Bundle",
      price: "1050 AED",
      image: "/bpb.webp",
    },
    {
      title: "Home Decorator Bundle",
      price: "799 AED",
      image: "/hdb.webp",
    },
    {
      title: "Urban Jungle Bundle",
      price: "725 AED",
      image: "/hdb.webp",
    },
  ];

  return (
  <section className="max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {banners.map((banner, index) => (
          <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden group">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              priority={index === 0}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(min-width:1024px) 33vw, 100vw"
            />
            <div className="absolute top-4 right-4 text-3xl md:text-5xl font-black text-orange-300 text-center" style={{ WebkitTextStroke: '2px black' }}>
              <div>{banner.price.split(" ")[0]}</div>
              <div className="text-lg md:text-lg">AED</div>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex flex-col items-start">
              <h3 className="text-white text-base md:text-xl font-semibold mb-2 md:mb-3 max-w-[180px] md:max-w-[220px] leading-snug">
                {banner.title}
              </h3>
              <button className="bg-black text-white px-4 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
