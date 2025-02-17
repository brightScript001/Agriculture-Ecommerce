import { createBrowserRouter } from "react-router-dom";
import HomePage from "@shared/components/Home";
import { ProtectedRoute } from "@core/components/ProtectedRoute";
import PageNotFound from "@shared/components/PageNotFound";
import { authRoutes } from "@modules/auth/routes";
import { AppLayout } from "../navigation/components/AppLayout";
import { createBuyerRoutes } from "@modules/buyer/routes";
import { createSellerRoutes } from "@modules/seller/routes";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <HomePage />,
  },
  ...authRoutes,

  // Protected routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [...createBuyerRoutes(), ...createSellerRoutes()],
  },

  // Global 404 fallback
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
