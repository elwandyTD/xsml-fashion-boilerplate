export interface IAlert {
  title: string | undefined;
  description: string | undefined;
  onClick(): any | void | undefined | (() => any);
  buttonType: "Add" | "Delete"
}

export interface ExtraState {
  openAlert: boolean;
  loading: boolean;
  alert: IAlert
}

export interface ExtraPayload {
  openAlert?: boolean;
  loading?: boolean;
  alert?: IAlert
}

export interface ExtraAction {
  type: string;
  payload?: ExtraPayload
}

export type ExtraDispatchType = (args: ExtraAction) => ExtraAction