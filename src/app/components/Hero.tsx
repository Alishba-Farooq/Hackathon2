import React from "react";
import HoverBadge from "./HoverBadge"; // Ensure the correct import path

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="text-center pt-20 pb-8 px-4 sm:px-6 lg:px-16">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">Hello Nike App</h1>
        <p className="text-base sm:text-lg lg:text-xl mt-4">
          Download the app to access everything Nike. Get Your Great.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative px-4 sm:px-8 lg:px-16">
        <img
          src="/images/image1.png"
          alt="Nike Air Max"
          className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover"
        />

        {/* HoverBadge Below Image */}
        <div className="absolute top-[60%] sm:top-[70%] left-1/2 transform -translate-x-1/2">
          <HoverBadge />
        </div>
      </div>

      {/* Product Info Section - Below Image */}
      <div className="text-center mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Nike Air Max Pulse</h2>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed
          to push you past your limits and help you go to the max.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-3xl">
            Notify me
          </button>
          <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-3xl">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
