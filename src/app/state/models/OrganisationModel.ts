type root = {
  count: number;
  next: string;
  previous: null;
  results: OrganisationModel[];
};

export type OrganisationModel = {
  url: string;
  last_updated_datetime: null | string;
  organisation_identifier: string;
  name: OrganisationName;
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
