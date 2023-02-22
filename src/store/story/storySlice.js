import { createSlice } from "@reduxjs/toolkit";
import { postStory, getStory } from "./storyAction";
const initialState = {
  loading: false,
  stories: null,
  error: null,
  success: false,
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers:{
    logout: (state) => {
        // ...logout reducer
        localStorage.removeItem("userToken"); // deletes token from storage
        state.loading = false;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
      },
  },
  extraReducers: {
    [postStory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [postStory.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [postStory.rejected]: (state,{payload}) => {
      state.loading = false;
      state.error = payload;
    },
    // getting 
    [getStory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getStory.fulfilled]: (state,{payload}) => {
      state.loading = false;
      state.success = true;
      state.stories = payload
    },
    [getStory.rejected]: (state,{payload}) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { logout } = storySlice.actions;

export default storySlice.reducer;