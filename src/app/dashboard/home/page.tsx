"use client";
import CardList from "@/components/cardList";
import { Spinner } from "@/components/ui/spinner";
import { useProducts } from "@/hooks/useProducts";
import React from "react";

const HomePage: React.FC = () => {
  const { data, loading, error } = useProducts();

  if (loading) {
    return <Spinner className="mx-auto mt-20 size-10" />;
  }

  return (
    <div className="min-h-screen w-full bg-white rounded-md sm:py-8">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="md:text-3xl sm:text-4xl font-bold text-gray-900">
            Dashboard Home
          </h1>
          <p className="mt-2 text-gray-600 sm:text-lg">
            Welcome to your dashboard
          </p>
        </header>

        <CardList items={data} />
      </div>
    </div>
  );
};

export default HomePage;
