// import { getOptionLabel, getOptionValue } from 'react-select/lib/builtins';

interface OptionType {
  code: string;
  name: string;
}

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
