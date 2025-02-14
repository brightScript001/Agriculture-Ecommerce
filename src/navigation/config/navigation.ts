import { UserRole } from "../types";

export const NAV_LINKS: Record<UserRole, { label: string; path: string }[]> = {
  seller: [
    { label: "Home", path: "/seller/dashboard" },
    { label: "Marketplace", path: "/seller/marketplace" },
    { label: "Inventory", path: "/seller/inventory" },
  ],
  buyer: [
    { label: "Home", path: "/buyer/dashboard" },
    { label: "Cart", path: "/buyer/cart" },
  ],
};

export const DEFAULT_ROLE: UserRole = "buyer";
