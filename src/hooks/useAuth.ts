import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import API_ENDPOINTS from "@/services/auth";
import { UseApiResult } from "@/types/axios";
import { LoginParams } from "@/types/auth";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "./useNavigate";

type UseAuth = UseApiResult<{ user: LoginParams; token: string }> & {
  login: (params: LoginParams) => Promise<{
    data: { user: LoginParams; token: string } | null;
    error: string | null;
    status: number | null;
  }>;
  logout: () => void;
};

export const useAuth = (): UseAuth => {
  const { toLogin } = useNavigate();
  const [data, setData] = useState<{ user: LoginParams; token: string } | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser, setToken, logout } = useAuthStore();
  const login = async ({ email, password }: LoginParams) => {
    try {
      setLoading(true);
      setError(null);
      const response: AxiosResponse<{ user: LoginParams; token: string }> =
        await axios.post(API_ENDPOINTS.AUTH.LOGIN, {
          email,
          password,
        });
      setData(response.data);
      setUser(response.data.user);
      setToken(response.data.token);

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

  const logoutUser = async () => {
    try {
      await axios.post(API_ENDPOINTS.AUTH.LOGOUT);
      setData(null);
      logout();
      toLogin();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  return { data, loading, error, login, logout: logoutUser };
};
