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
      name: "Bougainvillea Specimen \"Single Head\"",
      price: "20.00",
      originalPrice: "3800.00",
      image: "/11.avif",
    },
    {
      id: 2,
      name: "Opuntia Consolea | Road Kill Cactus",
      price: "65.00",
      originalPrice: "150.00",
      image: "/12.avif",
      badge: "Sale",
    },
    {
      id: 3,
      name: "Areca Palm 1.2-1.5m Outdoor In Fiber Glass Pot (GRP)(70x30x30)",
      price: "550.00",
      originalPrice: "575.00",
      image: "/13.avif",
    },
    {
      id: 4,
      name: "Portulaca Grandiflora | Rose Moss | 9cm pot",
      price: "9.00",
      originalPrice: "38.00",
      image: "/14.avif",
    },
    {
      id: 5,
      name: "Bougainvillea Spectabilis “30 to 160cm” Dark Pinkl",
      price: "14.00",
      originalPrice: "225.00",
      image: "/15.avif",
    },
    {
      id: 6,
      name: "Musa Paradisiaca Or Banana Tree \"80cm-90cm\" شجرة الموز",
      price: "50.00",
      image: "/16.avif",
    },
    {
      id: 7,
      name: "Vinca flowers 10 - 15cm",
      price: "8.50",
      originalPrice: "34.00",
      image: "/17.avif",
    },
    {
      id: 8,
      name: "Arabian Jasmine Motia \"Jasminum Sambac\"",
      price: "20.00",
      originalPrice: "45.00",
      image: "/18.avif",
      badge: "Sale",
    },
  ];

export default function OutdoorPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-20 py-6 md:py-10">
        {/* Breadcrumbs */}
        <div className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Outdoor Plants</span>
        </div>

        {/* Title and intro */}
        <h1 className="text-2xl md:text-5xl font-Normal mb-3 md:mb-4">Outdoor Plants</h1>
        <p className="text-sm md:text-base font-semibold text-gray-700 max-w-3xl mb-6 md:mb-8">
          Greensouq offers a wide selection of outdoor plants with online delivery across Dubai and the UAE.
        </p>

        {/* Delivery info */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">🚚 Home Delivery Across UAE</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
            <li>
              Greensouq provides <span className="font-semibold">online ordering and doorstep delivery</span> throughout Dubai and other Emirates.
            </li>
            <li>
              Our platform is designed for easy browsing and secure checkout, making it convenient for both home gardeners and landscaping professionals
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
