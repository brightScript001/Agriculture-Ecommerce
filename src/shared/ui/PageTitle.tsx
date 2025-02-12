import { useLocation, matchPath } from "react-router-dom";

export const PageTitle = () => {
  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case "/buyer/dashboard":
      return "Hello Prince";
    case "/buyer/cart":
      return "Cart";
    default:
      break;
  }

  if (matchPath("/order/:id", pathname)) {
    return "Orders";
  }

  if (matchPath("/order/:id/dispute", pathname)) {
    return "Dispute Order";
  }
};
