import React from "react";

const FeatureImage = () => {
  return (
    <div className="relative mt-20">
      {/* Feature Text Positioned Above the Image */}
      <div className="flex justify-start ml-6 text-lg mt-0 font-semibold mb-4">
        Featured
      </div>

      {/* Image Section */}
      <div className="relative mx-4 sm:mx-[40px]">
        <img
          src="/images/image3.png"
          alt="Featured Product"
          className="w-full h-[400px] sm:h-[700px] object-cover"
        />

        {/* Hover Badge or Extra Content Below Image */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          {/* Optionally, include HoverBadge or any other component here */}
        </div>
      </div>

      <div className="text-center mt-14 px-4 sm:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold">
          STEP INTO WHAT FEELS GOOD
        </h2>
        <p className="text-lg mt-4 text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>

        <div className="mt-6">
          <button className="bg-black text-white px-6 py-2 rounded-3xl mr-4">
            Find your Shoe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;
