import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: string;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  createdAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: {
      prepare: (
        firstName: string,
        lastName: string,
        email: string,
        password: string
      ) => {
        return {
          payload: {
            firstName,
            lastName,
            email,
            password,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(
        state: UserState,
        action: PayloadAction<{
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          createdAt: string;
        }>
      ) {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});
export const { createUser } = userSlice.actions;
export default userSlice.reducer;
