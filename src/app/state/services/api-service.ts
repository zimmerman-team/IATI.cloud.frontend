//cc:application api services
import {
  ACTIVITY_SCOPE,
  ACTIVITY_STATUS,
  AID_TYPE,
  AID_TYPE_CATEGORY,
  AID_TYPE_VOCABULARY,
  COLLABORATION_TYPE,
  COUNTRIES,
  DEFAULT_CURRENCY,
  DEFAULT_FLOW_TYPE,
  DOCUMENT_LINK_CATEGORY,
  FINANCE_TYPE,
  HIERARCHY,
  HOSTNAME,
  IATI_VERSION,
  LANGUAGE,
  ORGANISATION_TYPES,
  ORGANISATIONS,
  OTHER_IDENTIFIER_TYPE,
  PARTICIPATING_ORGS,
  POLICY_MARKER,
  REGIONS,
  SECTOR_CATEGORIES,
  SECTOR_VOCABULARY,
  SECTORS,
  TAG,
  TIED_STATUS,
  TRANSACTION_FLOW_TYPE,
  TRANSACTION_PROVIDER_ORGS,
  TRANSACTION_RECEIVER_ORGS,
  TRANSACTION_TIED_STATUS,
  TRANSACTION_TYPE,
  TAG_VOCABULARY,
} from 'app/state/api';

import { Endpoint } from 'app/state/interfaces/Endpoint';

/* todo: make fetch logic re-usable  */
export const getOrganisationTypes: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ORGANISATION_TYPES, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getSectors: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + SECTORS, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getOrganisations: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ORGANISATIONS, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getCountries: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + COUNTRIES, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getSectorCategories: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + SECTOR_CATEGORIES, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getSectorVocabularies: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + SECTOR_VOCABULARY, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getPolicyMarker: Endpoint = (params: RequestInit = {}) =>
  fetch(`/${POLICY_MARKER}`, {
    method: 'GET',
  }).then((res) => res.json());

export const getTag: Endpoint = (params: RequestInit = {}) =>
  fetch(`/${TAG}`, {
    method: 'GET',
  }).then((res) => res.json());

export const getTagVocabularies: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + TAG_VOCABULARY, {
    method: 'GET',
  }).then((res) => res.json());

export const getRegions: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + REGIONS, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getActivityStatus: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ACTIVITY_STATUS, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getParticipatingOrgs: Endpoint = (params: RequestInit = {}) =>
  fetch(`/${PARTICIPATING_ORGS}`, {
    // todo: add HOSTNAME when retrieve data from API
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getTransactionProviderOrgs: Endpoint = (
  params: RequestInit = {}
) =>
  fetch(HOSTNAME + TRANSACTION_PROVIDER_ORGS, {
    method: 'GET',
    ...params,
  }).then((res) => res.clone().json());

export const getTransactionReceiverOrgs: Endpoint = (
  params: RequestInit = {}
) =>
  fetch(HOSTNAME + TRANSACTION_RECEIVER_ORGS, {
    method: 'GET',
    ...params,
  }).then((res) => res.clone().json());

export const getActivityScope: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ACTIVITY_SCOPE, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getAidType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + AID_TYPE, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getAidTypeCategory: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + AID_TYPE_CATEGORY, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getAidTypeVocabulary: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + AID_TYPE_VOCABULARY, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getDefaultCurrency: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + DEFAULT_CURRENCY, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getCollaborationType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + COLLABORATION_TYPE, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getDefaultFlowType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + DEFAULT_FLOW_TYPE, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export const getHierarchy: Endpoint = (params: RequestInit = {}) =>
  fetch(`/${HIERARCHY}`, {
    method: 'GET',
  }).then((res) => res.json());

export const getFinanceType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + FINANCE_TYPE, {
    method: 'GET',
  }).then((res) => res.json());

export const getTiedStatus: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + TIED_STATUS, {
    method: 'GET',
  }).then((res) => res.json());

export const getTransactionType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + TRANSACTION_TYPE, {
    method: 'GET',
  }).then((res) => res.json());

export const getdocumentLinkCategory: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + DOCUMENT_LINK_CATEGORY, {
    method: 'GET',
  }).then((res) => res.json());

export const getIatiVersion: Endpoint = (params: RequestInit = {}) =>
  fetch(`/${IATI_VERSION}`, {
    method: 'GET',
  }).then((res) => res.json());

export const getLanguage: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + LANGUAGE, {
    method: 'GET',
  }).then((res) => res.json());

export const getTransactionFlowType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + TRANSACTION_FLOW_TYPE, {
    method: 'GET',
  }).then((res) => res.json());

export const getTransactionTiedStatus: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + TRANSACTION_TIED_STATUS, {
    method: 'GET',
  }).then((res) => res.json());

export const getHumanitarian: Endpoint = (params: RequestInit = {}) =>
  fetch('/data/humanitarian.json', {
    method: 'GET',
  }).then((res) => res.json());

export const getHumanitarianScope: Endpoint = (params: RequestInit = {}) =>
  fetch('/data/humanitarianScope.json', {
    method: 'GET',
  }).then((res) => res.json());

export const getHumanitarianScopeVocab: Endpoint = (params: RequestInit = {}) =>
  fetch('/data/humanitarianScopeVocab.json', {
    method: 'GET',
  }).then((res) => res.json());

export const getTransactionHumanitarian: Endpoint = (
  params: RequestInit = {}
) =>
  fetch('/data/humanitarian.json', {
    method: 'GET',
  }).then((res) => res.json());

export const getOtherIdentifierType: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + OTHER_IDENTIFIER_TYPE, {
    method: 'GET',
  }).then((res) => res.json());

export const getSecondaryReporter: Endpoint = (params: RequestInit = {}) =>
  fetch('/data/secondary_reporter.json', {
    method: 'GET',
  }).then((res) => res.json());

const getData = (params: RequestInit = {}, host: string, path: number) =>
  fetch(HOSTNAME + REGIONS, {
    method: 'GET',
    ...params,
  }).then((res) => res.json());

export { getData };
