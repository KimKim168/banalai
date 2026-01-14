import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

const BanalaiNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo.png" alt="Banalai Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/support">Support</NavLink>

            <Link
              href="/banalai_login"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 hover:text-indigo-600"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-1 px-4 pt-2 pb-3">
            <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink href="/products" onClick={() => setOpen(false)}>Products</MobileLink>
            <MobileLink href="/pricing" onClick={() => setOpen(false)}>Pricing</MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink href="/support" onClick={() => setOpen(false)}>Support</MobileLink>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-indigo-600 px-3 py-2 text-center font-semibold text-white hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BanalaiNav;

/* ===================== Components ===================== */

function NavLink({ href, children }) {
  const { url } = usePage();
  const isActive = url === href;

  return (
    <Link
      href={href}
      className={`font-semibold transition ${
        isActive
          ? 'text-indigo-600'
          : 'text-gray-700 hover:text-indigo-600'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  const { url } = usePage();
  const isActive = url === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 font-medium transition ${
        isActive
          ? 'text-indigo-600'
          : 'text-gray-700 hover:text-indigo-600'
      }`}
    >
      {children}
    </Link>
  );
}
