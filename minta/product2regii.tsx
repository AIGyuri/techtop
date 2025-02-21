import { useState } from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  reviews: number;
  imageLight: string;
  badge?: string;
  features: string[];
}

const ProductCard = ({
  title,
  price,
  rating,
  reviews,
  imageLight,
  badge,
  features
}: ProductCardProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className="h-4 w-4 text-yellow-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
      </svg>
    ));
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full">
        <a href="#">
          <img className="mx-auto h-full" src={imageLight} alt={title} />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          {badge && (
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
              {badge}
            </span>
          )}
          <div className="flex items-center justify-end gap-1">
            {/* Quick look és favorite gombok */}
          </div>
        </div>
        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline ">
          {title}
        </a>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">{renderStars()}</div>
          <p className="text-sm font-medium text-gray-900">{rating}</p>
          <p className="text-sm font-medium text-gray-500">({reviews})</p>
        </div>
        <ul className="mt-2 flex items-center gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                {/* Ide jönnek a feature ikonok */}
              </svg>
              <p className="text-sm font-medium text-gray-500 ">{feature}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 ">{price}</p>
          <button className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductListing = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const products = [
    {
      title: "Apple iMac 27\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
	 {
      title: "Apple iMac 28\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
	 {
      title: "Apple iMac 29\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
	 {
      title: "Apple iMac 30\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
	 {
      title: "Apple iMac 31\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
	 {
      title: "Apple iMac 32\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
	 {
      title: "Apple iMac 33\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },    {
      title: "Apple iMac 34\", 1TB HDD, Retina 5K Display, M3 Max",
      price: "$1,699",
      rating: 5.0,
      reviews: 455,
      imageLight: "/src/components/pic/asus.png",
      badge: "Up to 35% off",
      features: ["Fast Delivery", "Best Price"]
    },
    // További termékek...
  ];

  return (
    <section className="bg-gray-50 py-8 antialiased ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Fejléc és szűrők */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              {/* Kenyér morzsa navigáció */}
            </nav>
            <h2 className="mt-3 text-xl font-semibold text-gray-900">Electronics</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsFilterModalOpen(true)}
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 sm:w-auto"
            >
              Filters
            </button>
            {/* Rendezés dropdown */}
          </div>
        </div>

        {/* Termék grid */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* További termékek gomb */}
        <div className="w-full text-center">
          <button className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700">
            Show more
          </button>
        </div>
      </div>

      {/* Szűrő modal */}
      {isFilterModalOpen && (
        <div className="fixed left-0 right-0 top-0 z-50 h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full">
          <div className="relative h-full w-full max-w-xl md:h-auto">
            {/* Modal tartalom */}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductListing;