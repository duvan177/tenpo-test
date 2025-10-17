import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

export const CardProduct: React.FC<{
  item: Product;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}> = ({ item, style, ref }) => (
  <div className="p-3 md:p-8" style={style} ref={ref}>
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-3 md:p-6 gap-3">
        <div className="flex items-start gap-3 md:gap-4 flex-1">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={150}
            height={150}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md object-cover flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2 mb-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-sm text-gray-600 line-clamp-2 mb-2">
              {item.description}
            </p>

            <span className="inline-block md:hidden px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] rounded-full">
              {item.category}
            </span>
          </div>

          <span className="hidden md:inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap flex-shrink-0">
            {item.category}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:mt-2">
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-semibold rounded-full">
            ${item.price}
          </span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-[10px] sm:text-xs rounded-full">
            ⭐ {item.rating}
          </span>
          <span className="px-2 py-1 bg-red-100 text-red-800 text-[10px] sm:text-xs rounded-full">
            📦 {item.stock}
          </span>
        </div>
      </div>
    </div>
  </div>
);
