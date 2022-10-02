import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface postType {
  image: string;
  caption?: string;
}
const initialData: postType = {
  image: "",
  caption: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialData,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      return { ...state, image: action.payload };
    },
    setCaption: (state, action: PayloadAction<string>) => {
      return { ...state, caption: action.payload };
    },
  },
});

export const { setImage, setCaption } = postSlice.actions;
export const postStore = (state: RootState) => state.post;
export default postSlice.reducer;
