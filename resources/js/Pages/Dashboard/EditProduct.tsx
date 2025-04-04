import FlashMessage from '@/Components/FlashMessage';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Product } from '@/lib/utils';
import { PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface DashboardPageProps extends PageProps {
    flash: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function ProductShow({ product }: { product: Product }) {
    const { flash } = usePage<DashboardPageProps>().props;
    const [showFlash, setShowFlash] = useState(true);

    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        price: product.price,
        description: product.description || ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(route('products.update', product.id));
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto p-6 relative">
                <Head title={product.name} />
            
                {showFlash && (
                    <>
                        {flash.success && (
                            <FlashMessage 
                                type="success" 
                                message={flash.success} 
                                onDismiss={() => setShowFlash(false)} 
                            />
                        )}
                        
                        {flash.error && (
                            <FlashMessage 
                                type="error" 
                                message={flash.error} 
                                onDismiss={() => setShowFlash(false)} 
                            />
                        )}
                    </>
                )}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mb-1">Ár: {product.price.toFixed(2)} Ft</p>
                    {product.description && (
                        <p className="text-gray-700">{product.description}</p>
                    )}
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Update Product</h2>
            
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">
                                Név
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="price">
                                Ár
                            </label>
                            <input
                                id="price"
                                type="number"
                                step="0.01"
                                value={data.price}
                                onChange={(e) => setData('price', parseFloat(e.target.value))}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="description">
                                Leírás
                            </label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                                rows={4}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
                        >
                            {processing ? "Termék frissítése..." : 'Termék frissítése'}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
