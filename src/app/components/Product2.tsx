import React from "react";

const Product2 = () => {
  return (
    <div className="mt-20">
      {/* Feature Text Positioned Above the Image */}
      <div className="flex justify-start ml-6 text-lg mt-0 font-semibold mb-4">
        Gear Up
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-between px-4 sm:px-12 gap-6">
        {/* Group 1: Card 1 and Card 2 */}
        <div className="w-full sm:w-[300px]">
          {/* Card 1 */}
          <div className="relative w-full">
            <img
              src="/images/4cards-image1.png"
              alt="Featured Product 1"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Product Name and Description */}
            <h3 className="text-xl font-semibold mt-4">Nike Dri-FIT ADV TechKnit Ultra</h3>
            <h3 className="text-xl font-semibold mt-2">₹ 3,895</h3>
            <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
          </div>
        </div>

        <div className="w-full sm:w-[300px]">
          {/* Card 2 */}
          <div className="relative w-full">
            <img
              src="/images/4cards-image2.png"
              alt="Featured Product 2"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Product Name and Description */}
            <h3 className="text-xl font-semibold mt-4">Nike Dri-FIT Challenger</h3>
            <h3 className="text-xl font-semibold mt-2">₹ 2,495</h3>
            <p className="text-sm text-gray-600">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
          </div>
        </div>

        {/* Group 2: Card 3 and Card 4 */}
        <div className="w-full sm:w-[300px]">
          {/* Card 3 */}
          <div className="relative w-full">
            <img
              src="/images/4cards-image3.png"
              alt="Featured Product 3"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Product Name and Description */}
            <h3 className="text-xl font-semibold mt-4">Nike Dri-FIT ADV Run Division</h3>
            <h3 className="text-xl font-semibold mt-2">₹ 5,295</h3>
            <p className="text-sm text-gray-600">Women's Long-Sleeve Running Top</p>
          </div>
        </div>

        <div className="w-full sm:w-[300px]">
          {/* Card 4 */}
          <div className="relative w-full">
            <img
              src="/images/4cards-image4.png"
              alt="Featured Product 4"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Product Name and Description */}
            <h3 className="text-xl font-semibold mt-4">Nike Fast</h3>
            <h3 className="text-xl font-semibold mt-2">₹ 3,795</h3>
            <p className="text-sm text-gray-600">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
