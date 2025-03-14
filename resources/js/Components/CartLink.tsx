import { useCart } from '@/hooks/useCart';
import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

const CartLink = () => {
  const { cartItemCount } = useCart()

  return (
    <div className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2.5 rounded-full bg-red-500 text-white text-[0.75rem] w-4 h-4 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartLink;
