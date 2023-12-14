import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { getMockedIntegrationStore } from "./test/helper";
import rootReducer from "./redux-saga/rootReducer";
import rootSaga from "./redux-saga/rootSaga";
import { Provider } from "react-redux";

const setup = (storeData = {}) => {
  const store = getMockedIntegrationStore(rootReducer, rootSaga, storeData);

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

test("renders home page", () => {
  setup();
  const title = screen.getByText(/Recipes/i);
  expect(title).toBeInTheDocument();
});
