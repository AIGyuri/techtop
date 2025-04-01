import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe("pk_test_51R50faECUGcDqIDT1E3Z7gerz8mJffssTFpp8H7GO5Mt2Ak6AUTx8d14AOWy0uhsrVJBqOi5fOYVqd58TcabnD01008SiD3UAz");

interface CheckoutButtonProps{
	totalprice: number; // Az árat, amit a kosárban találunk
	setCartItems: (items: any[]) => void;
}

export default function CheckoutButton({ totalprice, setCartItems}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

const handleCheckout = async () =>{
	setLoading(true);

	try{
		const response = await fetch("/api/create-checkout-session", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ totalprice }), // Küldjük az árat
      });

		if (!response.ok) {
			throw new Error("Hiba a fizetési folyamatban");
      }

		const data: { id: string } = await response.json();
		const stripe = await stripePromise;
		setCartItems([]);
		localStorage.removeItem("cart");
		if (!stripe) {
         throw new Error("Stripe betöltése sikertelen");
      }


		await stripe.redirectToCheckout({ sessionId: data.id });
	} catch (error) {
		console.error("Fizetés sikertelen: ",error);
	} finally {
		setLoading(false);
	}
};

const formattedPrice = totalprice.toFixed(2).replace(/\.00$/, '');

  return (
    <button onClick={handleCheckout} disabled={loading} style={{ backgroundColor: '#2a9d8f', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
		{loading ? "Betöltés..." : `Fizetés ${formattedPrice} Ft`}
	 </button>
  );
}
