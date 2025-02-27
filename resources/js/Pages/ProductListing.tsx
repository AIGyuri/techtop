//import { useState } from 'react';
import NavLink from '@/Components/NavLink';
import { Description } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

interface ProductCardProps {
  product:
  {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    stock_quantity: number;
    category_id: number;
    created_at: Date;
  }
}



const ProductCard = ({
  product: {
    id,
    name,
    description,
    price,
    image,
    stock_quantity,
    category_id,
    created_at
  }

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
        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
      </svg>
    ));
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="h-56 w-full">
        <a href="#">
          <img className="mx-auto h-full" src={image} alt={name} />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">

          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
            {name}
          </span>


          {/* Ez itt a csillag */}
          <div className="flex items-center justify-end gap-1">
            {/* Quick look és favorite gombok */}
          </div>
        </div>
        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline ">
          {name}
        </a>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">{renderStars()}</div>
        </div>
        {/* Ez itt a csillag */}


        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 ">{price} Ft</p>
          <Link href={`/products/${id}`} className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
            Bővebben
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ProductListing() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


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
            <ProductCard key={index} product={product} />
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

// export default ProductListing;