import React from "react";

const CategoriesSection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-40 py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-start">
        {/* Icons */}
        <div>
          <h2 className="font-bold text-base sm:text-lg mb-4">Icons</h2>
          <p className="mb-2 text-sm sm:text-base">Air Force 1</p>
          <p className="mb-2 text-sm sm:text-base">Huarache</p>
          <p className="mb-2 text-sm sm:text-base">Air Max 90</p>
          <p className="mb-2 text-sm sm:text-base">Air Max 95</p>
        </div>

        {/* Shoes */}
        <div>
          <h2 className="font-bold text-base sm:text-lg mb-4">Shoes</h2>
          <p className="mb-2 text-sm sm:text-base">All Shoes</p>
          <p className="mb-2 text-sm sm:text-base">Custom Shoes</p>
          <p className="mb-2 text-sm sm:text-base">Jordan Shoes</p>
          <p className="mb-2 text-sm sm:text-base">Running Shoes</p>
        </div>

        {/* Clothing */}
        <div>
          <h2 className="font-bold text-base sm:text-lg mb-4">Clothing</h2>
          <p className="mb-2 text-sm sm:text-base">All Clothing</p>
          <p className="mb-2 text-sm sm:text-base">Modest Wear</p>
          <p className="mb-2 text-sm sm:text-base">Hoodies & Pullovers</p>
          <p className="mb-2 text-sm sm:text-base">Shirts & Tops</p>
        </div>

        {/* Kids */}
        <div>
          <h2 className="font-bold text-base sm:text-lg mb-4">Kids'</h2>
          <p className="mb-2 text-sm sm:text-base">Infant & Toddler Shoes</p>
          <p className="mb-2 text-sm sm:text-base">Kids' Shoes</p>
          <p className="mb-2 text-sm sm:text-base">Kids' Jordan Shoes</p>
          <p className="mb-2 text-sm sm:text-base">Kids' Basketball Shoes</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
