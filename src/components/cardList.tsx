import { Product } from "@/types/product";
import React from "react";
import { CardProduct } from "./cardProduct";

interface CardListProps {
  items: Product[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1  gap-6 md:w-1xl mx-auto sm:w-1xl ">
      {items?.map((item) => (
        <CardProduct key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
