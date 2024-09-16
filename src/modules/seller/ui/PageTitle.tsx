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
    default:
      return "Page";
  }
};
