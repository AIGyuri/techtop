// import { loadStripe } from "@stripe/stripe-js";
// import { useState } from "react";

// const stripePromise = loadStripe("pk_test_51R71pl11VZnpR1QREv5FYPSxtiMU8fLVE8YRJpSmk6j5C2L8Ekkr4xuUCzIYVpquPlW2hdLCveF5xbBg0yMOmUwL00cHFg0AxT"); // A saját publikus kulcsodat használd

// interface CheckoutButtonProps{
// 	totalprice: number; // Az árat, amit a kosárban találunk
// }

// export default function CheckoutButton({ totalprice}: CheckoutButtonProps) {
//   const [loading, setLoading] = useState(false);

//   const handleCheckout = async () => {
//     setLoading(true);
//     const response = await fetch("/api/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ totalprice }), // Küldjük az árat
//     });
//     const { id } = await response.json();
//     const stripe = await stripePromise;

// 	 if (!stripe) {
// 			throw new Error("Stripe betöltése sikertelen")

// 	 }


//    //  setCartItems([]); // Ürítsük ki a kosarat
//    //  localStorage.removeItem('cart'); // Töröljük a localStorage-ból a kosarat
//    //  await stripe.redirectToCheckout({ sessionId: id });
//    //  setLoading(false);

// 	await stripe.redirectToCheckout({ sessionId: data.id });
//   };

//   return (
//     <button onClick={handleCheckout} disabled={loading} style={{ backgroundColor: '#2a9d8f', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
//       {loading ? "Loading..." : `Fizetés ${totalprice} Ft`}
//     </button>
//   );
// }

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe("pk_test_51R50faECUGcDqIDT1E3Z7gerz8mJffssTFpp8H7GO5Mt2Ak6AUTx8d14AOWy0uhsrVJBqOi5fOYVqd58TcabnD01008SiD3UAz");

interface CheckoutButtonProps{
	totalprice: number; // Az árat, amit a kosárban találunk
}

export default function CheckoutButton({ totalprice}: CheckoutButtonProps) {
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

  return (
    <button onClick={handleCheckout} disabled={loading} style={{ backgroundColor: '#2a9d8f', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
		{loading ? "Betöltés..." : `Fizetés ${totalprice} Ft`}
	 </button>
  );
}
