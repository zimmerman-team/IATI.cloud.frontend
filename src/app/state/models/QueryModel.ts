import { baseURL, tableRows } from 'app/state/api';

import { action, Action, createStore, State, useStoreState } from 'easy-peasy';

document.cookie = 'rows:rows=50';

// console.log(
//   document.cookie
//     .split('; ')
//     .find((row) => row.startsWith('rows'))
//     .split(':')[1]
// );

export const ROWS = document.cookie
  .split('; ')
  .find((row) => row.startsWith('rows'))
  .split('=')[1];

export interface QueryModel {
  url: string;
  updateQuery: Action<QueryModel, string>;
  rows?: number;
}

export const queryModel: QueryModel = {
  url: `${baseURL}q=*:*&wt=json&rows=${
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('rows'))
      .split('=')[1]
  }`,
  updateQuery: action((state, payload) => {
    // eslint-disable-next-line
    state.url = payload;
  }),
};
