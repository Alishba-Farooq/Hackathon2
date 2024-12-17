import React from "react";
import Image from "next/image";

const FeatureImage = () => {
  return (
    <div className="relative mt-20">
      {/* Feature Text Positioned Above the Image */}
      <div className="flex justify-start ml-6 text-lg mt-0 font-semibold mb-4">
        Don&apos;t Miss {/* Escaped apostrophe */}
      </div>

      {/* Image Section */}
      <div className="relative mx-4 sm:mx-[40px]">
        <Image
          src="/images/produc3-image.png"
          alt="Featured Product"
          width={1344} // Specify width for optimization
          height={700} // Specify height for optimization
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
