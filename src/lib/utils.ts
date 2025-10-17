import { Product } from "@/types/product";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function multiplyArray<T>(array: Product[], targetCount: number): Product[] {
  const result: Product[] = [];

  while (result.length < targetCount) {
    for (const item of array) {
      const newProduct: Product = {
        ...item,
        id: Number(`${item.id}${result.length + 1}`),
        sku: `${item.sku}-COPY-${result.length + 1}`,
      };
      if (result.length === targetCount) break;
      result.push(newProduct);
    }
  }

  return result.slice(0, targetCount);
}
