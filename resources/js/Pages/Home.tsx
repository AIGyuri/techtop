import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';





export default function Home() {
  
  return (
    <GuestLayout>
      <Head title="Homepage" />
      <div className="bg-blue-50 min-h-screen">

        {/* Fő szakasz - nagyobb kék háttér */}
        <section className="text-center py-24 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-b-3xl shadow-lg">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight text-shadow-md">
            Üdvözlünk a Webshopunkban!
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
            Fedezd fel a legújabb laptopjainkat, kedvező áron és fantasztikus akciókkal! Ha a legjobb ajánlatokra vágysz, jó helyen jársz.
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-lg shadow-2xl text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Nézd meg a teljes választékot
          </Link>
        </section>

        {/* Kép beszúrása a szövegek közé */}
        <section className="text-center py-16">
          <img
            src="/img/kezdokep.png"
            alt="Laptop Akció"
            className="w-3/4 md:w-1/2 h-auto object-contain rounded-lg shadow-2xl mx-auto mb-5 border-2 border-blue-500"

          />
        </section>

        {/* Akciók bemutatása */}
        <section className="py-16 text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-200 rounded-t-3xl shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">
            Miért válassz minket?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Mi nem csak laptopokat árulunk. Mi a minőség, gyorsaság és vásárlói élmény iránti elkötelezettségünket kínáljuk. Garantáltan megtalálod a legjobb ajánlatokat és a legújabb technológiát!
          </p>
          <Link
            href="/products"
            className="text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg shadow-2xl text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Fedezd fel az akcióinkat!
          </Link>
        </section>

      </div>
      
    </GuestLayout>
  );
};