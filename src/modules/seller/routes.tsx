import { RouteObject, Navigate } from "react-router-dom";
import { SellerDashboard } from "@seller/pages/SellerDashboard";
import { Order } from "@seller/pages/Order";
import { MarketPlace } from "@seller/pages/MarketPlace";
import { CreateProductWrapper } from "@seller/pages/CreateProduct";
import { Dispute } from "@seller/pages/Dispute";
import { OrderDetails } from "@seller/pages/OrderDetails";
import { InventoryDashboard } from "@seller/pages/Inventory";
import { PaymentDashboard } from "@seller/pages/Payment";
import { Profile } from "@seller/pages/Profile";

// Records Management
import { FarmRecordListPage } from "@seller/pages/FarmRecordPage";
import { RecordFormPage } from "@seller/pages/FarmRecordFormPage";
import { SuppliesRecordListPage } from "@seller/pages/SuppliesRecordPage";
import { SuppliesRecordFormPage } from "@seller/pages/SuppliesRecordFormPage";
import { RiskEmergencyRecordPage } from "@seller/pages/RiskEmergencyRecordPage";
import { RiskEmergencyRecordFormPage } from "@seller/pages/RiskEmergencyRecordFormPage";
import { EquipmentRecordPage } from "@seller/pages/EquipmentRecordPage";
import { EquipmentRecordFormPage } from "@seller/pages/EquipmentRecordFormPage";

// Shared Pages
import { Support } from "@shared/pages/Support";
import { LiveChat } from "@shared/pages/LiveChat";
import { FAQ } from "@shared/pages/FAQ";

export const createSellerRoutes = (): RouteObject[] => [
  {
    path: "seller",
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <SellerDashboard /> },

      // Marketplace Routes
      {
        path: "marketplace",
        children: [
          { index: true, element: <MarketPlace /> },
          { path: "create-product", element: <CreateProductWrapper /> },
        ],
      },

      // Orders Routes
      {
        path: "orders",
        children: [
          { index: true, element: <Navigate to="pending" replace /> }, // Default to "pending" status
          { path: ":status", element: <Order /> },
          { path: ":id", element: <OrderDetails /> },
          { path: ":id/dispute", element: <Dispute /> },
        ],
      },

      // Inventory & Records Routes
      {
        path: "inventory",
        children: [
          { index: true, element: <InventoryDashboard /> },
          { path: "farm", element: <FarmRecordListPage /> },
          { path: "farm/form", element: <RecordFormPage /> },
          { path: "supplies", element: <SuppliesRecordListPage /> },
          { path: "supplies/form", element: <SuppliesRecordFormPage /> },
          { path: "risk-emergency", element: <RiskEmergencyRecordPage /> },
          {
            path: "risk-emergency/form",
            element: <RiskEmergencyRecordFormPage />,
          },
          { path: "equipment", element: <EquipmentRecordPage /> },
          { path: "equipment/form", element: <EquipmentRecordFormPage /> },
        ],
      },

      { path: "payment", element: <PaymentDashboard /> },

      // Support & Profile Routes
      {
        path: "support",
        children: [
          { index: true, element: <Support /> },
          { path: "live-chat", element: <LiveChat /> },
          { path: "faq", element: <FAQ /> },
        ],
      },

      { path: "profile", element: <Profile /> },
    ],
  },
];
