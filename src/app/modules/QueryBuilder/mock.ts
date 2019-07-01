interface OptionType {
  label: string;
  value: string;
}

export const optionsOrganisationType: OptionType[] = [
  { label: 'Government' },
  { label: 'NGO' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

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
  { label: 'activities' },
  { label: 'publishers' },
  { label: 'organisations' },
  { label: 'publishers' },
  { label: 'results' },
  { label: 'locations' },
  { label: 'cities' },
  { label: 'datasets' },
  { label: 'sectors' },
  { label: 'countries' },
  { label: 'transactions' },
  { label: 'regions' },
  { label: 'budgets' },
  { label: 'codelists' },
  { label: 'chains' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));
