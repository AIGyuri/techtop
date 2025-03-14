import { getCartFromLocalStorage, ProductCart } from "@/lib/utils";
import { useEffect, useState } from "react";

export const useCart = () => {
    const [cartItems, setCartItems] = useState<ProductCart[]>(() => {
        return getCartFromLocalStorage()
    })
    const [cartItemCount, setCartItemCount] = useState<number>(0)

    useEffect(() => {
        const quantityOfProductsInCart = cartItems.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
      
        setCartItemCount(quantityOfProductsInCart);
    }, [cartItems])

    return { cartItems, setCartItems, cartItemCount }
}