export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    stock_quantity: number;
    brand_id: number;
    created_at: Date;
}

export interface ProductCart extends Product {
    quantity: number;
}

export function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart') || '[]') as ProductCart[];
}

export function addProductToLocalStorage(product: ProductCart) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: ProductCart) => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateProductLocalStorage(products: ProductCart[]) {
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(products));
}

export function removeProductFromLocalStorage(id: number) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.filter((item: ProductCart) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}