
import { Link } from '@inertiajs/react';
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
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm flex items-center justify-center">

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="h-56 w-full">
                    <img className="mx-auto h-full" src={product.image} alt={product.name} />
                </div>
                <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">

                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                            {product.name}
                        </span>
                    </div>

                    <div className="mb-4 flex items-center justify-between gap-4">

                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                            {product.description}
                        </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight text-gray-900 ">{product.price} Ft</p>
                        <Link href='#' className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                            Kosárba
                        </Link>

                    </div>
                </div>
            </div>


            {/* <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h1 className="product-name">{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price} Ft</p>
                <button className="order-button">Megrendelés</button>
            </div> */}
        </div>
        
    );
};

export default ProductListing;
