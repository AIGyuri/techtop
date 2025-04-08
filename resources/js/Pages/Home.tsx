import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <GuestLayout>
      <Head title="Homepage" />
      <div className="bg-blue-50 min-h-screen">

        {/* Fő szakasz - nagyobb kék háttér */}
        <section className="text-center py-24 bg-gradient-to-r from-blue-400 to-blue-400 text-white rounded-b-3xl shadow-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-shadow-md">
            Üdvözlünk a Webshopunkban!
          </h1>
          <p className="text-lg sm:text-xl mb-12 max-w-4xl mx-auto font-medium">
            Fedezd fel a legújabb laptopjainkat, kedvező áron és fantasztikus akciókkal! Ha a legjobb ajánlatokra vágysz, jó helyen jársz.
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-lg shadow-2xl text-base md:text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Nézd meg a teljes választékot
          </Link>
        </section>

        {/* Kép beszúrása a szövegek közé */}
        <section className="text-center py-16">
          <img
            src="/img/kezdokep.png"
            alt="Laptop Akció"
            className="w-full sm:w-3/4 md:w-1/2 h-auto object-contain rounded-lg shadow-2xl mx-auto mb-5 border-2 border-blue-500"
          />
        </section>

        {/* Véleménykérő szakasz a "Miért válassz minket?" szakasz helyett */}
        <section className="py-16 text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-300 to-blue-200 rounded-t-3xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Mondd el a véleményed!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
            Webshopunk folyamatos fejlődése érdekében szeretnénk hallani a véleményedet. Ha bármilyen észrevételed, kérdésed vagy javaslatod van, ne habozz megosztani velünk! Mi mindig nyitottak vagyunk a visszajelzésekre, és igyekszünk mindent megtenni, hogy még jobb vásárlói élményt nyújtsunk.
          </p>
          <button
            onClick={openModal}
            className="text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg shadow-2xl text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Írj nekünk!
          </button>

          {/* Modális ablak */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Véleményed számít!</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Ha bármilyen észrevételed vagy javaslatod van, ne habozz megosztani velünk! Írj nekünk, és segíthetsz webshopunk fejlesztésében.
                </p>
                <Link
                  href="/contact"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg shadow-2xl text-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Írj nekünk!
                </Link>
              </div>
            </div>
          )}
        </section>

      </div>
    </GuestLayout>
  );
};
