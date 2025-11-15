"use client";

interface Product {
  id: number;
  name: string;
  nameArabic?: string;
  // current single price OR use min/max for a range
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  // original (strikethrough) price(s) if on sale
  originalPrice?: number;
  originalMinPrice?: number;
  originalMaxPrice?: number;
  image?: string;
  badge?: string; // e.g. 'Sale'
}

export default function ProductGrid({ title, products }: { title: string; products: Product[] }) {
  return (
  <section className="max-w-screen-2xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((p, idx) => {
          const hasRange = p.minPrice !== undefined && p.maxPrice !== undefined;
          const displayCurrent = hasRange
            ? `Dhs. ${p.minPrice!.toFixed(2)} - Dhs. ${p.maxPrice!.toFixed(2)}`
            : p.price !== undefined
              ? `Dhs. ${p.price.toFixed(2)}`
              : '';
          const hasOriginalRange = p.originalMinPrice !== undefined && p.originalMaxPrice !== undefined;
          const displayOriginal = hasOriginalRange
            ? `Dhs. ${p.originalMinPrice!.toFixed(2)} - Dhs. ${p.originalMaxPrice!.toFixed(2)}`
            : p.originalPrice !== undefined
              ? `Dhs. ${p.originalPrice.toFixed(2)}`
              : '';
          const onSale = Boolean(displayOriginal);
          return (
            <div
              key={p.id}
              className="group cursor-pointer border border-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              {/* Image */}
              <div className="relative w-full h-72 bg-gray-50 overflow-hidden">
                {onSale && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">Sale</span>
                )}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading={idx < 5 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                    <span className="text-5xl select-none">🪴</span>
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="px-5 pt-4 pb-5">
                <h3 className="text-[15px] font-medium leading-snug min-h-[44px] mb-2 line-clamp-2">
                  {p.name}
                </h3>
                {p.nameArabic && (
                  <p className="text-xs text-gray-600 mb-2 leading-snug">{p.nameArabic}</p>
                )}
                {/* Prices */}
                {onSale && (
                  <div className="text-[13px] text-gray-500 line-through mb-1">
                    {displayOriginal}
                  </div>
                )}
                <div className="text-[14px] font-semibold text-gray-900">
                  {displayCurrent}
                </div>
                {/* Hover actions */}
                <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    className="px-4 py-2 text-sm border border-gray-300 hover:bg-black hover:text-white transition-colors"
                  >
                    Quick shop
                  </button>
                  <button
                    className="px-4 py-2 text-sm border border-gray-300 hover:bg-black hover:text-white transition-colors"
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
        <button className="bg-black text-white px-8 py-3 rounded text-sm font-medium hover:bg-gray-800">
          Shop collection
        </button>
      </div>
    </section>
  );
}
