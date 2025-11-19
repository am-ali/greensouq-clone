"use client";

import Image from "next/image";

export default function TopCategories() {
  const categories = [
    {
      name: "Plant Bundles",
      image: "/pb.webp",
    },
    {
      name: "Seasonal Flowering Plants",
      image: "/sfp.webp",
    },
    {
      name: "Beautiful Indoor Plants",
      image: "/bip.webp",
    },
    {
      name: "Best Selling Olive Trees",
      image: "/bsot.jpg",
    },
    {
      name: "Indoor Outdoor Plants",
      image: "/iop.webp",
    },
    {
      name: "Gardening Pots",
      image: "/gp.webp",
    },
    {
      name: "Herbs and Vegetables Plants",
      image: "/hvp.webp",
    },
    {
      name: "Outdoor Plants",
      image: "/op.webp",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-normal text-center mb-8 md:mb-12">Top Categories this Week</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 md:gap-4 cursor-pointer group"
          >
            <div className="w-28 h-28 md:w-64 lg:w-80 md:h-64 lg:h-80 rounded-full bg-gray-100 overflow-hidden relative group-hover:shadow-xl transition-shadow">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 50vw, 320px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 4}
              />
            </div>
            <h3 className="text-center text-xs md:text-sm font-bold line-clamp-2" style={{ color: '#494d41' }}>
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
