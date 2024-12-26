import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  createdAt: "",
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
      }>
    ) => {
      const { firstName, lastName, email, password } = action.payload;

      // Update state fields
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
      state.createdAt = new Date().toISOString();
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
