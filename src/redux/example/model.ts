export interface IExample {
  id: number;
  title: string;
  body: string;
}

export type ExampleState = {
  articles: IExample[];
  counter: number | 0;
  loading: boolean | undefined;
}

export type ExampleAction = {
  type: string;
  article?: IExample;
  state?: object;
  loading?: boolean;
}

export type ExampleDispatchType = (args: ExampleAction) => ExampleAction