export const updateUserInfo = async (updateUser: {
  avatar: string | null;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
}) => {
  const payload = {
    avatar: updateUser.avatar,
    firstName: updateUser.firstName,
    lastName: updateUser.lastName,
    dateOfBirth: updateUser.dateOfBirth,
    phoneNumber: updateUser.phoneNumber,
    state: updateUser.state,
    city: updateUser.city,
    address: updateUser.address,
  };

  const response = await fetch("http://localhost:5000/api/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to update user information");
  }

  return response.json();
};
