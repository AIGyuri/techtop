import { Head, useForm } from '@inertiajs/react';
import { PageProps } from '@inertiajs/core';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Brand } from '@/lib/types';

interface CreateProductPageProps extends PageProps {
    // Add any additional page props here
}

export default function CreateProduct({ brands }: { brands: Brand[]  }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        price: 0,
        image: '',
        stock_quantity: 0,
        brand_id: 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-2xl mx-auto p-6">
                <Head title="Create New Product" />
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">Új termék készítése</h1>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                                Termék neve
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 mb-2">
                                Ár (Ft)
                            </label>
                            <input
                                id="price"
                                type="number"
                                step="0.01"
                                min="0"
                                value={data.price}
                                onChange={(e) => setData('price', Number(e.target.value))}
                                className={`w-full px-3 py-2 border rounded-md ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 mb-2">
                                Leírás
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows={4}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="brand_id" className="block text-gray-700 mb-2">
                                Termék Márkája
                            </label>
                            <select
                                name="brand_id"
                                value={data.brand_id}
                                onChange={(e) => setData('brand_id', Number(e.target.value))}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Válassz egy Márkát</option>
                                {brands?.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="stock_quantity" className="block text-gray-700 mb-2">
                                Mennyiség (db)
                            </label>
                            <input
                                id="stock_quantity"
                                type="number"
                                step="1"
                                min="1"
                                value={data.stock_quantity}
                                onChange={(e) => setData('stock_quantity', Number(e.target.value))}
                                className={`w-full px-3 py-2 border rounded-md ${errors.stock_quantity ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.stock_quantity && <p className="text-red-500 text-sm mt-1">{errors.stock_quantity}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 mb-2">
                                Kép (url)
                            </label>
                            <input
                                name="image"
                                id="image"
                                type="text"
                                value={data.image}
                                onChange={(e) => setData('image', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => reset()}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Visszaállítás
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing ? 'Termék készítése...' : 'Termék készítése'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
