import React from "react";

const FeatureCards = () => {
  return (
    <div className="relative mt-20 px-4 sm:px-8">
      {/* Feature Section Title */}
      <div className="text-lg font-semibold mb-8">The Essentials</div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative">
          <img
            src="/images/product4-image1.png"
            alt="Flight Essentials"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-md"
          />
          <div className="absolute bottom-4 left-4 bg-white text-black text-sm font-bold px-3 py-1 rounded-2xl">
            Men's
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <img
            src="/images/product4-image2.png"
            alt="Air Max Legacy"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-md"
          />
          <div className="absolute bottom-4 left-4 bg-white text-black text-sm font-bold px-3 py-1 rounded-2xl">
            Women's
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <img
            src="/images/product4-image3.png"
            alt="Jordan Collection"
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-md"
          />
          <div className="absolute bottom-4 left-4 bg-white text-black text-sm font-bold px-3 py-1 rounded-2xl">
            Kids'
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
