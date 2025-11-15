import Header from "@/components/Header";
import HeroGrid from "@/components/HeroGrid";
import PromoBanners from "@/components/PromoBanners";
import TopCategories from "@/components/TopCategories";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  // Dummy Unsplash images for all product sets
  const indoorPlants = [
    {
      id: 1,
      name: "Nephrolepis exaltata 'Green Lady' - Boston Fern or Sword Fern",
      price: 45.0,
      originalPrice: 165.0,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Peace Lily or Spathiphyllum",
      price: 50.0,
      originalPrice: 135.0,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 3,
      name: "Asplenium Nidus or Bird's Nest Fern",
      price: 55.0,
      originalPrice: 90.0,
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Chamaedorea Elegans, Parlour Palm",
      price: 25.0,
      originalPrice: 50.0,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Pachira Aquatica (Money Tree)",
      price: 65.0,
      originalPrice: 80.0,
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 6,
      name: "Spider Plant (Chlorophytum Comosum)",
      price: 30.0,
      originalPrice: 55.0,
      image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 7,
      name: "White Orchids",
      price: 95.0,
      originalPrice: 145.0,
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Opuntia Cactus in White Ceramic Pot",
      price: 85.0,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Zamioculcas Zamiifolia (ZZ Plant)",
      price: 30.0,
      originalPrice: 275.0,
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Anthurium (Flamingo Flower)",
      price: 45.0,
      originalPrice: 175.0,
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
  ];

  const outdoorPlants = [
    {
      id: 1,
      name: "Bougainvillea Specimen - Single Head",
      price: 20.0,
      originalPrice: 3800.0,
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Opuntia Consoles | Rose Kill Cactus",
      price: 65.0,
      originalPrice: 150.0,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 3,
      name: "Areca Palm 1.2-1.5m in Fiber Glass Pot",
      price: 550.0,
      originalPrice: 575.0,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Portulaca Grandiflora | Rose Moss",
      price: 9.0,
      originalPrice: 38.0,
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Bougainvillea Spectabilis Dark Pink",
      price: 14.0,
      originalPrice: 225.0,
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Banana Tree Musa Paradisiaca",
      price: 50.0,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Vinca Flowers",
      price: 8.5,
      originalPrice: 34.0,
      image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Arabian Jasmine Jasminum Sambac",
      price: 20.0,
      originalPrice: 45.0,
      image: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 9,
      name: "Mint Plant Mentha",
      price: 7.0,
      originalPrice: 10.0,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 10,
      name: "Holy Basil Ocimum Tenuiflorum",
      price: 15.0,
      originalPrice: 40.0,
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Calathea Orbifolia",
      price: 60.0,
      originalPrice: 90.0,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig (Small)",
      price: 75.0,
      originalPrice: 120.0,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Monstera Deliciosa Juvenile",
      price: 55.0,
      originalPrice: 85.0,
      image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Hoya Kerrii Heart Leaf",
      price: 35.0,
      originalPrice: 50.0,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Mini Succulent Assortment",
      price: 25.0,
      originalPrice: 40.0,
      image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
      badge: "Sale",
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      <Header />
      <main className="w-full">
        <HeroGrid />
        <PromoBanners />
        <TopCategories />
        <ProductGrid title="Top Selling Indoor Plants" products={indoorPlants} />
        <ProductGrid title="Top Selling Outdoor Plants" products={outdoorPlants} />
        <ProductGrid title="New Arrivals" products={newArrivals} />
      </main>
      <Footer />
    </div>
  );
}
