import { IEndpoint, HOSTNAME, PATH } from 'app/api';

/* todo: move to models file */

/* todo: make fetch logic re-usable  */
export const getOrganisationTypes: IEndpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + PATH.ORGANISATION_TYPES, {
    method: 'GET',
    ...params
  }).then(res => res.json());

export const getSectors: IEndpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + PATH.SECTOR, {
    method: 'GET',
    ...params
  }).then(res => res.json());

export const getOrganisations: IEndpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + PATH.ORGANISATIONS, {
    method: 'GET',
    ...params
  }).then(res => res.json());

