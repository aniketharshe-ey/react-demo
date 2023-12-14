import { useDispatch, useSelector } from "react-redux";
import { searchRecipeAction } from "../redux-saga/recipes/recipeAction";
import { getRecipeListSelector } from "../redux-saga/recipes/recipeSelector";
import { useMemo, useState } from "react";
import { isEmpty } from "lodash";

const useRecipe = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [cusine, setCusine] = useState("");
  const list = useSelector(getRecipeListSelector);

  // Dipatch action to service call
  const handleSearch = (inputValue) => {
    setIsLoading(true);
    dispatch(searchRecipeAction(inputValue));
  };

  // Prepare recipe list for render
  const getRecipeList = () => {
    return list.map((item) => {
      let domain = new URL(item.recipe.url);

      return {
        cuisineType: item.recipe.cuisineType,
        image: {
          src: item.recipe.image,
          alt: item.recipe.label,
        },
        row1: {
          isLink: true,
          link: item.recipe.shareAs,
          title: item.recipe.label,
        },
        row2: {
          isLink: false,
          title: `${Math.round(item.recipe.calories)} Calories | ${
            item.recipe.ingredients.length
          } Ingredients`,
        },
        row3: {
          isLink: true,
          link: item.recipe.url,
          title: domain.hostname,
        },
      };
    });
  };

  const handleCusineChange = (e) => {
    setCusine(e.target.value);
  };

  // Filters list based on cusine
  const data = getRecipeList();
  const filteredData = useMemo(() => {
    if (!isEmpty(cusine)) {
      return data.filter((item) => item.cuisineType.includes(cusine));
    }
    return data;
  }, [data, cusine]);

  return {
    isLoading,
    setIsLoading,
    filteredData,
    handleSearch,
    getRecipeList,
    handleCusineChange,
  };
};

export { useRecipe };
