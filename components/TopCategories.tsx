"use client";

import Image from "next/image";

export default function TopCategories() {
  const categories = [
    {
      name: "Indoor Outdoor Plants",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Gardening Pots",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Herbs & Vegetables",
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Outdoor Plants",
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Succulents",
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Planter Accessories",
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Seedlings",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Garden Tools",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">Top Categories this Week</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            <div className="w-80 h-80 rounded-full bg-gray-100 overflow-hidden relative group-hover:shadow-xl transition-shadow">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 50vw, 320px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 4}
              />
            </div>
            <h3 className="text-center text-sm font-medium line-clamp-2">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
