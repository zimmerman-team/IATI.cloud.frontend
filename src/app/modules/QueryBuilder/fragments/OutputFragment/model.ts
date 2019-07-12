import { FragmentBaseModel } from 'app/modules/QueryBuilder/fragments';
import { RadioButtonsGroupModel } from 'app/components/inputs/radiobuttons/RadioButtonGroup/index';

interface FragmentModel extends FragmentBaseModel {
  groups: RadioButtonsGroupModel[];
}

export const fragmentConfig: FragmentModel = {
  name: 'Output format',
  description:
    'You can use default, but these options allow you to configure the way in which your data is disaggregated.',
  groups: [
    {
      groupID: 'outputFormat',
      title: 'Choose format',
      tip: 'Lorem ipsum dolor simet. Empty.',
      items: [
        {
          value: '0',
          label: 'One activity per row',
        },
        {
          value: '1',
          label: 'One transaction per row',
        },
        {
          value: '2',
          label: ' One budget per row',
        },
      ],
    },
    {
      groupID: 'repeatRows',
      title: 'Repeat rows?',
      tip: 'Lorem ipsum dolor simet. Empty.',
      items: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Multi-sector expansion',
        },
        {
          value: '2',
          label: 'Multi-country expansion',
        },
      ],
    },
    {
      groupID: 'sampleSize',
      title: 'Choose sample size',
      tip: 'Lorem ipsum dolor simet. Empty.',
      items: [
        {
          value: '0',
          label: '50 rows',
        },
        {
          value: '1',
          label: 'Entire selection',
        },
      ],
    },
  ],
};
