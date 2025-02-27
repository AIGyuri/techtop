interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    stock_quantity: number;
    category_id: number;
    created_at: string;
}

const ProductListing = ({ product }: { product: Product }) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price} Ft</p>
            <button>Megrendelés</button>
        </div>
    );
};

export default ProductListing;
