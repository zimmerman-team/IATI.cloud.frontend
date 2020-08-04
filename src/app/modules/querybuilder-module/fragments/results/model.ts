//cc:query builder module fragments#; query builder fragments - core filters;fragment model
import { FragmentBaseModel } from 'app/modules/querybuilder-module/fragments/index';
import { Column } from '@devexpress/dx-react-grid';

export const fragmentConfig: FragmentBaseModel = {
  name: 'Files',
  description: 'Lorem',
};

export const defaultActivityTableCols: Column[] = [
  { name: 'iati_identifier', title: 'IATI Identifier' },
  { name: 'title_narrative', title: 'Title' },
  { name: 'reporting_org_narrative', title: 'Reporting Org' },
  { name: 'recipient_country_name', title: 'Country' },
];

export const defaultTransactionTableCols: Column[] = [
  { name: 'iati_identifier', title: 'IATI Identifier' },
  { name: 'title_narrative', title: 'Title' },
  {
    name: 'transaction_provider_org_narrative',
    title: 'Transaction Provider Org',
  },
  {
    name: 'transaction_receiver_org_narrative',
    title: 'Transaction Receiver Org',
  },
];

export const defaultBudgetTableCols: Column[] = [
  { name: 'iati_identifier', title: 'IATI Identifier' },
  { name: 'reporting_org_narrative', title: 'Reporting Org' },
  { name: 'reporting_org_type', title: 'Reporting Org Type' },
  { name: 'budget_type', title: 'Budget Type' },
];
