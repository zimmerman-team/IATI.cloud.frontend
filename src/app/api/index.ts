export type IEndpoint = <T>(params?: RequestInit) => Promise<T>;

console.log('joe', process.env.NODE_ENV);

export const ORGANISATION_TYPES =
  process.env.NODE_ENV === 'development'
    ? 'data/organisation_types.json'
    : 'api/codelists/OrganisationType/?format=json';

export const SECTORS =
  process.env.NODE_ENV === 'development'
    ? 'data/sectors.json'
    : 'api/codelists/Sector/?format=json';

export const ORGANISATIONS =
  process.env.NODE_ENV === 'development'
    ? 'data/organisations.json'
    : 'api/organisations/?format=json';

export const HOSTNAME =
  process.env.NODE_ENV === 'development'
    ? '/'
    : 'https://store.staging.iati.cloud/';
