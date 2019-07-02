import { useStore } from 'app/store';

// @ts-ignore
// export const OrganisationType = useStore(
//   state => state.organisationTypes.data
// ).map(options => ({ code: options.code, name: options.name }));

interface OptionType {
  label: string;
  value: string;
}
// export const OrganisationType: OptionType[] = [
//   { label: 'Government' },
//   { label: 'NGO' }
// ].map(suggestion => ({
//   value: suggestion.label,
//   label: suggestion.label
// }));

export const optionsOrganisationName: OptionType[] = [
  { label: '3F International' },
  { label: '50 Eight Limited' },
  { label: 'Aasaman Nepal' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

export const optionsSector: OptionType[] = [
  { label: 'Basic drinking water supply and basic sanitation' },
  { label: 'Agricultural development' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

export const optionsFilter: OptionType[] = [
  { label: 'Activities' },
  { label: 'Publishers' },
  { label: 'Organisations' },
  { label: 'Publishers' },
  { label: 'Results' },
  { label: 'Locations' },
  { label: 'Cities' },
  { label: 'Datasets' },
  { label: 'Sectors' },
  { label: 'Countries' },
  { label: 'Transactions' },
  { label: 'Regions' },
  { label: 'Budgets' },
  { label: 'Codelists' },
  { label: 'Chains' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));
