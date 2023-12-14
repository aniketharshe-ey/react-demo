import { isEmpty } from "lodash";

export const searchRecipe = async (searchParam) => {
  if (isEmpty(searchParam)) {
    throw new Error("Request params missing");
  }

  const url = `${process.env.REACT_APP_SEARCH_API_URL}?q=${searchParam}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&type=public`;

  return await fetch(url, {
    "Cross-Origin -Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Accept-Encoding": "gzip",
  });
};
