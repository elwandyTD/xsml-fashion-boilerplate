import actionTypes from "./actionTypes";
import { ExampleAction, ExampleDispatchType, IExample, ExampleState } from "./model";

import * as toast from "../../utils/toast";

export const addExample = (article: IExample) => {
  const action: ExampleAction = {
    type: actionTypes.ADD_EXAMPLE,
    payload: {
      article
    }
  }

  return simulateHttpRequest(action);
}

export const removeExample = (article: IExample) => {
  const action: ExampleAction = {
    type: actionTypes.REMOVE_EXAMPLE,
    payload: {
      article
    }
  }

  return simulateHttpRequest(action);
}

export const exampleCreateApi = (success: boolean = false) => {
  return async (dispatch: ExampleDispatchType) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      payload: {
        loading: true
      }
    });

    setTimeout(() => {
      if (success) {
        toast.success({
          title: 'Account created.',
          description: "We've created your account for you.",
        });
      } else {
        toast.error({
          description: "We've created your account for you.",
        });
      }

      return dispatch({
        type: actionTypes.SET_LOADING,
        payload: {
          loading: false
        }
      });
    }, 1500);
  };
}

export const incCounter = () => ({
  type: actionTypes.INC_COUNTER
});

export const decCounter = () => ({
  type: actionTypes.DEC_COUNTER
});

export const setState = (state: object | ExampleState) => ({
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