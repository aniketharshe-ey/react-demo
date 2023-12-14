import { createAction } from "@reduxjs/toolkit";
import { SEARCH_RECIPE } from "../constants";

export const searchRecipeAction = createAction(SEARCH_RECIPE);
