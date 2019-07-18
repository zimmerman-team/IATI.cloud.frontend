import { action, Action } from 'easy-peasy';

export type QueryModel = {
  url: string;
  updateQuery: Action<QueryModel, string>;
};

export const queryModel: QueryModel = {
  url: '',
  updateQuery: action((state, payload) => {
    // eslint-disable-next-line
    state.url = payload;
  }),
};
