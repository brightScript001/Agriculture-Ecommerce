import { Dispatch } from "@reduxjs/toolkit";
import { logout as logoutAction } from "@modules/core/states/authSlice";

export const LogOut = () => (dispatch: Dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch(logoutAction());
};
