import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store with options
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
  devTools: true,
});
sagaMiddleware.run(rootSaga);

window.store = store;

export default store;
