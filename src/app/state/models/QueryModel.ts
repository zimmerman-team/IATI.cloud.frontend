import { action, Action } from 'easy-peasy';

export type QueryModel = {
  url: string;
  updateQuery: Action<QueryModel, string>;
};

export const queryModel: QueryModel = {
  url: 'https://test-datastore.iatistandard.org/api/activities/?format=json',
  updateQuery: action((state, payload) => {
    // eslint-disable-next-line
    state.url = payload;
  }),
};
