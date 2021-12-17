export interface IExample {
  id: number;
  title: string;
  body: string;
}

export type ExampleState = {
  articles: IExample[];
  counter: number | 0;
  loading: boolean | undefined;
  isSuccess: boolean | undefined;
}

export type ExamplePayload = {
  article?: IExample;
  loading?: boolean;
  state?: object | ExampleState;
}

export type ExampleAction = {
  type: string;
  payload: ExamplePayload
}

export type ExampleDispatchType = (args: ExampleAction) => ExampleAction