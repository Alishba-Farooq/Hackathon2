import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image"; // Import Image from Next.js for the logo

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 relative mt-4">
      <div className="mx-auto w-full max-w-screen-xl pt-2 px-4 sm:px-8 lg:px-16">
        {/* Grid for Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-6 lg:py-8">
          {/* Store Section */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              FIND A STORE
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">BECOME A MEMBER</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">SIGN UP FOR EMAIL</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Send Us Feedback</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">STUDENT DISCOUNTS</a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              GET HELP
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">Order Status</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Returns</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Payment Options</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-sm font-semibold text-gray-400 uppercase dark:text-white">
              ABOUT NIKE
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline">News</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">Investors</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Footer Text */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 dark:text-gray-400 border-t border-gray-700 pt-4">
          {/* Logo and Country */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image src="/images/location.png" alt="Nike Logo" width={18} height={15} />
            <span className="text-sm text-white">India</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">© 2023 Nike, Inc. All Rights Reserved.</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
