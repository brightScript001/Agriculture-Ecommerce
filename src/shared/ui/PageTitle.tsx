import { useLocation, matchPath } from "react-router-dom";

export const PageTitle = () => {
  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case "/dashboard":
      return "Hello Prince";
    case "/marketplace":
      return "Marketplace";
    case "/marketplace/create-product":
      return "Upload Product";
    case "/orders/pending-orders":
      return "Orders";
    case "/orders/settled-orders":
      return "Orders";
    case "/farm-general-record":
      return "Farm Record";
    case "/payment":
      return "Payment";
    case "/profile":
      return "Profile";
    default:
      break;
  }

  if (matchPath("/order/:id", pathname)) {
    return "Orders";
  }

  if (matchPath("/order/:id/dispute", pathname)) {
    return "Dispute Order";
  }

  return "Page";
};
