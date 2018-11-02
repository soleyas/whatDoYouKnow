import { createStore } from "redux";
import reducers from "./index";

export default function configureStore() {
  const store = createStore(reducers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require("./index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
