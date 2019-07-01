import {
  HOSTNAME,
  SECTORS,
  ORGANISATION_TYPES,
  ORGANISATIONS,
  IEndpoint
} from 'app/api';

/* todo: move to models file */

/* todo: make fetch logic re-usable  */
export const getOrganisationTypes: IEndpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ORGANISATION_TYPES, {
    method: 'GET',
    ...params
  }).then(res => res.json());

export const getSectors: IEndpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + SECTORS, {
    method: 'GET',
    ...params
  }).then(res => res.json());

export const getOrganisations: IEndpoint = (params: RequestInit = {}) =>
  fetch(HOSTNAME + ORGANISATIONS, {
    method: 'GET',
    ...params
  }).then(res => res.json());
