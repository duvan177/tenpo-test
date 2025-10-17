import { multiplyArray } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await axios.get(
      "https://dummyjson.com/products?limit=2000"
    );
    const multipliedProducts = multiplyArray(products.data.products, 2000);

    return new Response(
      JSON.stringify({ ...products.data, products: multipliedProducts }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products: " },
      { status: 500 }
    );
  }
}
