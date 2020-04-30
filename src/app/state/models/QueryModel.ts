import { baseURL } from 'app/state/api';
import { action, Action } from 'easy-peasy';

export const ROWS = 5000000;

export interface QueryModel {
  url: string;
  updateQuery: Action<QueryModel, string>;
}

export const queryModel: QueryModel = {
  url: `${baseURL}q=*:*&wt=json&rows=${ROWS}`,
  updateQuery: action((state, payload) => {
    // eslint-disable-next-line
    state.url = payload;
  }),
};
