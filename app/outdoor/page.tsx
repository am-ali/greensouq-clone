import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

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

const products: Product[] = [
  {
    id: 1,
    name: "Areca Palm (Dypsis lutescens)",
    minPrice: 55,
    maxPrice: 180,
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Bougainvillea Potted",
    originalMinPrice: 90,
    originalMaxPrice: 140,
    minPrice: 45,
    maxPrice: 70,
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ficus Benjamina (Weeping Fig)",
    minPrice: 75,
    maxPrice: 220,
    image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Cactus Mix",
    minPrice: 25,
    maxPrice: 65,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Hibiscus Plant",
    minPrice: 35,
    maxPrice: 55,
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Jasmine (Outdoor)",
    price: 60,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Hibiscus Plant",
    minPrice: 35,
    maxPrice: 55,
    image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Jasmine (Outdoor)",
    price: 60,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function OutdoorPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-6 lg:px-20 py-10">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Beautiful Outdoor Plants</span>
        </div>

        {/* Title and intro */}
        <h1 className="text-4xl font-semibold mb-4">Beautiful Outdoor Plants</h1>
        <p className="text-gray-700 max-w-3xl mb-8">
          Explore hardy outdoor plants perfect for UAE balconies and gardens. All plants are curated for local climate and doorstep delivery.
        </p>

        {/* Delivery info */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🚚 Home Delivery Across UAE</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Greensouq provides <span className="font-semibold">doorstep delivery throughout Dubai and the UAE</span>, ensuring plants arrive fresh and healthy.
            </li>
            <li>
              Delivery times and fees may vary depending on location and order size, but the service is designed to be fast and reliable.
            </li>
          </ul>
        </section>

        {/* Content grid: filters + products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters (static UI) */}
          <aside className="md:col-span-1 border border-gray-200 p-5 h-fit">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="mb-6">
              <div className="text-sm font-medium mb-2">Availability</div>
              <label className="flex items-center gap-2 text-sm mb-2">
                <input type="checkbox" className="h-4 w-4" /> In stock
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4" /> Out of stock
              </label>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">Price</div>
              <div className="space-y-3">
                <input placeholder="From" className="w-full border border-gray-300 px-3 py-2 text-sm" />
                <input placeholder="To" className="w-full border border-gray-300 px-3 py-2 text-sm" />
              </div>
            </div>
          </aside>

        {/* Products */}
          <section className="md:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between text-sm mb-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by</span>
                <button className="border border-gray-300 px-3 py-1">Featured</button>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span>View as</span>
                <span className="border px-2 py-1">▦</span>
                <span className="border px-2 py-1">☰</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} idx={i} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10">
              <Pagination current={1} total={12} />
            </div>
          </section>
        </div>
      </main>
      <Footer showNewsletter={false} />
    </div>
  );
}
