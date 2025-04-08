
import CartButton from '@/Components/CartButton';
import { Product } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import CartIcon from '@/Components/CartLink';


const ProductListing = ({ product }: { product: Product }) => {

    return (

        <main className='w-full'>
            <nav className='flex justify-evenly items-center'>
                <Link href="/">
                    <h2 className="mt-6 mb-6 text-4xl font-semibold text-gray-900 text-center">
                        Techtop
                    </h2>
                </Link>
                <div className="flex items-center space-x-4" >
                    <CartIcon />
                </div>
            </nav>
            <div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm flex items-center justify-center">
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="h-80 w-full">
                            <img className="mx-auto h-full" src={`/${product.image}`} alt={product.image} />
                        </div>
                        <div className="pt-6">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xl font-bold text-primary-800 ">
                                    {product.name}
                                </span>

                            </div>

                            <div className="mb-4 flex items-center justify-between gap-4">

                                <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-s font-medium text-primary-800">
                                    {product.description}
                                </span>
                            </div>
                            <CartButton product={{ ...product, quantity: 1 }} />
                        </div>

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
        </main>

    );
};

export default ProductListing;
