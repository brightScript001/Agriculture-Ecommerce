import { RouteObject } from "react-router-dom";
import { Login } from "@modules/auth/pages/Login";
import { Signup } from "@modules/auth/pages/SignUp";
import { ForgotPassword } from "@modules/auth/pages/ForgotPassword";
import { VerifyEmailContent } from "@auth/pages/VerifyEmailContent";
import { VerifySuccessContent } from "@auth/pages/VerifySuccessContent";
import { ResetLinkSent } from "@modules/auth/pages/ResetLinkSent";
import { ResetPasswordForm } from "@modules/auth/pages/ResetPasswordForm";
import { ResetPasswordSuccess } from "@modules/auth/pages/ResetPasswordSuccess";

export const authRoutes: RouteObject[] = [
  { path: "/register", element: <Signup /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/login", element: <Login /> },
  { path: "/reset-password/:token", element: <ResetPasswordForm /> },
  { path: "/password-reset-successful", element: <ResetPasswordSuccess /> },
  { path: "/confirm-email", element: <VerifyEmailContent /> },
  { path: "/confirm-email/:token", element: <VerifySuccessContent /> },
  { path: "/reset-link-sent", element: <ResetLinkSent /> },
];
