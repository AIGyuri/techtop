import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';

export default function About() {
    return (
        <GuestLayout>
            <div className="bg-blue-100 min-h-screen py-8"> {/* Módosított háttérszín */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Oldal címe */}
                    <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-black mb-16 tracking-wider">
                        Bemutatkozás
                    </h1>

                    {/* Kártyák elrendezése */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {/* Petra kártyája */}
                        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105">
                            {/* Petra képe */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src="/img/profil.jpg"  // Petra képének elérési útja
                                    alt="Petra"
                                    className="w-40 h-40 object-cover rounded-full shadow-lg border-2 border-blue-700"
                                />
                            </div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 hover:text-blue-700 transition-all">Petra</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                Üdvözlünk a webshopunk oldalán! Petra egy fiatal és dinamikus csapattag, aki mindig a legjobb megoldásokat keresi a vásárlói élmény
                                javítására.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Petra érdeklődése a fenntartható divat iránti szenvedélyének köszönhetően különösen fontos számára a termékek minősége és az etikus beszerzés.
                                Ő egy igazán lelkes és segítőkész személy, aki mindent megtesz azért, hogy a vásárlóink a legjobb élményben részesüljenek.
                            </p>

                            {/* Elérhetőség sáv Petra kártyáján */}
                            <div className="mt-10 bg-blue-100 p-4 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-700">Elérhetőség</h3>
                                <p className="text-gray-600">Teljes név: Pántya Petra</p>
                                <p className="text-gray-600">E-mail: pantyapetra16@gmail.com</p>
                                <p className="text-gray-600">Telefonszám: +36 20 123 4567</p>
                            </div>
                        </div>

                        {/* Gyuri kártyája */}
                        <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105">
                            {/* Gyuri képe */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src="/path/to/gyuri.jpg"  // Gyuri képének elérési útja
                                    alt="Gyuri"
                                    className="w-40 h-40 object-cover rounded-full shadow-lg border-2 border-blue-700"
                                />
                            </div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 hover:text-blue-700 transition-all">Gyuri</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                Üdvözlünk a webshopunk oldalán! Gyuri a csapatunk tapasztalt tagja, aki mindig figyel arra, hogy minden egyes vásárlói igényt kielégítsünk. 
                                Ő az, aki segít a termékek minőségi ellenőrzésében és a vásárlói kérdések megválaszolásában.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Gyuri több éves tapasztalattal rendelkezik a webshop menedzsment és ügyfélszolgálat terén. Ő az, aki a legbonyolultabb problémákra is megoldást talál, miközben mindig a legjobb vásárlói élményt biztosítja.
                            </p>

                            {/* Elérhetőség sáv Gyuri kártyáján */}
                            <div className="mt-10 bg-blue-100 p-4 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-700">Elérhetőség</h3>
                                <p className="text-gray-600">Teljes név: Szabó György</p>
                                <p className="text-gray-600">E-mail: gyuri@example.com</p>
                                <p className="text-gray-600">Telefonszám: +36 30 987 6543</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </GuestLayout>
    );
}
