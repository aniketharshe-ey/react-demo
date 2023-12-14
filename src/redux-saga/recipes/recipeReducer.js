import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeListsAction: (state, action) => {
      return { ...state, list: action.payload };
    },
  },
});

export const { setRecipeListsAction } = recipeSlice.actions;

export default recipeSlice.reducer;
