import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

export const CardProduct: React.FC<{ item: Product }> = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between m-3">
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={150}
        height={150}
        className="w-16 h-16 rounded-md object-cover mr-4"
      />
      <div className="flex-1 mr-2">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <div className="m-2 flex items-center gap-2">
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            ${item.price}
          </span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            Rating: {item.rating}
          </span>
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
            Stock: {item.stock}
          </span>
        </div>
      </div>
      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
        {item.category}
      </span>
    </div>
  </div>
);