import CartButton from '@/Components/CartButton';
import { Product } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import CartIcon from '@/Components/CartLink';
import GuestLayout from '@/Layouts/GuestLayout';
import { Button } from '@headlessui/react';
import { ArrowUp } from 'lucide-react';
import { Brand } from '@/lib/types';



export default function Products({ products, brands }: { products: Product[], brands: Brand[] }) {
  const [brandFilterState, setBrandFilterState] = useState("");
  const [filterState, setFilterState] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const filteredProducts = useMemo(() => {
    const filteredProducts = brandFilterState ? products.filter(product => product.brand.name === brandFilterState) : products;

    if (filterState === "asc") {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filterState === "desc") {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      return filteredProducts;
    }
  }, [brandFilterState, filterState])

  const checkScrollPosition = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <GuestLayout>
      <section className="bg-gray-50 py-8 antialiased relative">
        {/* vissza a tetejére gomb */}
        <Button className={`flex items-center ${isVisible ? 'block' : 'hidden'} fixed bottom-5 right-5 p-3 bg-blue-600 hover:opacity-90 rounded-lg text-white`} onClick={scrollToTop}>
          Vissza a tetejére <ArrowUp className='w-4 h-4 ml-2' />
        </Button>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Fejléc és szűrők */}
          <div className="mb-4 items-end justify-end space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div className="flex flex-col-reverse gap-3 md:gap-0 md:flex-row items-center space-x-4">
              <CartIcon />
              <select name="brandFilter" id="brandFilter" onChange={(e) => setBrandFilterState(e.target.value)}>
                <option value="">Összes</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.name}>{brand.name}</option>
                ))}
              </select>
              <select name="filter" id="filter" value={filterState} onChange={(e) => setFilterState(e.target.value)}>
                <option value="">Rendezés</option>
                <option value="asc">Ár szerint növekvő</option>
                <option value="desc">Ár szerint csökkenő</option>
              </select>
              {/* Rendezés dropdown */}
            </div>
          </div>
          {/* Termék grid */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts ? filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            )) : (
              <div>
                <span>Nem található termékek</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </GuestLayout>
  );
};


export const ProductCard = ({ product }: { product: Product }) => {
  

  return (
    <Link href={`/products/${product.id}`}>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-full flex flex-col justify-between">
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