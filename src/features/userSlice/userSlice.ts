import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface userType {
  email?: string;
  username?: string;
  password?: string;
  c_password?: string;
}
const initialData: userType = {
  email: "",
  username: "",
  password: "",
  c_password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setUsername: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    setCPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        c_password: action.payload,
      };
    },
  },
});

export const { setEmail, setUsername, setPassword, setCPassword } =
  userSlice.actions;
export const userStore = (state: RootState) => state.user.value;
export default userSlice.reducer;
