'use client';

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 w-full bg-gray-200 z-10">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Logo */}
          <Image src="/images/Vector1.png" alt="Logo" width={50} height={50} />

          {/* Links and Sidebar Redirect */}
          <div className="hidden sm:flex gap-6 text-xs text-gray-700">
            {/* Redirect to Sidebar Page */}
            <Link href="/sidebar">Find a Store</Link>
            <Link href="/help">Help</Link>
            <Link href="/join-us">Join Us</Link>
            <Link href="/signin">Sign In</Link>
          </div>

          {/* Mobile Hamburger Menu (Visible only on small screens) */}
          <div className="sm:hidden">
            <button className="text-gray-700">
              {/* Add a hamburger icon here if needed */}
              <span className="text-2xl">&#9776;</span> {/* Simple hamburger icon */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
