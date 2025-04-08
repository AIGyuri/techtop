import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import LOGO from '../Logo/techtoplogo.png';
import { LayoutDashboard, LogOutIcon, UserPlus, UserRoundIcon } from 'lucide-react';

export default function Guest({ children }: PropsWithChildren) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const { auth } = usePage().props;
    const isCookieAccepted = localStorage.getItem('cookie') === 'true';
    
    return (
        <div className="relative">
            {!isCookieAccepted && (
                <div className='fixed right-5 bottom-5 border border-gray-400 p-4 rounded-lg bg-white z-50'>
                    <h2>A weboldalunk sütiket használ a gördülékeny működéshez.</h2>
                    <div className='w-max ml-auto mt-4'>
                        <button 
                            onClick={() => { localStorage.setItem('cookie', 'true'); window.location.reload(); }}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
                            Elfogadás
                        </button>
                    </div>
                </div>
            )}

            <nav className="bg-blue-300 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left section with logo and links */}
                        <div className="flex items-center justify-between w-full lg:w-auto space-x-4 md:space-x-8">
                            <div className="shrink-0">
                                <img className="block w-auto h-8" src={LOGO} alt="LOGO" />
                            </div>

                            {/* Navigation links (hidden on mobile) */}
                            <ul className="hidden lg:flex items-center justify-center gap-10 md:gap-8 py-3 sm:justify-center">
                                <li>
                                    <Link href="/" className="text-sm font-medium text-gray-900 hover:text-primary-700">
                                        Kezdőlap
                                    </Link>
                                </li>
                                <li className="shrink-0">
                                    <Link href="/products" className="text-sm font-medium text-gray-900 hover:text-primary-700">
                                        Termékek
                                    </Link>
                                </li>
                                <li className="shrink-0">
                                    <Link href="/about" className="text-sm font-medium text-gray-900 hover:text-primary-700">
                                        Rólunk
                                    </Link>
                                </li>
                                <li className="shrink-0">
                                    <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-primary-700">
                                        Kapcsolat
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right section with auth links */}
                        <div className="flex items-center lg:space-x-2 relative">
                            <div className='hidden md:block'>
                                {!auth.user ? (
                                    <div className='flex items-center gap-2'>
                                        <div className="relative">
                                            <Link
                                                href="/register"
                                                id="handleRegisterRedirect"
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <UserPlus className='w-4 h-4 mr-2' />
                                                Register
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Link
                                                href="/login"
                                                id="userDropdownButton1"
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <UserRoundIcon className='w-4 h-4 mr-2' />
                                                Login
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    auth.user.is_admin === 1 ? (
                                        <div className="relative flex items-center gap-2">
                                            <Link
                                                href={route('dashboard')}
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <LayoutDashboard className='w-4 h-4 mr-2' />
                                                Irányítópult
                                            </Link>
                                            <Link
                                                className='inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900'
                                                href={route('logout')}
                                                method="post"
                                            >
                                                <LogOutIcon className='w-4 h-4 mr-2' />
                                                Kijelentkezés
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="relative flex items-center gap-2">
                                            <Link
                                                href={route('profile.edit')}
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <UserRoundIcon className='w-4 h-4 mr-2' />
                                                Profil
                                            </Link>
                                            <Link
                                                className='inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900'
                                                href={route('logout')}
                                                method="post"
                                            >
                                                <LogOutIcon className='w-4 h-4 mr-2' />
                                                Kijelentkezés
                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* Mobile Hamburger Button */}
                            <button
                                type="button"
                                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md p-2 text-gray-900"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                <span className="sr-only">Open Menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M5 7h14M5 12h14M5 17h14"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div
                            id="ecommerce-navbar-menu-1"
                            className="lg:hidden bg-gray-200 border-gray-200 rounded-lg py-3 px-4 mt-4"
                        >
                            <ul className="text-gray-900 text-sm font-medium space-y-3">
                                <li>
                                    <Link href="/" className="hover:text-primary-700">
                                        Kezdőlap
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-primary-700">
                                        Rólunk
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="hover:text-primary-700">
                                        Termékek
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary-700">
                                        Kapcsolat
                                    </Link>
                                </li>
                                {!auth.user ? (
                                    <div className='flex items-center gap-2'>
                                        <div className="relative">
                                            <Link
                                                href="/register"
                                                id="handleRegisterRedirect"
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <UserPlus className='w-4 h-4 mr-2' />
                                                Regisztráció
                                            </Link>
                                        </div>
                                        <div className="relative">
                                            <Link
                                                href="/login"
                                                id="userDropdownButton1"
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <UserRoundIcon className='w-4 h-4 mr-2' />
                                                Bejelentkezés
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    auth.user.is_admin === 1 ? (
                                        <div className="relative flex items-center gap-2">
                                            <Link
                                                href={route('dashboard')}
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <LayoutDashboard className='w-4 h-4 mr-2' />
                                                Irányítópult
                                            </Link>
                                            <Link
                                                className='inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900'
                                                href={route('logout')}
                                                method="post"
                                            >
                                                <LogOutIcon className='w-4 h-4 mr-2' />
                                                Kijelentkezés
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="relative flex items-center gap-2">
                                            <Link
                                                href={route('profile.edit')}
                                                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                                            >
                                                <UserRoundIcon className='w-4 h-4 mr-2' />
                                                Profil
                                            </Link>
                                            <Link
                                                className='inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900'
                                                href={route('logout')}
                                                method="post"
                                            >
                                                <LogOutIcon className='w-4 h-4 mr-2' />
                                                Kijelentkezés
                                            </Link>
                                        </div>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            <div className="">{children}</div>
        </div>
    );
}
