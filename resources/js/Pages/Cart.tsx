

import { useCart } from "@/hooks/useCart";
import { removeProductFromLocalStorage, updateProductLocalStorage } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import CheckoutButton from './../Components/CheckoutButton';

export default function Cart() {
    const { cartItems, setCartItems } = useCart();

    // Kosár összesítő kiszámítása (például teljes ár)
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

    const handleCartItemQuantityDecrement = (id: number) => {
        const decrementedCart = cartItems.map((cartItem) => {
            if (cartItem.id === id) {
                let decrementedQuantity = cartItem.quantity - 1
                return { ...cartItem, quantity: decrementedQuantity }
            }
            return cartItem
        })
        setCartItems(decrementedCart)
        updateProductLocalStorage(decrementedCart)
    }

    const handleCartItemQuantityIncrement = (id: number) => {
        const incrementedCart = cartItems.map((cartItem) => {
            if (cartItem.id === id) {
                let incrementedQuantity = cartItem.quantity + 1
                return { ...cartItem, quantity: incrementedQuantity }
            }
            return cartItem
        })
        setCartItems(incrementedCart)
        updateProductLocalStorage(incrementedCart)
    }

    const handleProductRemove = (id: number) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(updatedCartItems);
        removeProductFromLocalStorage(id);
    }

    let huf = new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'huf',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
    

    return (
        <div style={{ backgroundColor: '#f4f4f9', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ maxWidth: '1200px', margin: 'auto' }}>
                {/* Kosár fejléc */}
                <h1 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', color: '#333', marginBottom: '2rem' }}>Kosár</h1>

                {/* Kosár tartalom */}
                <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                    {/* Termékek listája */}
                    <div style={{ marginBottom: '2rem' }}>
                        {cartItems.length === 0 ? (
                            <p style={{ textAlign: 'center', color: '#aaa' }}>A kosarad üres.</p>
                        ) : (
                            cartItems.map((cartItem) => (
                                <div key={cartItem.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '1rem 0' }}>
                                    {/* Termék információk */}
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={cartItem.image}
                                            alt={cartItem.name}
                                            style={{ height: '64px', width: '64px', objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                        <div style={{ marginLeft: '1rem' }}>
                                            <h3 style={{ fontSize: '1rem', fontWeight: '500', color: '#333' }}>{cartItem.name}</h3>
                                            <p style={{ fontSize: '0.875rem', color: '#777' }}>Ár: {huf.format(cartItem.price)}</p>
                                        </div>
                                    </div>
                                    {/* Mennyiség és összeg */}
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: '#555', marginRight: '1rem' }}>Kosárba helyezett termékek darabszáma: {cartItem.quantity}</span>
                                        <span style={{ color: '#555', marginRight: '1rem' }}>Összesen: {huf.format(cartItem.quantity * cartItem.price)}</span>
                                        <button 
                                            onClick={() => handleCartItemQuantityDecrement(cartItem.id)} 
                                            style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem', backgroundColor: '#fff' }}
                                            disabled={cartItem.quantity === 1}
                                        >
                                            <MinusIcon style={{ width: '16px', height: '16px', color: '#555' }} />
                                        </button>
                                        <button 
                                            onClick={() => handleCartItemQuantityIncrement(cartItem.id)} 
                                            style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem', backgroundColor: '#fff' }}
                                        >
                                            <PlusIcon style={{ width: '16px', height: '16px', color: '#555' }} />
                                        </button>
                                        <button
                                            onClick={() => handleProductRemove(cartItem.id)}
                                            style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem', backgroundColor: '#fff' }}
                                        >
                                            <XIcon style={{ width: '16px', height: '16px', color: '#e63946' }} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Kosár összesítő */}
                    {cartItems.length > 0 && (
                        <div style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '1rem', textAlign: 'right' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>Összesen: {huf.format(Number(totalPrice))}</h2>
                            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                                <button onClick={() => {
                                    setCartItems([]);
                                    localStorage.removeItem('cart')
                                }} style={{ backgroundColor: '#e63946', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                                    Kosár ürítése
                                </button>
                                {/* <button style={{ backgroundColor: '#2a9d8f', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                                    Tovább a pénztárhoz
                                </button> */}

                               <CheckoutButton totalprice={Number(totalPrice)} setCartItems={setCartItems} />

                            </div>

                              {/* Vissza a termékekhez gomb */}
                        </div>
                    )}
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link
                            href="/products"
                            style={{ backgroundColor: '#1d3557', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}
                        >
                            Vissza a termékekhez
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
