import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

const CartLink = () => {
  // Lekérjük a kosár adatait a localStorage-ból
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  // Összeadjuk a kosárban lévő termékek mennyiségét
  const cartCount = cart.reduce((total: number, product: { quantity: number }) => total + product.quantity, 0);

  return (
    <div className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2.5 rounded-full bg-red-500 text-white text-[0.75rem] w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartLink;
