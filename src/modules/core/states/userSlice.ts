import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  avatar: string | null;
  dateOfBirth: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  role: string;
  token: string;
}

const initialState: UserState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  createdAt: "",
  avatar: null,
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
        avatar?: string | null;
        role?: string;
        token?: string;
      }>
    ) => {
      Object.assign(state, action.payload);
    },
    updateUserDetails: (
      state,
      action: PayloadAction<{
        avatar: string | null;
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        phoneNumber: string;
        state: string;
        city: string;
        address: string;
      }>
    ) => {
      const {
        avatar,
        firstName,
        lastName,
        dateOfBirth,
        phoneNumber,
        state: userGeographicalState,
        city,
        address,
      } = action.payload;

      state.avatar = avatar;
      state.firstName = firstName;
      state.lastName = lastName;
      state.dateOfBirth = dateOfBirth;
      state.phoneNumber = phoneNumber;
      state.state = userGeographicalState;
      state.city = city;
      state.address = address;
    },
  },
});

export const { createUser, updateUserDetails } = userSlice.actions;
export default userSlice.reducer;
