import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/globalStyles";
import PageNotFound from "./shared/components/PageNotFound";
import { AppState } from "./store";
// import DarkModeToggle from "./ui/DarkModeToggle";
import RegisterSeller from "./modules/auth/pages/SignUp";
import RegisterBuyer from "./modules/auth/pages/SignUp";
import ForgotPassword from "./modules/auth/pages/ForgotPassword";
import Login from "./modules/auth/pages/Login";
import PasswordReset from "./modules/auth/pages/PasswordReset";
import VerifyEmail from "./modules/auth/pages/VerifyEmail";
import HomePage from "./shared/components/Home";

// import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./modules/seller/ui/AppLayout";
import SellerDashboard from "./modules/seller/pages/SelllerDashboard";
import Order from "./modules/seller/pages/Order";
import MarketPlace from "./modules/seller/pages/MarketPlace";
import CreateProduct from "./modules/seller/pages/CreateProduct";
import Dispute from "./modules/seller/pages/Dispute";
import OrderDetails from "./modules/seller/pages/OrderDetails";
import FarmRecord from "./modules/seller/pages/FarmGeneralRecord";
import AddUpdate from "./modules/seller/pages/FormPage";
import SuppliesRecord from "./modules/seller/pages/SuppliesRecord";
import RiskEmergencyRecord from "./modules/seller/pages/RiskEmergengyRecord";

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
              // <ProtectedRoute>
              <AppLayout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="marketplace" element={<MarketPlace />} />
            <Route
              path="marketplace/create-product"
              element={<CreateProduct />}
            />
            <Route path="/orders/:status" element={<Order />} />
            <Route path="/order/:orderId" element={<OrderDetails />} />
            <Route path="/order/:orderId" element={<OrderDetails />} />
            <Route path="/order/:orderId/dispute" element={<Dispute />} />
            <Route path="/farm-general-record" element={<FarmRecord />} />
            <Route path="/add-update" element={<AddUpdate />} />
            <Route path="/supplies-record" element={<SuppliesRecord />} />
            <Route
              path="/risk-emergency-record"
              element={<RiskEmergencyRecord />}
            />
          </Route>

          <Route path="/register/seller" element={<RegisterBuyer />} />
          <Route path="/register/buyer" element={<RegisterSeller />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="*" element={<PageNotFound />} />
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
