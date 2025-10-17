const ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
  },
  DASHBOARD: {
    HOME: "/dashboard/home",
  },
} as const;

export default ROUTES;
export type Path = typeof ROUTES;
