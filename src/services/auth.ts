
const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
  },
  PRODUCTS: {
    LIST: "/api/products",
    DETAIL: (id: string) => `/api/products/${id}`,
  },
} as const;

export default API_ENDPOINTS;
