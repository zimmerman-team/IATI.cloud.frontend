import { FragmentConfigType } from 'app/modules/QueryBuilder/fragments/common';
import MultiSelectChip from 'app/components/inputs/selects/MultiSelectChip';
import React from 'react';

export const fragmentConfig = {
  name: 'Who',
  description:
    'First you need to find the organisation or organisations you want data about. Depending if you want one specific organsation or a wieder net. You can use the filters to narrow the data you want.',
  fields: [
    {
      label: 'Organisation type',
      helperTextLink: 'Code List',
      helperTextUrl:
        'http://reference.iatistandard.org/203/codelists/OrganisationType/',
      placeholder: 'All (24)',
      className: 'organisationTypeSelect',
      name: 'organisationTypes'
    }
  ]
};
