import { Product } from "@/lib/utils";
import { Link, useForm } from "@inertiajs/react";
import { Loader2 } from "lucide-react";

export const DashboardProductCard = ({ product }: { product: Product }) => {
    const { processing, delete: destroy } = useForm(); 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      destroy(`/products/${product.id}`)
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-full flex flex-col justify-between">
          <div className="h-56 w-full">
            <img className="mx-auto h-full" src={product.image} alt={product.name} />
          </div>
          <div className="pt-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 font-medium text-primary-800">
                {product.name}
              </span>
              {/* Ez itt a csillag */}
              <div className="flex items-center justify-end gap-1">
                {/* Quick look és favorite gombok */}
              </div>
            </div>
            <div className="flex justify-end items-center gap-4">
                <Link href={`/dashboard/product/${product.id}`}>
                  <button className="py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Megtekintés
                  </button>
                </Link>
                <form onSubmit={handleSubmit}>
                  <button type="submit" className="py-2 px-3 bg-red-600 text-white rounded-md hover:bg-red-700">
                    {
                      processing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Törlés"
                      )
                    }
                  </button>
                </form>
            </div>
          </div>
        </div>
    );
};