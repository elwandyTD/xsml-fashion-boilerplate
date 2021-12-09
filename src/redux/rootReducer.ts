import { combineReducers } from "redux";
import { ExampleAction, ExampleState } from "./example/model";

import exampleReducer from "./example/reducer";

export interface IAppState {
  example: ExampleState
}

export interface IAppAction {
  example: ExampleAction
}

const reducers = combineReducers<IAppState>({
  example: exampleReducer
});

export default reducers;