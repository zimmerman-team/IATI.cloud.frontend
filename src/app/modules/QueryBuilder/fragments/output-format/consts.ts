export const activityFields = [
  // { code: 'url', name: 'URL' },
  //{ code: 'id', name: 'ID' },
  { code: 'iati_identifier', name: 'IATI Identifier' },
  { code: 'reporting_org', name: 'Reporting Organization' },
  { code: 'title', name: 'Title' },
  { code: 'description', name: 'Descriptions' },
  { code: 'participating_org', name: 'Participating Organization' },
  { code: 'other_identifier', name: 'Other Identifier' },
  { code: 'activity_status_code', name: 'Activity Status' },
  // { code: 'budget_not_provided', name: 'Budget not provided' },
  { code: 'activity_date', name: 'Activity Dates' },
  { code: 'contact_info', name: 'Contact Information' },
  { code: 'activity_scope_code', name: 'Activity Scope' },
  { code: 'recipient_country', name: 'Recipient Countries' },
  { code: 'recipient_region', name: 'Recipient Regions' },
  { code: 'location', name: 'Locations' },
  { code: 'sector', name: 'Sectors' },
  // { code: 'tag', name: 'Tag' },
  // { code: 'country_budget_items', name: 'Country Budget Items' },
  { code: 'humanitarian', name: 'Humanitarian' },
  { code: 'humanitarian_scope', name: 'Humanitarian Scope' },
  // { code: 'policy_markers', name: 'Policy Markers' },
  { code: 'collaboration_type_code', name: 'Collaboration Type' },
  { code: 'default_flow_type_code', name: 'Default Flow Type' },
  { code: 'default_finance_type_code', name: 'Default Finance Type' },
  { code: 'default_aid_type', name: 'Default Aid Type' },
  { code: 'default_tied_status_code', name: 'Default Aid Status' },
  { code: 'budget', name: 'Budgets' },
  { code: 'planned_disbursement', name: 'Planned Disbursements' },
  { code: 'capital_spend_percentage', name: 'Capital Spend' },
  { code: 'transaction', name: 'Transactions' },
  // { code: 'related_transactions', name: 'Related Transactions' },
  { code: 'document_link_url', name: 'Document Links' },
  { code: 'related_activity_ref', name: 'Related Activities' },
  // { code: 'legacy_data', name: 'Legacy Data' },
  { code: 'conditions_condition_narrative', name: 'Conditions' },
  // { code: 'results', name: 'Results' },
  // { code: 'crs_add', name: 'CRS Add' },
  // { code: 'fss', name: 'FSS' },
  { code: 'last_updated_datetime', name: 'Last Updated Datetime' },
  // { code: 'xml_lang', name: 'XML language' },
  { code: 'default_currency', name: 'Default Currency' },
  { code: 'hierarchy', name: 'Hierarchy' },
  // { code: 'linked_data_uri', name: 'Linked Data URI' },
  { code: 'reporting_org_secondary_reporter', name: 'Secondary reporter' },
  // { code: 'aggregations', name: 'Aggregations' },
  // { code: 'dataset', name: 'Dataset' },
  // { code: 'publisher', name: 'Publisher' },
  // { code: 'published_state', name: 'Published state' },
  { code: 'transaction_type', name: 'Transaction Types' },
];

export const transactionFields = [
  //{ code: 'iati_identifier', name: 'IATI Identifier' },
  { code: 'transaction_sector_code', name: 'Sectors' },
  { code: 'transaction_recipient_country_code', name: 'Recipient Countries' },
  { code: 'transaction_recipient_region_code', name: 'Recipient Regions' },
  //{ code: 'id', name: 'ID' },
  { code: 'transaction_type', name: 'Type' },
  { code: 'transaction_value', name: 'Value' },
  { code: 'transaction_value_currency', name: 'Currency' },
  //{ code: 'reporting_org_narrative', name: 'Reporting Organization' },
];

export const budgetFields = [
  { code: 'iati_identifier', name: 'IATI Identifier' },
  { code: 'transaction_sector_code', name: 'Sectors' },
  { code: 'transaction_recipient_country_code', name: 'Recipient Countries' },
  { code: 'transaction_recipient_region_code', name: 'Recipient Regions' },
  { code: 'id', name: 'ID' },
  { code: 'transaction_type', name: 'Type' },
  { code: 'transaction_value', name: 'Value' },
  { code: 'transaction_value_date', name: 'Value Date' },
];

export const groupedOptions = [
  {
    label: 'Activities',
    options: activityFields,
    tip: " (change 'Row format' selection to 'Each Unique Activity')",
  },
  {
    label: 'Transactions',
    options: transactionFields,
    tip: " (change 'Row format' selection to 'Each Financial Transaction')",
  },
  // {
  //   label: 'Budgets',
  //   options: budgetFields,
  //   tip: " (change 'Row format' selection to 'Each Budget In Defined Periods')",
  // },
];

export const activityOptions = [
  {
    label: 'Activities',
    options: activityFields,
    tip: " (change 'Row format' selection to 'Each Unique Activity')",
  },
];

export const transactionOptions = [
  {
    label: 'Transactions',
    options: transactionFields,
    tip: " (change 'Row format' selection to 'Each Financial Transaction')",
  },
];
