type root = {
  count: number;
  next: string;
  previous: null;
  results: OrganisationModel[];
};

export type OrganisationModel = {
  reporting_organisation_identifier: string;
  reporting_organisation: string;
};
type OrganisationName = {
  narratives: OrganisationNarrativesItem[];
};
type OrganisationNarrativesItem = {
  text: string;
  language: OrganisationLanguage;
};
type OrganisationLanguage = {
  code: string;
  name: string;
};
