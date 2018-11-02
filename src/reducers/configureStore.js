import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';

export default function configureStore(initialState) {
  const store = createStore(reducers, applyMiddleware(thunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
