"use client";
import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import API_ENDPOINTS from "@/services/auth";
import { Product, ProductsResponse } from "@/types/product";


type UseProducts = {
  data: Product[];
  loading: boolean;
  error: string | null;
};
export const useProducts = (): UseProducts => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response: AxiosResponse<ProductsResponse> = await axios.get(
        API_ENDPOINTS.PRODUCTS.LIST
      );
      setData(response.data.products);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { data, loading, error };
};
