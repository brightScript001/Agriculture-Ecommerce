import { NAV_LINKS, DEFAULT_ROLE } from "../config/navigation";

export const useNavigationLinks = (role: string | null) => {
  const validRole = role === "seller" || role === "buyer" ? role : DEFAULT_ROLE;
  return NAV_LINKS[validRole];
};
