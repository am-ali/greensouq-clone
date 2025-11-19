"use client";

interface Product {
  id: number;
  name: string;
  nameArabic?: string;
  price?: string;
  minPrice?: string;
  maxPrice?: string;
  originalPrice?: string;
  originalMinPrice?: string;
  originalMaxPrice?: string;
  image?: string;
  badge?: string;
}

export default function ProductCard({ product, idx }: { product: Product; idx: number }) {
  const p = product;
  const hasRange = p.minPrice !== undefined && p.maxPrice !== undefined;
  const displayCurrent = hasRange
    ? `Dhs. ${p.minPrice} - Dhs. ${p.maxPrice}`
    : p.price !== undefined
    ? `Dhs. ${p.price}`
    : "";
  const hasOriginalRange = p.originalMinPrice !== undefined && p.originalMaxPrice !== undefined;
  const displayOriginal = hasOriginalRange
    ? `Dhs. ${p.originalMinPrice} - Dhs. ${p.originalMaxPrice}`
    : p.originalPrice !== undefined
    ? `Dhs. ${p.originalPrice}`
    : "";
  const onSale = Boolean(displayOriginal);

  return (
    <div className="group cursor-pointer bg-white border border-gray-200 transition-shadow hover:shadow-lg">
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
              loading={idx < 5 ? "eager" : "lazy"}
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
}
