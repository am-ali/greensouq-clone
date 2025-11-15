"use client";

interface Product {
  id: number;
  name: string;
  nameArabic?: string;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
  originalPrice?: number;
  originalMinPrice?: number;
  originalMaxPrice?: number;
  image?: string;
  badge?: string;
}

export default function ProductCard({ product, idx }: { product: Product; idx: number }) {
  const p = product;
  const hasRange = p.minPrice !== undefined && p.maxPrice !== undefined;
  const displayCurrent = hasRange
    ? `Dhs. ${p.minPrice!.toFixed(2)} - Dhs. ${p.maxPrice!.toFixed(2)}`
    : p.price !== undefined
    ? `Dhs. ${p.price.toFixed(2)}`
    : "";
  const hasOriginalRange = p.originalMinPrice !== undefined && p.originalMaxPrice !== undefined;
  const displayOriginal = hasOriginalRange
    ? `Dhs. ${p.originalMinPrice!.toFixed(2)} - Dhs. ${p.originalMaxPrice!.toFixed(2)}`
    : p.originalPrice !== undefined
    ? `Dhs. ${p.originalPrice.toFixed(2)}`
    : "";
  const onSale = Boolean(displayOriginal);

  return (
    <div className="group cursor-pointer border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="relative w-full h-60 bg-gray-50 overflow-hidden">
        {onSale && (
          <span className="absolute top-2 left-2 bg-[#394b2e] text-white text-xs px-2 py-1">Sale</span>
        )}
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading={idx < 5 ? "eager" : "lazy"}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
            <span className="text-5xl select-none">🪴</span>
          </div>
        )}
      </div>
      <div className="px-4 pt-3 pb-4">
        <h3 className="text-[14px] font-medium leading-snug min-h-[40px] mb-2 line-clamp-2">{p.name}</h3>
        {p.nameArabic && <p className="text-xs text-gray-600 mb-2 leading-snug">{p.nameArabic}</p>}
        {onSale && <div className="text-[12px] text-gray-500 line-through mb-1">{displayOriginal}</div>}
        <div className="text-[13px] font-semibold text-gray-900">{displayCurrent}</div>
      </div>
    </div>
  );
}
