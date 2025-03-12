import CartButton from '@/Components/CartButton';
import { Product } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import CartIcon from '@/Components/CartLink';

export default function Products({ products }: { products: Product[] }) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  return (
    <section className="bg-gray-50 py-8 antialiased ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Fejléc és szűrők */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <nav className="flex" aria-label="Breadcrumb">
              {/* Kenyér morzsa navigáció */}
            </nav>
            <h2 className="mt-3 text-4xl font-semibold text-gray-900">Techtop</h2>
          </div>
          <div className="flex items-center space-x-4">
            <CartIcon />
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


const ProductCard = ({ product }: { product: Product }) => {
  

  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="h-56 w-full">
          <img className="mx-auto h-full" src={product.image} alt={product.name} />
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 font-medium text-primary-800">
              {product.name}
            </span>
            {/* Ez itt a csillag */}
            <div className="flex items-center justify-end gap-1">
              {/* Quick look és favorite gombok */}
            </div>
          </div>
          <CartButton product={{ ...product, quantity: 1 }} />
        </div>
      </div>
    </Link>
  );
};

// export default ProductListing;