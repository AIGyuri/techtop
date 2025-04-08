import { useState } from "react";
import Guest from "@/Layouts/GuestLayout";
import { useForm, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import FlashMessage from "@/Components/FlashMessage";

interface ContactPageProps extends PageProps {
    flash: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
}

export default function Contact() {
    const { flash } = usePage<ContactPageProps>().props;
    const [showFlash, setShowFlash] = useState(true);

    const { post, processing, errors, data, setData } = useForm({
        name: "",
        email: "",
        message: "",
    })

    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('reviews.store'), {
            onSuccess: () => {
                setData({
                    name: "",
                    email: "",
                    message: "", 
                })
            }
        });
    };

    return (
        <Guest>
            <div className="flex py-24 flex-col items-center bg-gray-50 sm:justify-center sm:pt-0 relative">

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

                <div className="mt-16 w-full overflow-hidden bg-white px-6 py-8 shadow-md sm:max-w-md sm:rounded-lg">
                    <h2 className="text-center text-5xl font-bold text-blue-500 mb-4">Kapcsolat</h2>

                    {/* Elérhetőségek */}
                    <div className="mt-8 text-center">
                        <h3 className="text-lg font-semibold text-gray-700">Elérhetőségek</h3>
                        <p className="mt-2 text-sm text-gray-500">Telefon: +36 30 123 4567</p>
                        <p className="mt-2 text-sm text-gray-500">Email: <a href="mailto:info@techtop.hu" className="text-blue-600">info@techtop.hu</a></p>
                        <p className="mt-2 text-sm text-gray-500">Cím: 1234 Budapest, TechTop utca 1.</p>
                    </div>

                    {/* Véleményező mező */}
                    <div className="mt-8">
                        <h3 className="text-3xl font-semibold text-blue-500 text-center mb-4">Véleményed megosztása</h3>
                        <form onSubmit={handleReviewSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Név
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={data.name}
                                    required
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    placeholder="Írd be a neved"
                                />
                                {errors.name && <div className="text-red-500 text-sm">Hibás nevet adott meg</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    required
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    placeholder="Írd be az email címed"
                                />
                                {errors.email && <div className="text-red-500 text-sm">Hibás email címet adott meg</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                                    Vélemény
                                </label>
                                <textarea
                                    id="review"
                                    name="review"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    placeholder="Írd meg véleményed"
                                    rows={4}
                                />
                                {errors.message && <div className="text-red-500 text-sm">Hibás üzenetet adott meg</div>}
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md"
                                    disabled={processing}
                                >
                                    {processing ? "Feldolgozás..." : "Vélemény elküldése"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
