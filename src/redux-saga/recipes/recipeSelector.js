import { createSelector } from "@reduxjs/toolkit";
import { get } from "lodash";

// Returns all objects from store
export const getRecipes = (state) => state.recipe;

// Returns recipe list
export const getRecipeListSelector = createSelector(getRecipes, (recipe) =>
  get(recipe, "list", [])
);
