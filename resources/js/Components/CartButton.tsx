import { useCart } from "@/hooks/useCart";
import { addProductToLocalStorage, ProductCart } from "@/lib/utils";

export default function CartButton({ product }: { product: ProductCart }) {

    const { cartItems, setCartItems } = useCart()

    const handleAddCartItems = (product: ProductCart) => {
      const isAlreadyInCart = cartItems.find((item) => item.id === product.id)
      if (isAlreadyInCart) {
        const incrementedQuantity = product.quantity += 1
        const incrementedProduct = { ...product, quantity: incrementedQuantity }
        setCartItems((prev) => [ ...prev, incrementedProduct ])
      }

      setCartItems(prev => [ ...prev, product ])
    }

    let huf = new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'huf',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    })

    return (
        <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 ">{huf.format(product.price)}</p>
            <button onClick={(e) => { 
              e.preventDefault();
              handleAddCartItems(product)
              addProductToLocalStorage({ ...product, quantity: 1 });
            }} className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
              Kosárba
            </button>
      
        </div>
    )
}