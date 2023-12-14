import { isEmpty } from "lodash";
import { configureStore as configureReduxStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

export const getMockedIntegrationStore = (
  reducer,
  saga,
  preloadedState = {}
) => {
  const sagaMiddleware = createSagaMiddleware();
  const config = {
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware,
    ],
  };

  if (!isEmpty(preloadedState)) {
    config.preloadedState = preloadedState;
  }

  const store = configureReduxStore(config);
  sagaMiddleware.run(saga);
  return store;
};
