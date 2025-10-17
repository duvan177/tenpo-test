const ROUTES = {
  AUTH: {
    BASE: "/auth",
    LOGIN: "/auth/login",
  },
  DASHBOARD: {
    BASE: "/dashboard",
    HOME: "/dashboard/home",
  },
} as const;

export default ROUTES;
export type Path = typeof ROUTES;
