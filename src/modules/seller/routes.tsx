import { RouteObject, Navigate } from "react-router-dom";
import { SellerDashboard } from "@seller/pages/SellerDashboard";
import { Order } from "@seller/pages/Order";
import { MarketPlace } from "@seller/pages/MarketPlace";
import { CreateProductWrapper } from "@seller/pages/CreateProduct";
import { Dispute } from "@seller/pages/Dispute";
import { OrderDetails } from "@seller/pages/OrderDetails";
import { FarmRecordListPage } from "@seller/pages/FarmRecordPage";
import { RecordFormPage } from "@seller/pages/FarmRecordFormPage";
import { SuppliesRecordListPage } from "@seller/pages/SuppliesRecordPage";
import { SuppliesRecordFormPage } from "@seller/pages/SuppliesRecordFormPage";
import { RiskEmergencyRecordPage } from "@seller/pages/RiskEmergencyRecordPage";
import { RiskEmergencyRecordFormPage } from "@seller/pages/RiskEmergencyRecordFormPage";
import { EquipmentRecordFormPage } from "@seller/pages/EquipmentRecordFormPage";
import { EquipmentRecordPage } from "@seller/pages/EquipmentRecordPage";
import { InventoryDashboard } from "@seller/pages/Inventory";
import { PaymentDashboard } from "@seller/pages/Payment";
import { Profile } from "@seller/pages/Profile";
import { Support } from "@shared/pages/Support";
import { LiveChat } from "@shared/pages/LiveChat";
import { FAQ } from "@shared/pages/FAQ";

export const createSellerRoutes = (): RouteObject[] => [
  {
    path: "seller",
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <SellerDashboard /> },
      { path: "marketplace", element: <MarketPlace /> },
      { path: "marketplace/create-product", element: <CreateProductWrapper /> },
      { path: "orders/:status", element: <Order /> },
      { path: "order/:id", element: <OrderDetails /> },
      { path: "order/:id/dispute", element: <Dispute /> },
      { path: "inventory", element: <InventoryDashboard /> },
      { path: "farm-records", element: <FarmRecordListPage /> },
      { path: "farm-record-form", element: <RecordFormPage /> },
      { path: "supplies-records", element: <SuppliesRecordListPage /> },
      { path: "supplies-record-form", element: <SuppliesRecordFormPage /> },
      { path: "risk-emergency-records", element: <RiskEmergencyRecordPage /> },
      {
        path: "risk-emergency-record-form",
        element: <RiskEmergencyRecordFormPage />,
      },
      { path: "equipment-records", element: <EquipmentRecordPage /> },
      { path: "equipment-record-form", element: <EquipmentRecordFormPage /> },
      { path: "payment", element: <PaymentDashboard /> },
      { path: "support", element: <Support /> },
      { path: "live-chat", element: <LiveChat /> },
      { path: "faq", element: <FAQ /> },
      { path: "profile", element: <Profile /> },
    ],
  },
];
