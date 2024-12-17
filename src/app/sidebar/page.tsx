import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { ScrollArea } from "@/components/ui/scroll-area"; // ShadCN ScrollArea component
import Image from "next/image"; // Next.js Image component

const images = [
  '/images/Rectangle1.png',
  '/images/Rectangle2.png',
  '/images/Rectangle3.png',
  '/images/Rectangle4.png',
  '/images/Rectangle5.png',
  '/images/Rectangle6.png',
  '/images/Rectangle7.png',
  '/images/Rectangle8.png',
  '/images/Rectangle9.png',
  '/images/Rectangle10.png',
  '/images/Rectangle11.png',
  '/images/Rectangle12.png',
  '/images/Rectangle14.png',
  '/images/Rectangle15.png',
  '/images/Rectangle16.png',
  '/images/Rectangle17.png',
  '/images/Rectangle18.png',
  '/images/Rectangle19.png',
  '/images/Rectangle20.png',
  '/images/Rectangle21.png',
  '/images/Rectangle22.png',
  '/images/Rectangle23.png',
  '/images/Rectangle24.png',
  '/images/Rectangle25.png',
  '/images/Rectangle26.png',
  '/images/Rectangle27.png',
  '/images/Rectangle28.png',
  '/images/Rectangle29.png',
  '/images/Rectangle30.png',
];

const imageDescriptions = [
  "Nike Air Force 1 Mid '07",
  "Nike Court Vision Low Next Nature",
  "Nike Air Force 1 PLT.AFORM",
  "Nike Air Max 270 React",
  "Nike Zoom Fly 3",
  "Nike React Element 87",
  "Nike Air VaporMax Plus",
  "Nike Air Zoom Pegasus 37",
  "Nike Zoom Freak 1",
  "Nike Air Max 97",
  "Nike SB Dunk Low",
  "Nike Air Max 1",
  "Nike Air Jordan 1 Retro",
  "Nike Free RN 5.0",
  "Nike Air Force 1 '07",
  "Nike Blazer Mid '77 Vintage",
  "Nike Air Presto React",
  "Nike ZoomX Vaporfly NEXT%",
  "Nike Air Max 90",
  "Nike Air Force 1 Utility",
  "Nike Free Run Flyknit",
  "Nike React Infinity Run Flyknit",
  "Nike Air Zoom Structure 23",
  "Nike Air Max 200",
  "Nike Air Max 98",
  "Nike Court Vision Low",
  "Nike SB Dunk High",
  "Nike Air Max 720",
  "Nike Air Zoom Winflo 7",
  "Nike Air Max 1"
];

export default function Sidebar() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full lg:w-64 bg-white dark:bg-gray-800 h-screen px-4 py-6 shadow-md">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">New (500)</h2>
        </div>

        <ScrollArea>
          <div className="h-[calc(100vh-10rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            {/* Categories Section */}
            <div className="mb-6">
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li><a href="#" className="hover:underline">Shoes</a></li>
                <li><a href="#" className="hover:underline">Sports Bras</a></li>
                <li><a href="#" className="hover:underline">Tops & T-Shirts</a></li>
                <li><a href="#" className="hover:underline">Hoodies & Sweatshirts</a></li>
                <li><a href="#" className="hover:underline">Jackets</a></li>
                <li><a href="#" className="hover:underline">Trousers & Tights</a></li>
                <li><a href="#" className="hover:underline">Shorts</a></li>
                <li><a href="#" className="hover:underline">Tracksuits</a></li>
                <li><a href="#" className="hover:underline">Jumpsuits & Rompers</a></li>
                <li><a href="#" className="hover:underline">Skirts & Dresses</a></li>
                <li><a href="#" className="hover:underline">Socks</a></li>
                <li><a href="#" className="hover:underline">Accessories & Equipment</a></li>
              </ul>
            </div>

            {/* Gender Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase">Gender</h3>
              <div className="mt-3 space-y-2">
                <div className="flex items-center">
                  <input id="men" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="men" className="ml-2 text-sm text-gray-600 dark:text-gray-400">Men</label>
                </div>
                <div className="flex items-center">
                  <input id="women" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="women" className="ml-2 text-sm text-gray-600 dark:text-gray-400">Women</label>
                </div>
                <div className="flex items-center">
                  <input id="unisex" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="unisex" className="ml-2 text-sm text-gray-600 dark:text-gray-400">Unisex</label>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Filter Buttons */}
        <div className="mt-6">
          <Button variant="outline" className="w-full mb-2">
            Clear Filters
          </Button>
          <Button variant="default" className="w-full">
            Apply Filters
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-full p-6">
        <h1 className="text-2xl font-bold mb-6">Gallery</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={348}
                height={348}
                className="rounded-lg shadow-md"
              />

              {/* Dynamic Text below each Image */}
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-700 font-semibold">
                  {imageDescriptions[index] || `Image ${index + 1}`}
                </p>
                {/* Additional information */}
                <p className="text-sm text-gray-500">{index + 1} product</p>
                <p className="text-gray-900 font-bold mt-1">MRP: $120</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
