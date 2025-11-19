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
      name: "Nephrolepis exaltata \"Green Lady\", Boston Fern or Sword Fern",
      price: "Dhs. 45.00 - Dhs. 165.00",
      image: "/1.avif",
    },
    {
      id: 2,
      name: "Peace Lily or Spathiphyllum or \"زنبق السلام\"",
      price: "Dhs. 30.00 - Dhs. 325.00",
      originalPrice: "Dhs. 60.00 - Dhs. 650.00",
      image: "/2.avif",
      badge: "Sale",
    },
    {
      id: 3,
      name: "Asplenium Nidus or Bird's Nest FernAsplenium Nidus or Bird's Nest Fern 50-60cm spread",
      price: "Dhs. 55.00 - Dhs. 90.00",
      originalPrice: "Dhs. 30.00 - Dhs. 325.00",
      image: "/3.avif",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Chamaedorea Elegans, Parlour Palm or Bamboo Palm",
      price: "Dhs. 25.00 - Dhs. 45.00",
      image: "/4.avif",
    },
    {
      id: 5,
      name: "Pachira Aquatica twisted (Money Tree) – 30cm",
      price: "Dhs. 30.00 - Dhs. 325.00",
      originalPrice: "Dhs. 40.00 - Dhs. 425.00",
      image: "/5.avif",
      badge: "Sale",
    },
    {
      id: 6,
      name: "Spider Plant or Air Plant (Chlorophytum Comosum 'Variegatum')",
      price: "Dhs. 30.00 - Dhs. 55.00",
      originalPrice: "Dhs. 60.00 - Dhs. 110.00",
      image: "/6.avif",
      badge: "Sale",
    },
    {
      id: 7,
      name: "White Orchids 50-70cm",
      price: "Dhs. 95.00 - Dhs. 145.00",
      image: "/7.avif",
    },
    {
      id: 8,
      name: "Opuntia Consolea in White Ceramic Pot 30-40cm",
      price: "85.00",
      image: "/8.avif",
    },
    {
      id: 9,
      name: "Zamioculcas Zamiifolia, Zanzibar Gem or ZZ Plant",
      price: "Dhs. 30.00 - Dhs. 275.00",
      originalPrice: "Dhs. 60.00 - Dhs. 550.00",
      image: "/9.avif",
    },
    {
      id: 10,
      name: "Andreanum or The Flamingo Flower",
      price: "Dhs. 45.00 - Dhs. 175.00",
      originalPrice: "Dhs. 90.00 - Dhs. 350.00",
      image: "/10.avif",
      badge: "Sale",
    },
  ];

  const outdoorPlants = [
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
    {
      id: 9,
      name: "Mint Plant or Mentha",
      price: "7.00",
      originalPrice: "10.00",
      image: "/19.avif",
      badge: "Sale",
    },
    {
      id: 10,
      name: "Ocimum Tenuiflorum/Tulsi plant/Holy Basil",
      price: "15.00",
      originalPrice: "40.00",
      image: "/20.avif",
      badge: "Sale",
    },
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Carving Kit/Tool/Cutting Tool",
      price: "60.00",
      originalPrice: "90.00",
      image: "/21.avif",
      badge: "Sale",
    },
    {
      id: 2,
      name: "Hand Shovel (Metallic)",
      price: "75.00",
      originalPrice: "120.00",
      image: "/22.avif",
    },
    {
      id: 3,
      name: "Natural Jute Burlap Fabric Roll 1.6m x 25m",
      price: "55.00",
      originalPrice: "85.00",
      image: "/23.avif",
    },
    {
      id: 4,
      name: "FISH N' BLOOM Fish Amino Acid (FAA) Fertilizer - Organic, Natural Soil Health Booster | 5 Liters",
      price: "35.00",
      originalPrice: "50.00",
      image: "/24.avif",
    },
    {
      id: 5,
      name: "Botanical Elegance Bundle (1xAreca 1m-1.2m)(1xFicus twisted 1m-1.2m)(1xBird of Paradis 1.2 -1.5m) in Ceramic Pot",
      price: "25.00",
      originalPrice: "40.00",
      image: "/25.avif",
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
        <ProductGrid title="Top Selling Indoor Plants" products={indoorPlants} collectionLink="/indoor" />
        <ProductGrid title="Top Selling Outdoor Plants" products={outdoorPlants} collectionLink="/outdoor" />
        <ProductGrid title="New Arrivals" products={newArrivals} />
      </main>
      <Footer />
    </div>
  );
}
