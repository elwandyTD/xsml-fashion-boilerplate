import actionTypes from "./actionTypes";
import { ExtraState, ExtraAction, IAlert } from "./types";

const defaultDataAlert: IAlert = {
  buttonType: "Add",
  description: "",
  title: "",
  onClick: (): void => {},
};

const initialState: ExtraState = {
  alert: defaultDataAlert,
  loading: false,
  openAlert: false,
  progress: 0
}

const extraReducer = (state: ExtraState = initialState, action: ExtraAction): ExtraState => {
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
        buttonType: action.payload?.alert?.buttonType || "Add",
        description: action.payload?.alert?.description,
        title: action.payload?.alert?.title,
        onClick: action.payload?.alert?.onClick || (() => {}),
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

      case actionTypes.SET_PROGRESS_BAR:
        console.log("reducer extra");
        return {
          ...state,
          progress: action.payload?.progress || 0
        };
  }

  return state;
}

export default extraReducer;