import {
  HOSTNAME,
  SECTORS,
  ORGANISATION_TYPES,
  ORGANISATIONS,
  SECTOR_CATEGORIES,
  COUNTRIES,
  REGIONS,
  ACTIVITY_STATUS,
  ACTIVITY_SCOPE,
  PARTICIPATING_ORGS,
} from 'app/state/api';

import { Endpoint } from 'app/state/interfaces/Endpoint';

/* todo: make fetch logic re-usable  */
export const getOrganisationTypes: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ORGANISATION_TYPES, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getSectors: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + SECTORS, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getOrganisations: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ORGANISATIONS, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getCountries: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + COUNTRIES, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getSectorCategories: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + SECTOR_CATEGORIES, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getRegions: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + REGIONS, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getActivityStatus: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ACTIVITY_STATUS, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getParticipatingOrgs: Endpoint = (params: RequestInit = {}) =>
  fetch('/' + PARTICIPATING_ORGS, {
    // todo: add HOSTNAME when retrieve data from API
    method: 'GET',
    ...params,
  }).then(res => res.json());

export const getActivityScope: Endpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ACTIVITY_SCOPE, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

const getData = (params: RequestInit = {}, host: string, path: number) =>
  fetch(HOSTNAME + REGIONS, {
    method: 'GET',
    ...params,
  }).then(res => res.json());

export { getData };
