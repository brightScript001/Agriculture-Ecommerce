import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: string;
  avatar?: string;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  createdAt: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        avatar?: string;
      }>
    ) => {
      const { firstName, lastName, email, password, avatar } = action.payload;

      // Update state fields
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
      state.createdAt = new Date().toISOString();
      state.avatar = avatar;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
