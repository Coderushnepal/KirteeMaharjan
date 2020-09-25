import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";

import rootReducers from "../reducers";

console.log(process.env.NODE_ENV);
const env = process.env.NODE_ENV;

const composeEnhancers =
  env === "development" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// const middlewares =
//   env === "development"
//     ? applyMiddleware(thunk, logger)
//     : applyMiddleware(thunk);

// const enhancers = composeEnhancers();
const enhancers = composeEnhancers(applyMiddleware(logger));
export default createStore(rootReducers, enhancers);
