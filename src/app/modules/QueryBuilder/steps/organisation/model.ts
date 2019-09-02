import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';
import { OrganisationModel } from 'app/state/models';
import { FragmentBaseModel } from 'app/modules/QueryBuilder/fragments/index';

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
};

interface FragmentModel extends FragmentBaseModel {
  organisationTypes: SelectModel;
  organisationSector: SelectModel;
  organisations: SelectModel;
}

export const fragmentConfig: FragmentModel = {
  name: 'Who',
  description:
    'First you need to find the organisation or organisations you want data about. Depending if you want one specific organsation or a wieder net. You can use the filters to narrow the data you want.',
  organisationTypes: {
    label: 'Organisation type',
    helperTextLink: 'Code List',
    helperTextUrl:
      'http://reference.iatistandard.org/203/codelists/OrganisationType/',
    placeholder: 'placeholder',
    className: 'organisationTypeSelect',
    name: 'organisationTypes',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  organisationSector: {
    label: 'Organisation sector',
    helperText: 'E.g. AT-12 = Ministry of Interior.',
    helperTextLink: 'See list',
    helperTextUrl: 'http://reference.iatistandard.org/203/codelists/Sector/',
    placeholder: 'All (24)',
    className: 'organisationSectorSelect',
    name: 'organisationSector',
    getOptionLabel: option => `${option.code}: ${option.name}`,
    getOptionValue: option => option.code,
  },
  organisations: {
    label: 'Organisation name',
    className: 'organisationNameSelect',
    name: 'organisations',
    helperText: 'E.g. AT-12 = Ministry of Interior.',
    helperTextLink: 'See list',
    helperTextUrl: 'http://reference.iatistandard.org/203/codelists/Sector/',
    placeholder: 'All (24)',
    getOptionLabel: (option: OrganisationModel) =>
      `${option.organisation_identifier}: ${option.name.narratives[0].text}`,
    getOptionValue: (option: OrganisationModel) =>
      option.organisation_identifier,
  },
};
