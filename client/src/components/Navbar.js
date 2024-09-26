'use client'; // Add this line to make it a client component

import { useState } from 'react'; // Import useState for toggling
import Link from 'next/link';
import Image from 'next/image'; // Import Image for logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-2" />
          <h1 className="text-2xl font-bold">
            <Link href="/">E-Medical & Home Remedy</Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
          <li>
            <Link href="/health-tips" className="hover:underline">Health Tips</Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">Login</Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? '✕' : '☰'} {/* Show cross or hamburger icon based on menu state */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link href="/health-tips" className="hover:underline">Health Tips</Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
