interface RootObject {
  count: number;
  next: string;
  previous: null;
  results: IOrganisation[];
}
export interface IOrganisation {
  url: string;
  last_updated_datetime: null | string;
  organisation_identifier: string;
  name: IOrganisationName;
}
interface IOrganisationName {
  narratives: IOrganisationNarrativesItem[];
}
interface IOrganisationNarrativesItem {
  text: string;
  language: IOrganisationLanguage;
}
interface IOrganisationLanguage {
  code: string;
  name: string;
}
