import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await axios.get("https://dummyjson.com/products");
  return new Response(JSON.stringify(products.data), {
    headers: { "Content-Type": "application/json" },
  });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
