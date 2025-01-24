import { UserState } from "@modules/core/states/userSlice";
import { LoginFormData } from "../components/LoginForm";

export const loginUser = async (data: LoginFormData): Promise<UserState> => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData?.message || "Invalid credentials or server error"
    );
  }

  return response.json();
};
