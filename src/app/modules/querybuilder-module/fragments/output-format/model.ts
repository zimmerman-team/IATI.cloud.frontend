//cc:query builder module fragments#; query builder fragments - output format;fragment model
import {
  activityOptions,
  groupedOptions,
  transactionOptions,
} from 'app/modules/querybuilder-module/fragments/output-format/consts';
import { FragmentBaseModel } from 'app/modules/querybuilder-module/fragments';

interface FragmentModel extends FragmentBaseModel {
  getGroups: Function;
  fieldsSelect: any;
  fieldsSelectTransactions?: any;
}

export const getGroupOptions = (store) => {
  const rowFormatSel = store.get('rowFormat');
  const gOpts = groupedOptions.map((group) => {
    const value =
      (rowFormatSel === 'activity' && group.label === 'Activities') ||
      (rowFormatSel === 'transaction' && group.label === 'Transactions') ||
      (rowFormatSel === 'budget' && group.label === 'Budgets')
        ? 0
        : 1;
    return {
      label: `${group.label}${value === 0 ? '' : group.tip}`,
      options: group.options.map((option) => ({
        ...option,
        isDisabled: value,
      })),
    };
  });
  return gOpts;
};

export const getActivityOptions = (store) => {
  const rowFormatSel = store.get('rowFormat');
  const gOpts = activityOptions.map((group) => {
    const value =
      rowFormatSel === 'activity' && group.label === 'Activities' ? 0 : 1;
    return {
      label: `${group.label}${value === 0 ? '' : group.tip}`,
      options: group.options.map((option) => ({
        ...option,
        isDisabled: value,
      })),
    };
  });
  return gOpts;
};

export const getTransactionOptions = (store) => {
  const rowFormatSel = store.get('rowFormat');
  const gOpts = transactionOptions.map((group) => {
    const value =
      rowFormatSel === 'transaction' && group.label === 'Transactions' ? 0 : 1;
    return {
      label: `${group.label}${value === 0 ? '' : group.tip}`,
      options: group.options.map((option) => ({
        ...option,
        isDisabled: value,
      })),
    };
  });
  return gOpts;
};

export const fragmentConfig: FragmentModel = {
  name: 'Output format',
  description:
    'You can use default, but these options allow you to configure the way in which your data is disaggregated.',
  getGroups: (store) => [
    {
      onChange: (e) => {
        // store.set('fields')([
        //   { code: 'iati_identifier', name: 'IATI Identifier' },
        //   { code: 'sectors', name: 'Sectors' },
        //   { code: 'recipient_countries', name: 'Recipient Countries' },
        //   { code: 'recipient_regions', name: 'Recipient Regions' },
        // ]);

        store.set('fields')([]);
        store.set('rowFormat')(e.target.value);

        if (e.target.value !== 'activity') {
          store.set('repeatRows')('0');
        }

        // console.log(`onChange: ${e.target.value}`);
      },
      value: store.get('rowFormat'),
      groupID: 'rowFormat',
      title: 'Row format:',
      tip:
        'Choose if you would like to output your data with: \n - One activity per row \n - One transaction per row \n - One budget period per row',
      items: [
        {
          value: 'activity',
          label: 'Each unique Activity',
        },
        {
          value: 'transaction',
          label: 'Each financial Transaction',
        },
        {
          value: 'budget',
          label: ' Each Budget in defined periods',
        },
      ],
    },
    {
      onChange: (e) => store.set('repeatRows')(e.target.value),
      value: store.get('repeatRows'),
      groupID: 'repeatRows',
      title: 'Repeat rows',
      tip: 'Repeat each activity/transaction per Country or Sector',
      items: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: 'sector',
          label: 'Multi-sector expansion',
        },
        {
          value: 'country',
          label: 'Multi-country expansion',
        },
      ],
    },
  ],
  fieldsSelect: {
    name: 'dataFields',
    className: 'fieldsSelect',
    placeholder: 'Select data fields',
    label: 'Column elements to include: activities',
    getOptionValue: (option: any) => option.code,
    getOptionLabel: (option: any) => option.name,
    helperTextLink: 'See IATI documentation for full list of possible elements',
    helperTextUrl:
      'http://reference.iatistandard.org/203/activity-standard/iati-activities/iati-activity/',
  },
  fieldsSelectTransactions: {
    name: 'dataFields2',
    className: 'fieldsSelect2',
    placeholder: 'Select data fields',
    label: 'Column elements to include: transactions',
    getOptionValue: (option: any) => option.code,
    getOptionLabel: (option: any) => option.name,
    helperTextLink: 'See IATI documentation for full list of possible elements',
    helperTextUrl:
      'http://reference.iatistandard.org/203/activity-standard/iati-activities/iati-activity/',
  },
};
