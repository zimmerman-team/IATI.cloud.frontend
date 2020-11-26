// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Action, action, computed, Computed, Thunk, thunk } from 'easy-peasy';
import { Endpoint } from 'app/state/interfaces/Endpoint';

export const baseURL =
  'https://iatidatastore.iatistandard.org/search/activity?';
// export const baseURL =
//   'https://test-datastore.iatistandard.org/search/activity?';

export const tableRows = 2500;

/* uncomment this in order to get data from API */
const NODE_ENV = 'production';

// todo: find a way to avoid using @ts-ignore
// @ts-ignore used cause

export const HOSTNAME =
  // @ts-ignore
  NODE_ENV === 'development' ? '/' : 'https://iatidatastore.iatistandard.org/'; // 'https://iatidatastore.iatistandard.org/';

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
    : 'api/codelists/Sector/?format=json&vocabulary=1&ordering=code';

export const SECTOR_CATEGORIES =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/sector_category.json'
    : 'api/codelists/SectorCategory/?format=json&ordering=code';

export const SECTOR_VOCABULARY =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/sector_vocabulary.json'
    : 'api/codelists/SectorVocabulary/?format=json&ordering=code';

export const POLICY_MARKER = 'data/policy_marker.json';

export const TAG = 'data/tag.json';

export const TAG_VOCABULARY = 'api/codelists/TagVocabulary/?format=json';

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
    : 'search/activity/select?q=*:*&facet=on&facet.pivot=transaction_provider_org_narrative&rows=0&facet.limit=1000';

export const TRANSACTION_RECEIVER_ORGS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/activity_scope.json'
    : 'search/activity/select?q=*:*&facet=on&facet.pivot=transaction_receiver_org_narrative&rows=0&facet.limit=1000';

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

export const DEFAULT_CURRENCY =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/default_currency.json'
    : 'api/codelists/Currency/?format=json';

export const COLLABORATION_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/collaboration_type.json'
    : 'api/codelists/CollaborationType/?format=json';

export const DEFAULT_FLOW_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/default_flow_type.json'
    : 'api/codelists/FlowType/?format=json';

export const HIERARCHY = 'data/hierarchy.json';

export const FINANCE_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/finance_type.json'
    : 'api/codelists/FinanceType/?format=json';

export const TIED_STATUS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/tied_status.json'
    : 'api/codelists/TiedStatus/?format=json';

export const TRANSACTION_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/transaction_type.json'
    : 'api/codelists/TransactionType/?format=json';

export const DOCUMENT_LINK_CATEGORY =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/document_link_category.json'
    : 'api/codelists/DocumentCategory/?format=json';

export const IATI_VERSION = 'data/version.json';

/*export const IATI_VERSION =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/iati_version.json'
    : 'api/codelists/Version/?format=json';*/

export const LANGUAGE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/iati_language.json'
    : 'api/codelists/Language/?format=json';

export const TRANSACTION_FLOW_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/transaction_flow_type.json'
    : 'api/codelists/FlowType/?format=json';

export const TRANSACTION_TIED_STATUS =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/transaction_tied_status.json'
    : 'api/codelists/TiedStatus/?format=json';

export const OTHER_IDENTIFIER_TYPE =
  // @ts-ignore
  NODE_ENV === 'development'
    ? 'data/other_identifier_type.json'
    : 'api/codelists/OtherIdentifierType/?format=json';

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
  data: computed((state) => state.response && state.response.data),
  call: action((state) => {
    state.loading = true;
  }),
  success: action((state, payload) => {
    state.loading = false;
    state.response = payload;
  }),
  fetch: thunk(async (actions) => {
    actions.call();
    const response = await endpoint<T>();
    actions.success({ data: response });
  }),
});

export default api;
