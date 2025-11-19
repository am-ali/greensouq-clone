"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  nameArabic?: string;
  // current single price OR use min/max for a range
  price?: string;
  minPrice?: string;
  maxPrice?: string;
  // original (strikethrough) price(s) if on sale
  originalPrice?: string;
  originalMinPrice?: string;
  originalMaxPrice?: string;
  image?: string;
  badge?: string; // e.g. 'Sale'
}

export default function ProductGrid({ 
  title, 
  products,
  collectionLink 
}: { 
  title: string; 
  products: Product[];
  collectionLink?: string;
}) {
  return (
  <section className="max-w-screen-2xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <h2 className="text-2xl md:text-3xl font-normal text-center mb-8 md:mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((p, idx) => {
          const hasRange = p.minPrice !== undefined && p.maxPrice !== undefined;
          const displayCurrent = hasRange
            ? `Dhs. ${p.minPrice} - Dhs. ${p.maxPrice}`
            : p.price !== undefined
              ? `Dhs. ${p.price}`
              : '';
          const hasOriginalRange = p.originalMinPrice !== undefined && p.originalMaxPrice !== undefined;
          const displayOriginal = hasOriginalRange
            ? `Dhs. ${p.originalMinPrice} - Dhs. ${p.originalMaxPrice}`
            : p.originalPrice !== undefined
              ? `Dhs. ${p.originalPrice}`
              : '';
          const onSale = Boolean(displayOriginal);
          return (
            <div
              key={p.id}
              className="group cursor-pointer bg-white border border-gray-200 transition-shadow hover:shadow-lg"
            >
              {/* Image Container with Padding */}
              <div className="p-3 md:p-6">
                <div className="relative w-full h-48 md:h-64 bg-gray-50 overflow-hidden">
                  {onSale && (
                    <span className="absolute bottom-0 left-0 bg-gray-600 text-white text-xs px-2 py-1 z-10">Sale</span>
                  )}
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading={idx < 5 ? 'eager' : 'lazy'}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <span className="text-5xl select-none">🪴</span>
                    </div>
                  )}
                </div>
              </div>
              {/* Content */}
              <div className="px-4 pt-4 pb-4 relative">
                <h3 className="text-sm font-normal leading-snug mb-2 line-clamp-2">
                  {p.name}
                </h3>
                {p.nameArabic && (
                  <p className="text-xs text-gray-600 mb-2 leading-snug">{p.nameArabic}</p>
                )}
                {/* Prices */}
                <div className="mb-0">
                  {onSale && (
                    <div className="text-sm text-gray-500 line-through">
                      {displayOriginal}
                    </div>
                  )}
                  <div className="text-sm font-normal text-gray-500">
                    {displayCurrent}
                  </div>
                </div>
                {/* Hover actions */}
                <div className="absolute left-4 right-4 bottom-4 hidden group-hover:flex gap-2">
                  <button
                    className="flex-1 px-2 md:px-3 py-1.5 text-xs md:text-sm rounded-sm border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Quick shop
                  </button>
                  <button
                    className="flex-1 px-2 md:px-3 py-1.5 text-xs rounded-sm bg-black text-white hover:bg-gray-800 transition-colors"
                  >
                    Choose options
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">
        {collectionLink ? (
          <Link 
            href={collectionLink}
            className="inline-block bg-black text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-800"
          >
            Shop collection
          </Link>
        ) : (
          <button className="bg-black text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-800">
            Shop collection
          </button>
        )}
      </div>
    </section>
  );
}
