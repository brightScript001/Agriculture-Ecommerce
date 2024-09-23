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
    default:
      break;
  }

  if (matchPath("/order/:orderId", pathname)) {
    return "Orders";
  }

  if (matchPath("/order/:orderId/dispute", pathname)) {
    return "Dispute Order";
  }

  return "Page";
};
