"use client";
import { Spinner } from "@/components/ui/spinner";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

const Card: React.FC<{ item: Product }> = ({ item }) => (
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

const HomePage: React.FC = () => {
  const { data, loading, error } = useProducts();

  if (loading) {
    return <Spinner  className="mx-auto mt-20 size-10"  />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Home</h1>
          <p className="mt-2 text-gray-600">Welcome to your dashboard</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-1  gap-6 w-3xl mx-auto">
          {data?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
