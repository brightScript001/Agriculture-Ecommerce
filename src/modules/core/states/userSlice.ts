import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: string;
  avatar?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  state?: string;
  city?: string;
  address?: string;
  role?: string;
  token?: string;
}

const initialState: UserState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  createdAt: "",
  avatar: "",
  dateOfBirth: "",
  phoneNumber: "",
  state: "",
  city: "",
  address: "",
  role: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (
      state,
      action: PayloadAction<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        avatar?: string;
        role?: string;
        token?: string;
      }>
    ) => {
      const { id, firstName, lastName, email, password, avatar, role, token } =
        action.payload;
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
      state.avatar = avatar;
      state.role = role;
      state.token = token;
    },
    updateUserDetails: (
      state,
      action: PayloadAction<{
        dateOfBirth?: string;
        phoneNumber?: string;
        state?: string;
        city?: string;
        address?: string;
      }>
    ) => {
      const {
        dateOfBirth,
        phoneNumber,
        state: userState,
        city,
        address,
      } = action.payload;
      state.dateOfBirth = dateOfBirth;
      state.phoneNumber = phoneNumber;
      state.state = userState;
      state.city = city;
      state.address = address;
    },
  },
});

export const { createUser, updateUserDetails } = userSlice.actions;
export default userSlice.reducer;
