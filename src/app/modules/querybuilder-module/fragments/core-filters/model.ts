//cc:query builder module fragments#; query builder fragments - core filters;fragment model
import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';
import { OrganisationModel } from 'app/state/models';
import { FragmentBaseModel } from 'app/modules/querybuilder-module/fragments';

type SelectModel = {
  label?: string;
  helperText?: string;
  helperTextLink?: string;
  helperTextUrl?: string;
  placeholder?: string;
  className: string;
  name: string;
  value?: any;
  options?: any;
  onChange?: any;
  getOptionLabel?: getOptionLabel;
  getOptionValue?: getOptionValue;
  data_cy?: string;
};

interface FragmentModel extends FragmentBaseModel {
  organisationTypes: SelectModel;
  organisationSector: SelectModel;
  organisations: SelectModel;
  secondaryReporter: SelectModel;
  sectorCategory: SelectModel;
  sectorVocabulary: SelectModel;
  recipientCountry: SelectModel;
  recipientRegion: SelectModel;
  activityPeriode: SelectModel;
}

export const fragmentConfig: FragmentModel = {
  name: 'Who',
  description:
    'First you need to find the organisation or organisations you want data about. Depending if you want one specific organsation or a wieder net. You can use the filters to narrow the data you want.',
  organisations: {
    label: 'Reporting Organisation',
    className: 'organisationNameSelect',
    name: 'organisations',
    data_cy: 'organisations',
    helperText: 'e.g. AT-12 = Ministry of Interior.',
    // helperTextLink: 'See list',
    // helperTextUrl: 'http://reference.iatistandard.org/203/codelists/Sector/',
    placeholder: 'All (0)',
    getOptionLabel: (option: OrganisationModel) =>
      `${option.reporting_organisation} (${option.reporting_organisation_identifier})`,
    getOptionValue: (option: OrganisationModel) =>
      option.reporting_organisation_identifier,
  },
  organisationTypes: {
    label: 'Type of Reporting Organisation',
    helperTextLink: 'Code List',
    helperTextUrl:
      'http://reference.iatistandard.org/203/codelists/OrganisationType/',
    placeholder: 'All (0)',
    className: 'organisationTypeSelect',
    name: 'organisationTypes',
    data_cy: 'organisation-type-select',
    getOptionLabel: (option) => `${option.code}: ${option.name}`,
    getOptionValue: (option) => option.code,
  },
  secondaryReporter: {
    label: 'Secondary Reporter?',
    placeholder: 'Choose',
    className: 'secondaryReporterSelect',
    name: 'secondaryReporter',
    data_cy: 'secondary-reporter',
    getOptionLabel: (option) => `${option.code}: ${option.name}`,
    getOptionValue: (option) => option.code,
  },
  organisationSector: {
    label: 'Sector',
    helperTextLink: 'DAC 5 digit',
    helperTextUrl: 'http://reference.iatistandard.org/203/codelists/Sector/',
    placeholder: 'All (0)',
    className: 'organisationSectorSelect',
    name: 'organisationSector',
    data_cy: 'organisation-sector',
    getOptionLabel: (option) => `${option.code}: ${option.name}`,
    getOptionValue: (option) => option.code,
  },
  sectorCategory: {
    label: 'Sector Category',
    helperTextLink: 'DAC 3 digit',
    helperTextUrl:
      'http://reference.iatistandard.org/203/codelists/SectorCategory/',
    placeholder: 'All (0)',
    className: 'sectorCategorySelect',
    name: 'sectorCategory',
    data_cy: 'sector-category',
    getOptionLabel: (option) => `${option.code}: ${option.name}`,
    getOptionValue: (option) => option.code,
  },
  sectorVocabulary: {
    label: 'Sector Vocabulary',
    helperTextUrl:
      'http://reference.iatistandard.org/203/codelists/SectorVocabulary/',
    placeholder: 'All (0)',
    className: 'sectorVocabularySelect',
    name: 'sectorVocabulary',
    data_cy: 'sector-vocabulary',
    getOptionLabel: (option) => `${option.code}: ${option.name}`,
    getOptionValue: (option) => option.code,
  },
  recipientCountry: {
    label: 'Recipient Country',
    placeholder: 'All (0)',
    className: 'recipientCountrySelect',
    name: 'recipientCountry',
    data_cy: 'recipient-country',
    getOptionLabel: (option) =>
      `${option.recipient_country.code}: ${option.recipient_country.name}`,
    getOptionValue: (option) => option.recipient_country.code,
  },
  recipientRegion: {
    label: 'Recipient Region',
    placeholder: 'All (0)',
    className: 'recipientRegionSelect',
    name: 'recipientRegion',
    data_cy: 'recipient-region',
    getOptionLabel: (option) =>
      `${option.recipient_region.code}: ${option.recipient_region.name}`,
    getOptionValue: (option) => option.recipient_region.code,
  },
  activityPeriode: {
    label: 'Must have activity period',
    placeholder: 'No',
    className: 'activityPeriode',
    name: 'activityPeriode',
    data_cy: 'activity-period',
    options: ['Yes', 'No'],
    getOptionLabel: (option) => option,
    getOptionValue: (option) => option,
  },
};
