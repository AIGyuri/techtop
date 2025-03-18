import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';

export default function About() {
    return (
        <GuestLayout>
            
            
    <div className="bg-blue-400 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Oldal címe */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-16 tracking-wide">Rólunk</h1>

        {/* Kártyák elrendezése */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Petra kártyája */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105">
            {/* Petra képe */}
            <div className="flex justify-center mb-6">
              <img
                src="/img/profil.jpg"  // Petra képének elérési útja
                alt="Petra"
                className="w-40 h-40 object-cover rounded-full shadow-lg border-2 border-blue-500"
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-all">Petra</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Üdvözlünk a webshopunk oldalán! Petra egy fiatal és dinamikus csapattag, aki mindig a legjobb megoldásokat keresi a vásárlói élmény
              javítására. Ő az, aki segít megtalálni a tökéletes termékeket a vásárlóknak.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Petra érdeklődése a fenntartható divat iránti szenvedélyének köszönhetően különösen fontos számára a termékek minősége és az etikus beszerzés.
              Ő egy igazán lelkes és segítőkész személy, aki mindent megtesz azért, hogy a vásárlóink a legjobb élményben részesüljenek.
            </p>
          </div>

          {/* Gyuri kártyája */}
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105">
            {/* Gyuri képe */}
            <div className="flex justify-center mb-6">
              <img
                src="/path/to/gyuri.jpg"  // Gyuri képének elérési útja
                alt="Gyuri"
                className="w-40 h-40 object-cover rounded-full shadow-lg border-2 border-blue-500"
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-all">Gyuri</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Üdvözlünk a webshopunk oldalán! Gyuri a csapatunk tapasztalt tagja, aki mindig figyel arra, hogy minden egyes vásárlói igényt kielégítsünk. 
              Ő az, aki segít a termékek minőségi ellenőrzésében és a vásárlói kérdések megválaszolásában.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Gyuri több éves tapasztalattal rendelkezik a webshop menedzsment és ügyfélszolgálat terén. Ő az, aki a legbonyolultabb problémákra is megoldást talál, miközben mindig a legjobb vásárlói élményt biztosítja.
            </p>
          </div>
        </div>
      </div>
    </div>

        </GuestLayout>
    );
}