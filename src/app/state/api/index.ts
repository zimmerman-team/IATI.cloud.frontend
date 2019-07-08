import { BorgCollectiveModel } from 'app/state/models/CyborgModel';

export const HOSTNAME =
  process.env.NODE_ENV === 'development'
    ? '/'
    : 'https://store.staging.iati.cloud/';

// datastore.iati.cloud

export const ORGANISATION_TYPES =
  process.env.NODE_ENV === 'development'
    ? 'data/organisation_types.json'
    : 'api/codelists/OrganisationType/?format=json';

export const SECTORS =
  process.env.NODE_ENV === 'development'
    ? 'data/sectors.json'
    : 'api/codelists/Sector/?format=json';

export const SECTOR_CATEGORIES =
  process.env.NODE_ENV === 'development'
    ? 'data/sector_category.json'
    : 'api/codelists/SectorCategory/?format=json';

export const ORGANISATIONS =
  process.env.NODE_ENV === 'development'
    ? 'data/organisations.json'
    : 'api/organisations/?format=json';

export const REGIONS =
  process.env.NODE_ENV === 'development'
    ? 'data/regions.json'
    : 'api/regions/?format=json';

export const COUNTRIES =
  process.env.NODE_ENV === 'development'
    ? 'data/countries.json'
    : 'api/countries/?format=json';

import { Action, action, Thunk, thunk, computed, Computed } from 'easy-peasy';
import { Endpoint } from 'app/state/interfaces/Endpoint';

export interface IResponse<T> {
  data: T;
}

export interface ApiModel<T> {
  loading: boolean;
  response?: IResponse<T>;
  error?: Error;
  call: Action<ApiModel<T>>;
  success: Action<ApiModel<T>, IResponse<T>>;
  fetch: Thunk<ApiModel<T>>;
  data: Computed<ApiModel<T>, T | undefined>;
}

const api = <T>(endpoint: Endpoint): ApiModel<T> => ({
  loading: false,
  response: undefined,
  error: undefined,
  data: computed(state => state.response && state.response.data),
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
