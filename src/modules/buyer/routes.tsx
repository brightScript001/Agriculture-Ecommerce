import { RouteObject, Navigate } from "react-router-dom";
import { BuyerDashboard } from "@buyer/pages/BuyerDashboard";
import { ProductDetail } from "@buyer/pages/ProductDetail";
import { Cart } from "@buyer/pages/Cart";
import { OrderHistory } from "@buyer/pages/OrderHistory";
import { OrderHistoryDetails } from "@buyer/pages/OrderHistoryDetail";
import { BuyerProfile } from "@buyer/pages/Profile";
import { Support } from "@shared/pages/Support";
import { LiveChat } from "@shared/pages/LiveChat";
import { FAQ } from "@shared/pages/FAQ";

export const createBuyerRoutes = (): RouteObject[] => [
  {
    path: "buyer",
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <BuyerDashboard /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },

      {
        path: "order-history",
        children: [
          { index: true, element: <OrderHistory /> },
          { path: ":orderId", element: <OrderHistoryDetails /> },
        ],
      },
      {
        path: "support",
        children: [
          { index: true, element: <Support /> },
          { path: "live-chat", element: <LiveChat /> },
          { path: "faq", element: <FAQ /> },
        ],
      },

      { path: "profile", element: <BuyerProfile /> },
    ],
  },
];
