import { Action, action, Select, select, Thunk, thunk } from 'easy-peasy';
import { IEndpoint } from 'app/api';

export interface IResponse<T> {
  data: T;
}

export interface IApiModel<T> {
  loading: boolean;
  response?: IResponse<T>;
  error?: Error;
  call: Action<IApiModel<T>>;
  success: Action<IApiModel<T>, IResponse<T>>;
  fetch: Thunk<IApiModel<T>>;
  data: Select<IApiModel<T>, T | undefined>;
}

const api = <T>(endpoint: IEndpoint): IApiModel<T> => ({
  loading: false,
  response: undefined,
  error: undefined,
  data: select(state => state.response && state.response.data),
  call: action(state => {
    state.loading = true;
  }),
  success: action((state, payload) => {
    state.loading = false;
    state.response = payload;
  }),
  fetch: thunk(async actions => {
    actions.call();

    const response = await endpoint<T>();

    actions.success({ data: response });
  })
});

export default api;
