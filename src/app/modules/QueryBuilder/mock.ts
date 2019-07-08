// import { getOptionLabel, getOptionValue } from 'react-select/lib/builtins';

interface OptionType {
  code: string;
  name: string;
}

export const optionsOrganisationType: OptionType[] = [
  { name: 'Government', code: '11' },
  { name: 'NGO', code: '33' }
].map(suggestion => ({
  code: suggestion.code,
  name: suggestion.name
}));

export const optionsOrganisationName: OptionType[] = [
  { name: '3F International' },
  { name: '50 Eight Limited' },
  { name: 'Aasaman Nepal' }
].map(suggestion => ({
  code: suggestion.name,
  name: suggestion.name
}));

export const optionsSector: OptionType[] = [
  { name: 'Basic drinking water supply and basic sanitation' },
  { name: 'Agricultural development' }
].map(suggestion => ({
  code: suggestion.name,
  name: suggestion.name
}));

export const optionsFilter: OptionType[] = [
  { name: 'Activities' },
  { name: 'Publishers' },
  { name: 'Organisations' },
  { name: 'Publishers' },
  { name: 'Results' },
  { name: 'Locations' },
  { name: 'Cities' },
  { name: 'Datasets' },
  { name: 'Sectors' },
  { name: 'Countries' },
  { name: 'Transactions' },
  { name: 'Regions' },
  { name: 'Budgets' },
  { name: 'Codelists' },
  { name: 'Chains' }
].map(suggestion => ({
  code: suggestion.name,
  name: suggestion.name
}));
