/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Action, action, Thunk, thunk, computed, Computed } from 'easy-peasy';
import { Endpoint } from 'app/state/interfaces/Endpoint';

export const baseURL = `https://test-datastore.iatistandard.org/${
  process.env.NODE_ENV === 'development' ? 'dev/' : ''
}search/activity/select?`;

// const NODE_ENV = process.env.NODE_ENV;

/* uncomment this in order to get data from API */
const NODE_ENV = 'production';

// todo: find a way to avoid using @ts-ignore
// @ts-ignore used cause

export const HOSTNAME =
  // @ts-ignore
  NODE_ENV === 'development' ? '/' : 'https://test-datastore.iatistandard.org/';

// datastore.iati.cloud

/* note */
export const ORGANISATION_TYPES =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/organisation_types.json'
    : 'api/codelists/OrganisationType/?format=json';

export const SECTORS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/sectors.json'
    : 'api/codelists/Sector/?format=json';

export const SECTOR_CATEGORIES =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/sector_category.json'
    : 'api/codelists/SectorCategory/?format=json';

export const ORGANISATIONS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/organisations.json'
    : 'api/activities/aggregations/?format=json&group_by=reporting_organisation&aggregations=count';

export const REGIONS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/regions.json'
    : 'api/activities/aggregations/?format=json&group_by=recipient_region&aggregations=count';

export const COUNTRIES =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/countries.json'
    : 'api/activities/aggregations/?format=json&group_by=recipient_country&aggregations=count';

export const ACTIVITY_STATUS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/activity_status.json'
    : 'api/codelists/ActivityStatus/?format=json';

// todo: uncomment when retrieve data from API
// export const PARTICIPATING_ORGS =
//   // @ts-ignore
//   NODE_ENV === 'development'
//     ? 'data/participating_organisations.json'
//     : 'api/activities/aggregations/?format=json&group_by=participating_organisation&aggregations=count';
export const PARTICIPATING_ORGS = 'data/participating_organisations.json';

export const TRANSACTION_PROVIDER_ORGS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/activity_scope.json'
    : 'dev/search/activity/select?q=*:*&facet=on&facet.pivot=transaction_provider_org_narrative&rows=0&facet.limit=1000';

export const TRANSACTION_RECEIVER_ORGS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/activity_scope.json'
    : 'dev/search/activity/select?q=*:*&facet=on&facet.pivot=transaction_receiver_org_narrative&rows=0&facet.limit=1000';

export const ACTIVITY_SCOPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/activity_scope.json'
    : 'api/codelists/ActivityScope/?format=json';

export const AID_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/aid_type.json'
    : 'api/codelists/AidType/?format=json';

export const AID_TYPE_CATEGORY =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/aid_type_category.json'
    : 'api/codelists/AidType-category/?format=json';

export const AID_TYPE_VOCABULARY =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/aid_type_category.json'
    : 'api/codelists/AidType-vocabulary/?format=json';

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
  }),
});

export default api;
