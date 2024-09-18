import { useLocation } from "react-router-dom";

export const PageTitle = () => {
  const location = useLocation();

  switch (location.pathname) {
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
    default:
      return "Page";
  }
};
