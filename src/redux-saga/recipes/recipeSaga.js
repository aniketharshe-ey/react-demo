import { call, put, takeLatest } from "redux-saga/effects";
import { requestSaga } from "../rootSaga";
import { searchRecipe } from "./recipeService";
import { SEARCH_RECIPE } from "../constants";
import { setRecipeListsAction } from "./recipeReducer";
import { has } from "lodash";

/**
 * Worker saga
 *
 * @param {Object} action
 */
export function* recipeSearchSaga(action) {
  const { payload } = action;
  yield call(requestSaga, {
    method: searchRecipe,
    payload,
    callbacks: [handleSearchResponse],
  });
}

/**
 * Response handler
 *
 * @param {Object} response
 */
export function* handleSearchResponse(response) {
  const result = yield response.json();

  if (has(result, "hits")) {
    yield put(setRecipeListsAction(result.hits));
  }
}

/**
 * Watcher saga
 */
export default function* recipeSaga() {
  yield takeLatest(SEARCH_RECIPE, recipeSearchSaga);
}
