import { UserRole } from "../types";

export const NAV_LINKS: Record<UserRole, { label: string; path: string }[]> = {
  seller: [
    { label: "Home", path: "/seller/dashboard" },
    { label: "Marketplace", path: "/seller/marketplace" },
    { label: "Inventory", path: "/seller/inventory" },
    { label: "Payment", path: "/seller/payment" },
    { label: "Support", path: "/seller/support" },
    { label: "Profile", path: "/seller/profile" },
    { label: "SignOut", path: "/login" },
  ],
  buyer: [
    { label: "Home", path: "/buyer/dashboard" },
    { label: "Cart", path: "/buyer/cart" },
    { label: "Order History", path: "/buyer/order-history" },
    { label: "Support", path: "/buyer/support" },
    { label: "Profile", path: "/buyer/profile" },
    { label: "SignOut", path: "/login" },
  ],
};

export const DEFAULT_ROLE: UserRole = "buyer";
