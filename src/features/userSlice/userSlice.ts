import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface userType {
  fullname?: string;
  email?: string;
  username?: string;
  password?: string;
  c_password?: string;
  gender?: string;
  dateofbirth?: Date;
  phone?: string;
}
const initialData: userType = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  c_password: "",
  gender: "",
  dateofbirth: new Date(),
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    setFullname: (state, action: PayloadAction<string>) => {
      return { ...state, fullname: action.payload };
    },
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
    setGender: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        gender: action.payload,
      };
    },
    setDateOfBirth: (state, action: PayloadAction<Date>) => {
      return {
        ...state,
        dateofbirth: action.payload,
      };
    },
    setPhone: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        phone: action.payload,
      };
    },
  },
});

export const {
  setFullname,
  setEmail,
  setUsername,
  setPassword,
  setCPassword,
  setGender,
  setDateOfBirth,
  setPhone,
} = userSlice.actions;
export const userStore = (state: RootState) => state.user;
export default userSlice.reducer;
