import { combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/recipeReducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

export default rootReducer;
