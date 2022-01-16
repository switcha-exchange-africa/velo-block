import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./index";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";


export function store(initialState) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
    const loggerMiddleWare = createLogger({
      predicate: () => process.env.NODE_ENV === "development",
    });
  
      const middleware = [thunk, loggerMiddleWare];
      const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
          applyMiddleware(thunk, reduxImmutableStateInvariant(), ...middleware)
        )
      );
      // hot reloading the application
        if (process.env.NODE_ENV !== "production" && module.hot) {
          module.hot.accept("./index.js", () =>
            store.replaceReducer(rootReducer)
          );
        }
      return store;
  }