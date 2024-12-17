'use client'; // Mark this file as a Client Component

import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { useState } from "react"; // Import useState for managing visibility

const HoverBadge = () => {
  const [showBadge, setShowBadge] = useState(false); // State to track the visibility of the badge

  return (
    <div className="relative">
      {/* Tooltip Trigger (Only for hover) */}
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="cursor-pointer text-sm sm:text-base lg:text-lg font-bold text-black flex items-center mt-4" // Flex to align items in a row
            onClick={() => setShowBadge(true)} // Set showBadge to true when First Look is clicked
          >
            First Look

            {/* The badge will appear next to the "First Look" text on hover */}
            <div
              className={`ml-2 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-pink-600 text-white text-xs sm:text-sm lg:text-base font-bold transition-all duration-300 ${
                showBadge ? "opacity-100" : "opacity-0"
              }`} // Circular badge with pink background
            >
              B
            </div>
          </div>
        </TooltipTrigger>

        {/* Tooltip Content */}
        <TooltipContent>
          <p className="text-xs sm:text-sm lg:text-base">Hover to see Badge</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default HoverBadge;
