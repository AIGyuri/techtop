import React, { useState } from 'react';
import { Head, Link, } from '@inertiajs/react';
import LOGO from './Logo/techtoplogo.png';
import RegisterIcon from '@/Components/registerlink';
import LoginIcon from '@/Components/LoginLink';





const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Head title="Homepage" />
      <nav className="bg-gray-200 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-72">
              <div className="shrink-0">
                <Link href="#" title="">
                  <img
                    className="block w-auto h-8"
                    src={LOGO}
                    alt="LOGO"
                  />
                </Link>
              </div>

              <ul className="hidden lg:flex items-center justify-center gap-10 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link
                    href="#"
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    Home
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="/products"
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    Products
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="#"
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    Box3
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    Box4
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2 relative">
              <div className="relative">
                <Link
                  href="/register"
                  id="handleRegisterRedirect"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                >
                  <RegisterIcon/>
                  Register
                </Link>
              </div>

              <div className="relative">
                <Link
                  href="/login"
                  id="userDropdownButton1"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
                >
                  <LoginIcon/>  
                  Login
                </Link>
              </div>
              <button
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded="false"
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

          {mobileMenuOpen && (
            <div
              id="ecommerce-navbar-menu-1"
              className="bg-gray-200 border-gray-200 rounded-lg py-3 px-4 mt-4"
            >
              <ul className="text-gray-900 text-sm font-medium space-y-3">
                <li>
                  <Link href="#" className="hover:text-primary-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-700">
                  About
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary-700">
                  Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-700">
                    Box3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-700">
                    Box4
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      {/* <div>
        <Mainbanner/>
      </div> */}
    </>
  );
};

export default Navbar;
