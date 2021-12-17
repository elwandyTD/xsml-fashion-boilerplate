import actionTypes from "./actionTypes";
import { IAlert, ExtraAction } from "./types";

export const openAlert = (): ExtraAction => ({
  type: actionTypes.OPEN_ALERT
});

export const closeAlert = (): ExtraAction => ({
  type: actionTypes.CLOSE_ALERT
});

export const setDataAlert = (alert: IAlert): ExtraAction => ({
  type: actionTypes.SET_DATA_ALERT,
  payload: {
    alert
  }
});

export const resetDataAlert = (): ExtraAction => ({
  type: actionTypes.RESET_DATA_ALERT
});

export const setProgress = (progress: number): ExtraAction => ({
  type: actionTypes.SET_PROGRESS_BAR,
  payload: {
    progress
  }
});