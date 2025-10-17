import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import API_ENDPOINTS from "@/services/auth";
import { UseApiResult } from "@/types/axios";
import { LoginParams } from "@/types/auth";

type UseAuth<T> = UseApiResult<T> & {
  login: (params: LoginParams) => Promise<{
    data: T | null;
    error: string | null;
    status: number | null;
  }>;
};

export const useAuth = <T = unknown>(): UseAuth<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const login = async ({ email, password }: LoginParams) => {
    try {
      setLoading(true);
      setError(null);
      const response: AxiosResponse<T> = await axios.post(
        API_ENDPOINTS.AUTH.LOGIN,
        {
          email,
          password,
        }
      );
      setData(response.data);
      return { data: response.data, error: null, status: response.status };
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message || "An error occurred");
      return {
        data: null,
        error: axiosError.message || "An error occurred",
        status: axiosError.response?.status || null,
      };
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    "//TODO Debo agregar aqui una validacion para que el usuario no pueda hacer login si ya esta autenticado";
  }, []);

  return { data, loading, error, login };
};
