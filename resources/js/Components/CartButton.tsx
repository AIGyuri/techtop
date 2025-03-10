import { addProductToLocalStorage, ProductCart } from "@/lib/utils";

export default function CartButton({ product }: { product: ProductCart }) {

    return (
        <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 ">{product.price} Ft</p>
            <button onClick={(e) => { 
              e.preventDefault(); 
              addProductToLocalStorage({ ...product, quantity: 1 });
            }} className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              Kosárba
            </button>
      
        </div>
    )
}