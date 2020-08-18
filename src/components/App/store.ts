/* eslint-disable no-undef */
import {applyMiddleware, compose, createStore, Store} from 'redux';
import getReducers from './reducer';

const isDev = process.env.NODE_ENV === 'development';

type ReduxWindow = Window &
  typeof globalThis & {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: unknown};

const composeEnhancers = (isDev && window
  ? (window as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose) as typeof compose;

const middlewares = [];
if (isDev) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const {createLogger} = require(`redux-logger`);
  middlewares.push(createLogger());
}
const middleware = applyMiddleware(...middlewares);

const store = (): Store => {
  const composedStore = createStore(
    getReducers(),
    composeEnhancers(middleware),
  );
  return composedStore;
};

export default store();
