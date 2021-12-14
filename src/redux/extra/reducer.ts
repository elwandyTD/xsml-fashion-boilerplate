import actionTypes from "./actionTypes";
import { ExtraState, ExtraAction, IAlert } from "./model";

const defaultDataAlert: IAlert = {
  description: "",
  onClick: (): void => {},
  title: "",
  buttonType: "Add"
};

const initialState: ExtraState = {
  alert: defaultDataAlert,
  loading: false,
  openAlert: false
}

const extraReducer = (state: ExtraState = initialState, action: ExtraAction): ExtraState => {
  const resetDataAlert = {
    title: "",
    description: "",
    onClick: () => {}
  }

  switch (action.type) {
    case actionTypes.OPEN_ALERT: 
      return {
        ...state,
        openAlert: true
      }
    case actionTypes.CLOSE_ALERT: 
      return {
        ...state,
        alert: defaultDataAlert,
        openAlert: false
      }

    case actionTypes.SET_DATA_ALERT:
      const newDataAlert: IAlert = {
        title: action.payload?.alert?.title,
        description: action.payload?.alert?.description,
        onClick: action.payload?.alert?.onClick || (() => {}),
        buttonType: action.payload?.alert?.buttonType || "Add"
      };

      return {
        ...state,
        alert: newDataAlert,
        openAlert: true
      }
    case actionTypes.RESET_DATA_ALERT: 
      return {
        ...state,
        alert: defaultDataAlert,
        openAlert: false
      }
  }

  return state;
}

export default extraReducer;