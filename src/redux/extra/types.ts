export interface IAlert {
  title: string | undefined;
  description: string | undefined;
  onClick(): any | void | undefined | (() => any);
  buttonType: "Add" | "Delete"
}

export type ExtraState = {
  openAlert: boolean;
  loading: boolean;
  alert: IAlert;
  progress: number;
}

export type ExtraPayload = {
  openAlert?: boolean;
  loading?: boolean;
  alert?: IAlert;
  progress?: number;
}

export interface ExtraAction {
  type: string;
  payload?: ExtraPayload
}

export type ExtraDispatchType = (args: ExtraAction) => ExtraAction