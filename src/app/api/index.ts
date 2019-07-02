export type IEndpoint = <T>(params?: RequestInit) => Promise<T>;

export const HOSTNAME = 'https://store.staging.iati.cloud/';

export enum PATH {
  ORGANISATION_TYPES = 'api/codelists/OrganisationType/?format=json',
  SECTOR = 'api/codelists/Sector/?format=json',
  ORGANISATIONS = 'api/organisations/?format=json'
}
