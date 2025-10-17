import ROUTES from "@/app/config/routes";
import { useRouter, usePathname } from "next/navigation";

export function useNavigate() {
  const router = useRouter();

  const toHome = () => {
    router.push(ROUTES.DASHBOARD.HOME);
  };

  const toLogin = () => {
    router.push(ROUTES.AUTH.LOGIN);
  };

  return { toHome, toLogin };
}
