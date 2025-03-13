import { getCartFromLocalStorage, ProductCart } from "@/lib/utils";
import { MinusIcon } from "lucide-react";
import { useState } from "react";

export default function Cart() {
    const [cartItems, setCartItems] = useState<ProductCart[]>(getCartFromLocalStorage());

    // Kosár összesítő kiszámítása (például teljes ár)
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

    const handleCartItemQuantityChange = (id: number) => {
        
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Kosár fejléc */}
                <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">Kosár</h1>

                {/* Kosár tartalom */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {/* Termékek listája */}
                    <div className="space-y-4">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">A kosarad üres.</p>
                        ) : (
                            cartItems.map((cartItem) => (
                                <div key={cartItem.id} className="flex justify-between items-center border-b border-gray-200 py-4">
                                    {/* Termék információk */}
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={cartItem.image}
                                            alt={cartItem.name}
                                            className="h-16 w-16 object-cover rounded-md"
                                        />
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{cartItem.name}</h3>
                                            <p className="text-sm text-gray-600">Ár: {cartItem.price} Ft</p>
                                        </div>
                                    </div>
                                    {/* Mennyiség és összeg */}
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-800">Kosárba helyezett termékek darabszáma: {cartItem.quantity}</span>
                                        <span className="text-gray-800">Összesen: {(cartItem.quantity * cartItem.price)} Ft</span>
                                    </div>
                                    <button onClick={() => handleCartItemQuantityChange(cartItem.id)} className="border border-gray-500 rounded-md w-6 h-6 flex items-center justify-center">
                                        <MinusIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Kosár összesítő */}
                    {cartItems.length > 0 && (
                        <div className="mt-6 border-t pt-4 text-right">
                            <h2 className="text-xl font-semibold text-gray-900">Összesen: {totalPrice} Ft</h2>
                            <div className="mt-4 flex justify-end space-x-4">
                                <button onClick={() => {
                                    setCartItems([]);
                                    localStorage.removeItem('cart')
                                }} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                                    Kosár ürítése
                                </button>
                                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                                    Tovább a pénztárhoz
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
