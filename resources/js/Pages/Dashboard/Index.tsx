import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Product } from '@/lib/utils';
import { Head, usePage } from '@inertiajs/react';
import { DashboardProductCard } from '../../Components/DashboardProductCard';
import FlashMessage from '@/Components/FlashMessage';
import { useState } from 'react';
import { PageProps } from '@/types';

interface DashboardPageProps extends PageProps {
    flash: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function Dashboard({ products }: { products: Product[] }) {
    const { flash } = usePage<DashboardPageProps>().props;
    const [showFlash, setShowFlash] = useState(true);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-gray-800 ">
                    Irányítópult
                </h2>
            }
        >
            <Head title="Dashboard" />

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

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products && products.length > 0 ? (
                                products.map((product) => (
                                    <DashboardProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <div className="col-span-full p-4">
                                    <p className="text-center text-gray-500">Nincsenek termékek.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
