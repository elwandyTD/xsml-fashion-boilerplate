import * as actionTypes from "./actionTypes";
import { ExampleAction, ExampleDispatchType, IExample } from "./model";

export const addExample = (article: IExample) => {
  const action: ExampleAction = {
    type: actionTypes.ADD_EXAMPLE,
    article
  }

  return simulateHttpRequest(action);
}

export const removeExample = (article: IExample) => {
  const action: ExampleAction = {
    type: actionTypes.REMOVE_EXAMPLE,
    article
  }

  return simulateHttpRequest(action);
}

export const incCounter = () => ({
  type: actionTypes.INC_COUNTER
});

export const decCounter = () => ({
  type: actionTypes.DEC_COUNTER
});

export const setState = (state: object) => ({
  type: actionTypes.SET_STATE,
  state
});
export const setLoading = (loading: boolean = true) => ({
  type: actionTypes.SET_STATE,
  loading
});

export const simulateHttpRequest = (action: ExampleAction) => {
  return async (dispatch: ExampleDispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500)
  }
}