import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

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

const products: Product[] = [
  {
    id: 1,
    name: 'Nephrolepis exaltata "Green Lady", Boston Fern or Sword Fern',
    minPrice: "45.00",
    maxPrice: "165.00",
    image: "/1.avif",
  },
  {
    id: 2,
    name: "Peace Lily or Spathiphyllum or \"زنبق السلام\"",
    originalMinPrice: "60.00",
    originalMaxPrice: "650.00",
    minPrice: "30.00",
    maxPrice: "325.00",
    image: "/2.avif",
  },
  {
    id: 3,
    name: "Asplenium Nidus or Bird's Nest Fern 50-60cm spread",
    originalMinPrice: "200.00",
    originalMaxPrice: "300.00",
    minPrice: "55.00",
    maxPrice: "90.00",
    image: "/3.avif",
  },
  {
    id: 4,
    name: "Chamaedorea Elegans, Parlour Palm or Bamboo Palm",
    minPrice: "25.00",
    maxPrice: "45.00",
    image: "/4.avif",
  },
  {
    id: 5,
    name: "Spider Plant (Chlorophytum comosum)",
    minPrice: "35.00",
    maxPrice: "55.00",
    image: "/5.avif",
  },
  {
    id: 6,
    name: "Orchid Phalaenopsis",
    originalPrice: "140.00",
    price: "90.00",
    image: "/6.avif",
  },
  {
    id: 7,
    name: 'Nephrolepis exaltata "Green Lady", Boston Fern or Sword Fern',
    minPrice: "45.00",
    maxPrice: "165.00",
    image: "/7.avif",
  },
  {
    id: 8,
    name: "Peace Lily or Spathiphyllum or \"زنبق السلام\"",
    originalMinPrice: "60.00",
    originalMaxPrice: "650.00",
    minPrice: "30.00",
    maxPrice: "325.00",
    image: "/8.avif",
  },
];

export default function IndoorPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-20 py-6 md:py-10">
        {/* Breadcrumbs */}
        <div className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Beautiful Indoor Plants</span>
        </div>

        {/* Title and intro */}
        <h1 className="text-2xl md:text-5xl font-Normal mb-3 md:mb-4">Beautiful Indoor Plants</h1>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mb-6 md:mb-8">
          Greensouq is a popular online plant store in the UAE that specializes in <em>indoor and outdoor plants</em>,
          gardening accessories, and eco-friendly décor.
        </p>

        {/* Delivery info */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">🚚 Home Delivery Across UAE</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
            <li>
              Greensouq provides <span className="font-semibold">doorstep delivery throughout Dubai and the UAE</span>,
              ensuring plants arrive fresh and healthy.
            </li>
            <li>
              Delivery times and fees may vary depending on location and order size, but the service is designed to be fast and reliable.
            </li>
          </ul>
        </section>

        {/* Content grid: filters + products */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Filters (static UI) */}
          <aside className="md:col-span-1 border border-gray-200 p-4 md:p-5 h-fit">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Filters</h3>
            <div className="mb-6">
              <div className="text-sm font-medium mb-2">Availability</div>
              <label className="flex items-center gap-2 text-sm mb-2">
                <input type="checkbox" className="h-4 w-4" /> In stock (250)
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4" /> Out of stock (28)
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
          <section className="md:col-span-4">
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
