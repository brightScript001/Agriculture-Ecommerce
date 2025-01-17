import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt: string;
  avatar?: string;
}

const initialState: UserState = {
  _id: "",
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
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        avatar?: string;
      }>
    ) => {
      const { _id, firstName, lastName, email, password, avatar } =
        action.payload;

      state._id = _id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.password = password;
      state.avatar = avatar;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
