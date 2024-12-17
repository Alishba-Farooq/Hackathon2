import React from "react";

const FeatureImage = () => {
  return (
    <div className="relative mt-20">
      {/* Feature Text Positioned Above the Image */}
      <div className="flex justify-start ml-6 text-lg mt-0 font-semibold mb-4">
        Don't Miss
      </div>

      {/* Image Section */}
      <div className="relative mx-4 sm:mx-[40px]">
        <img
          src="/images/produc3-image.png"
          alt="Featured Product"
          className="w-full sm:w-[1344px] h-[400px] sm:h-[700px] object-cover"
        />

        {/* Hover Badge or Extra Content Below Image */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          {/* Optionally, include HoverBadge or any other component here */}
        </div>
      </div>

      <div className="text-center mt-14 px-4 sm:px-0">
        <h2 className="text-4xl sm:w-[806px] font-bold mx-auto">FLIGHT ESSENTIALS</h2>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>

        <div className="mt-6">
          <button className="bg-black text-white px-6 py-2 rounded-3xl mr-4 mb-3">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;
