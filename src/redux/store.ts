import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers, { IAppState } from "./rootReducer";

const middlewares = [thunk, logger];

export const store: Store<IAppState, any> = createStore(reducers, applyMiddleware(...middlewares))
