import { all, call } from "redux-saga/effects";
import recipeSaga from "./recipes/recipeSaga";

/**
 * Makes the api call and executes callback handlers
 *
 * @param {Object} args
 */
export function* requestSaga(args) {
  try {
    const result = yield call(args.method, args.payload);

    // check if the callbacks were passed through
    if (Array.isArray(args.callbacks)) {
      yield all(args.callbacks.map((callback) => call(callback, result)));
    }
  } catch (error) {
    console.log("error", error);
  }
}

/**
 * Execute all sagas
 */
export default function* rootSaga() {
  yield all([recipeSaga()]);
}
