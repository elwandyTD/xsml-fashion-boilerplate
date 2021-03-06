import { combineReducers } from "redux";

import exampleReducer from "./example/reducer";
import { ExampleAction, ExampleState } from "./example/types";
import extraReducer from "./extra/reducer";
import { ExtraAction, ExtraState } from "./extra/types";

export interface IAppState {
  example: ExampleState,
  extra: ExtraState
}

export interface IAppAction {
  example: ExampleAction,
  extra: ExtraAction
}

const reducers = combineReducers<IAppState>({
  example: exampleReducer,
  extra: extraReducer
});

export default reducers;