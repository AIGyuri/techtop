
import CartButton from '@/Components/CartButton';
import { Product } from '@/lib/utils';


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
                    <CartButton product={{ ...product, quantity: 1 }} />
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
