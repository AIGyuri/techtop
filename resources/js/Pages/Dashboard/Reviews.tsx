import Authenticated from "@/Layouts/AuthenticatedLayout"

type Review = {
    id: number,
    name: string,
    email: string,
    message: string,
    created_at: string,
}

export default function Reviews({
    reviews,
}: {
    reviews: Review[],
}) {

    return (
        <Authenticated>
            <div className="mt-8 max-w-6xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">All Reviews</h3>
                {reviews.length === 0 ? (
                    <p className="text-center text-gray-500">No reviews yet.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-50">
                            <h4 className="font-semibold text-gray-800">{review.name}</h4>
                            <p className="text-sm text-gray-500">({review.email})</p>
                            <p className="mt-2 text-gray-700">{review.message}</p>
                            <p className="mt-2 text-sm text-gray-400">{review.created_at}</p>
                        </div>
                    ))
                )}
            </div>
        </Authenticated>
    )
}