export const updateUserInfo = async (updateUer: {
  avatar: string | null;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  id?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  role?: string;
  token?: string;
}) => {
  const response = await fetch("http://localhost:8000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(updateUer),
  });
  if (!response.ok) {
    throw new Error("Failed to update user information");
  }
  return response.json();
};
