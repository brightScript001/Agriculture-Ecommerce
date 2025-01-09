import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import GlobalStyles from "./styles/globalStyles";
import PageNotFound from "./shared/components/PageNotFound";
import { AppState } from "./store";
// import DarkModeToggle from "./ui/DarkModeToggle";
import RegisterSeller from "./modules/auth/pages/SignUp";
import RegisterBuyer from "./modules/auth/pages/SignUp";
import ForgotPassword from "./modules/auth/pages/ForgotPassword";
import Login from "./modules/auth/pages/Login";
import PasswordReset from "./modules/auth/pages/PasswordReset";
import HomePage from "./shared/components/Home";

import { SellerAppLayout } from "@seller/ui/AppLayout";
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
import { ProtectedRoute } from "@core/components/ProtectedRoute";
import { BuyerAppLayout } from "@buyer/ui/AppLayout";
import BuyerDashboard from "./modules/buyer/pages/BuyerDashboard";
import { ProductDetail } from "@buyer/pages/ProductDetail";
import { Cart } from "@buyer/pages/Cart";
import { OrderHistory } from "@buyer/pages/OrderHistory";
import { OrderHistoryDetails } from "@buyer/pages/OrderHistoryDetail";
import { BuyerProfile } from "@buyer/pages/Profile";
import { Support } from "@shared/pages/Support";
import { LiveChat } from "@shared/pages/LiveChat";
import { FAQ } from "@shared/pages/FAQ";
import ResetSuccess from "./modules/auth/components/ResetPasswordSuccess";
import EmailSent from "./modules/auth/components/EmailSent";
import VerifyEmailContent from "@auth/pages/VerifyEmailContent";
import VerifySuccessContent from "@auth/pages/VerifySuccessContent";

function App() {
  const isDarkMode = useSelector(
    (state: AppState) => state.darkMode.isDarkMode
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <GlobalStyles />
      {/* <DarkModeToggle /> */}
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <SellerAppLayout />
              </ProtectedRoute>
            }
          >
            {/* Seller-specific routes */}
            <Route path="seller" element={<Outlet />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<SellerDashboard />} />
              <Route path="marketplace" element={<MarketPlace />} />
              <Route
                path="marketplace/create-product"
                element={<CreateProductWrapper />}
              />
              <Route path="orders/:status" element={<Order />} />
              <Route path="order/:orderId" element={<OrderDetails />} />
              <Route path="order/:orderId/dispute" element={<Dispute />} />

              <Route path="inventory" element={<InventoryDashboard />} />
              <Route path="farm-records" element={<FarmRecordListPage />} />
              <Route path="farm-record-form" element={<RecordFormPage />} />
              <Route
                path="supplies-records"
                element={<SuppliesRecordListPage />}
              />
              <Route
                path="supplies-record-form"
                element={<SuppliesRecordFormPage />}
              />
              <Route
                path="risk-emergency-records"
                element={<RiskEmergencyRecordPage />}
              />
              <Route
                path="risk-emergency-record-form"
                element={<RiskEmergencyRecordFormPage />}
              />
              <Route
                path="equipment-records"
                element={<EquipmentRecordPage />}
              />
              <Route
                path="equipment-record-form"
                element={<EquipmentRecordFormPage />}
              />

              {/* Payment */}
              <Route path="payment" element={<PaymentDashboard />} />

              {/* Support */}
              <Route path="support" element={<Support />} />
              <Route path="live-chat" element={<LiveChat />} />
              <Route path="faq" element={<FAQ />} />

              {/* Profile */}
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Buyer-specific routes */}
          <Route
            element={
              <ProtectedRoute>
                <BuyerAppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="buyer" element={<Outlet />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<BuyerDashboard />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="order-history" element={<OrderHistory />} />
              <Route
                path="order-history/:orderId"
                element={<OrderHistoryDetails />}
              />
              <Route path="support" element={<Support />} />
              <Route path="live-chat" element={<LiveChat />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="profile" element={<BuyerProfile />} />
            </Route>
          </Route>

          <Route path="/register/seller" element={<RegisterBuyer />} />
          <Route path="/register" element={<RegisterBuyer />} />
          <Route path="/register/buyer" element={<RegisterSeller />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-link-sent" element={<EmailSent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password/:token" element={<PasswordReset />} />
          <Route path="/password-reset-successful" element={<ResetSuccess />} />
          <Route path ="/confirm-email" element={<VerifyEmailContent/>} />
          <Route path="/confirm-email/:token" element={<VerifySuccessContent/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}
export default App;
