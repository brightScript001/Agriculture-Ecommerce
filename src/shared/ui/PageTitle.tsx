import { useSelector } from "react-redux";
import { useLocation, matchPath } from "react-router-dom";
import { AppState } from "store";

export const PageTitle = () => {
  const location = useLocation();
  const { pathname } = location;

  const firstName =
    useSelector((state: AppState) => state.auth.user?.firstName) || "User";

  // Define static route titles
  const routeTitles: Record<string, string> = {
    // Seller Routes
    "/seller/dashboard": `Hello ${firstName}`,
    "/seller/marketplace": "Marketplace",
    "/seller/marketplace/create-product": "Create Product",
    "/seller/inventory": "Inventory",
    "/seller/farm-records": "Farm Records",
    "/seller/farm-record-form": "Farm Record Form",
    "/seller/supplies-records": "Supplies Records",
    "/seller/supplies-record-form": "Supplies Record Form",
    "/seller/risk-emergency-records": "Risk & Emergency Records",
    "/seller/risk-emergency-record-form": "Risk & Emergency Record Form",
    "/seller/equipment-records": "Equipment Records",
    "/seller/equipment-record-form": "Equipment Record Form",
    "/seller/payment": "Payment Dashboard",
    "/seller/support": "Support",
    "/seller/live-chat": "Live Chat",
    "/seller/faq": "FAQ",
    "/seller/profile": "Seller Profile",

    // Buyer Routes
    "/buyer/dashboard": `Hello ${firstName}`,
    "/buyer/cart": "Shopping Cart",
    "/buyer/order-history": "Order History",
    "/buyer/support": "Support",
    "/buyer/live-chat": "Live Chat",
    "/buyer/faq": "FAQ",
    "/buyer/profile": "Profile Information",
  };

  if (routeTitles[pathname]) return routeTitles[pathname];

  // Handle dynamic route patterns
  if (matchPath("/seller/orders/:status", pathname)) return "Order Status";
  if (matchPath("/seller/order/:id", pathname)) return "Order Details";
  if (matchPath("/seller/order/:id/dispute", pathname)) return "Dispute Order";

  if (matchPath("/buyer/order-history/:orderId", pathname))
    return "Order Details";
  if (matchPath("/buyer/product/:id", pathname)) return "Product Details";

  return "Page";
};
