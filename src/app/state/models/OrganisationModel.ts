export interface OrganisationModel {
  reporting_organisation_identifier: string;
  reporting_organisation: string;
}
interface OrganisationName {
  narratives: OrganisationNarrativesItem[];
}
interface OrganisationNarrativesItem {
  text: string;
  language: OrganisationLanguage;
}
interface OrganisationLanguage {
  code: string;
  name: string;
}
