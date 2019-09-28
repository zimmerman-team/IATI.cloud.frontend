import { DocStoreModel } from 'app/modules/Documentation/state/model';

export const docData = {
  collection: {
    info: {
      _postman_id: 'c07eebd3-61b2-47b4-9bfd-1bac7ec96c9f',
      name: 'API Documentation',
      description:
        'This API provides programmatic access to read IATI data. The API responses are available in JSON, XML, CSV and XLS. By default the API response provides JSON ouput with the &format=JSON construct, but if you woulde like to output XML, CSV or XLS, you nee to change that construct into that format.\n\n# Available endpoints\n\n* Activities: `api/activities/`\n* Budget aggregation: `/api/budgets/aggregations`\n* Chains: `/api/chains`\n* Codelists: `/api/publishers`\n* Countries: `/api/countries`\n* Current branch: `/api/branch`\n* Datasets: `/api/datasets`\n* Locations: `/api/locations`\n* Organisations: `/api/organisations`\n* Publishers: `/api/publishers`\n* Regions: `/api/regions`\n* Results aggregations: `/api/results/aggregations`\n* Sectors: `/api/sectors`\n* Transactions: `/api/transactions`\n\n\n# XML export\nIf you require XML format from the API, simply use the format  &format=XML in your call. \n\n# CSV export\nIf you require CSV format from the API, simply use the format  &format=CSV in your call. \n\n# XLS export\nIf you require XLS format from the API, simply use the format  &format=XLS in your call. \n\nNot all the API calls have multi format support.\n',
      schema:
        'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    },
    item: [
      {
        name: 'Activity List ',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'has_{field_name} (optional)',
                item: [
                  {
                    name: 'has_crs_add (optional)',
                    _postman_id: '06dd9650-7c64-4be0-9b9c-6c945e767f7f',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw:
                          '{{url}}/api/activities/?has_crs_add=True&fields=title,crs_add&format=json',
                        host: ['{{url}}'],
                        path: ['api', 'activities', ''],
                        query: [
                          {
                            key: 'has_crs_add',
                            value: 'True',
                          },
                          {
                            key: 'fields',
                            value: 'title,crs_add',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                      },
                      description:
                        'To filter `activities` by the fact whether there is a `crs_add` in it. The parameter value is boolean `True` or `False`.',
                    },
                  },
                  {
                    name: 'has_other_identifier (optional)',
                    _postman_id: 'd6c2a21e-132f-4b55-bb8f-8becb7385c57',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw:
                          '{{url}}/api/activities/?has_other_identifier=True&fields=title,other_identifier&format=json',
                        host: ['{{url}}'],
                        path: ['api', 'activities', ''],
                        query: [
                          {
                            key: 'has_other_identifier',
                            value: 'True',
                          },
                          {
                            key: 'fields',
                            value: 'title,other_identifier',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                      },
                      description:
                        'To filter `activities` by the fact whether there is a `other_identifer` in it. The parameter value is boolean `True` or `False`.',
                    },
                  },
                  {
                    name: 'has_contact_info (optional)',
                    _postman_id: 'c8d60ba6-46b6-408f-ab73-375dfd1ad383',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw:
                          '{{url}}/api/activities/?has_contact_info=True&fields=title,contact_info&format=json',
                        host: ['{{url}}'],
                        path: ['api', 'activities', ''],
                        query: [
                          {
                            key: 'has_contact_info',
                            value: 'True',
                          },
                          {
                            key: 'fields',
                            value: 'title,contact_info',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                      },
                      description:
                        'To filter `activities` by the fact whether there is a `contact_info` in it. The parameter value is boolean `True` or `False`.',
                    },
                  },
                  {
                    name: 'has_activity_scope (optional)',
                    _postman_id: '8fe73454-a62a-42a0-a94b-77a6555800c7',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw:
                          '{{url}}/api/activities/?has_activity_scope=True&fields=title,activity_scope&format=json',
                        host: ['{{url}}'],
                        path: ['api', 'activities', ''],
                        query: [
                          {
                            key: 'has_activity_scope',
                            value: 'True',
                          },
                          {
                            key: 'fields',
                            value: 'title,activity_scope',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                      },
                    },
                  },
                  {
                    name: 'has_recipient_country (optional)',
                    _postman_id: '6cf2a29c-a81e-4c49-ac08-868e8faee5ee',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw:
                          '{{url}}/api/activities/?has_recipient_country=True&format=json',
                        host: ['{{url}}'],
                        path: ['api', 'activities', ''],
                        query: [
                          {
                            key: 'has_recipient_country',
                            value: 'True',
                          },
                          {
                            key: 'fields',
                            value: 'title',
                            disabled: true,
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                      },
                    },
                  },
                  {
                    name: 'has_recipient_region (optional)',
                    _postman_id: '8ebc02cc-123f-4e04-8009-0ad36897f0ef',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw:
                          '{{url}}/api/activities/?has_recipient_country=False&format=json',
                        host: ['{{url}}'],
                        path: ['api', 'activities', ''],
                        query: [
                          {
                            key: 'has_recipient_country',
                            value: 'False',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                      },
                    },
                  },
                ],
                _postman_id: 'dcfadf7b-89b3-4b91-ba0a-5fdbd06286dd',
                description:
                  'Only activities that have specified fields will return. The parameter value is boolean, `True` or `False`.\nThis filter can be applied on the following fields:\n- `crs_add`\n- `other_identifier`\n- `contact_info`\n- `activity_scope`\n- `recipient_country`\n- `recipient_region`\n- `location`\n- `sector`\n- `tag`\n- `country_budget_item`\n- `humanitarian_scope`\n- `policy_marker`\n- `collaboration_type`\n- `default_flow_type`\n- `default_finance_type`\n- `default_aid_type`\n- `default_tied_status`\n- `budget`\n- `planned_disbursement`\n- `capital_spend`\n- `document_link`\n- `related_activity`\n- `legacy_data`\n- `condition`\n- `result`\n- `fss`\n',
                _postman_isSubFolder: true,
              },
              {
                name: 'activity_scope(optional)',
                _postman_id: '76eb8233-6df9-42b0-8b9c-e4870a03e42a',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=activity_scope&format=json&activity_scope=2',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'activity_scope',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'activity_scope',
                        value: '2',
                      },
                    ],
                  },
                  description: 'Comma separated list of activity scope.',
                },
              },
              {
                name: 'recipient_country(optional)',
                _postman_id: '1f0ef862-9f4d-4b78-b7da-e6df2aef2749',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?format=json&recipient_country=SL,MM&fields=iati_identifier,title',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'recipient_country',
                        value: 'SL,MM',
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,title',
                      },
                    ],
                  },
                  description: 'Comma separated list of iso2 country codes.',
                },
              },
              {
                name: 'recipient_region(optional)',
                _postman_id: 'd28628f9-f8a4-4f31-8939-c340a795e90d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?format=json&fields=recipient_regions,title&recipient_region=998,589',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'recipient_regions,title',
                      },
                      {
                        key: 'recipient_region',
                        value: '998,589',
                      },
                    ],
                  },
                  description: 'Comma separated list of region codes.',
                },
              },
              {
                name: 'sector_code(optional)',
                _postman_id: 'b5e7a349-d070-4c2c-a7fe-4f3eec56f804',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?sector=41030&format=json&fields=title,sectors',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'sector',
                        value: '41030',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'title,sectors',
                      },
                    ],
                  },
                  description: 'Comma separated list of 5-digit sector codes.',
                },
              },
              {
                name: 'sector_category (optional)',
                _postman_id: '116625a0-8467-4460-8468-f17c1bdb07d4',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?sector_category=111&format=json&fields=title,sectors,id',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'sector_category',
                        value: '111',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'title,sectors,id',
                      },
                    ],
                  },
                },
              },
              {
                name: 'reporting_organisation_identifier (optional)',
                _postman_id: '6c145edc-d015-4d2b-9521-6e986f73baea',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation&format=json&reporting_organisation_identifier=DE-1',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                    ],
                  },
                  description:
                    'Comma separated list of reporting organisation IATI identifiers.',
                },
              },
              {
                name: 'participating_organisation(optional)',
                _postman_id: '3d465b34-16ce-4a27-bb02-b99a534e20de',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=title,participating_organisations&format=json&participating_organisation=AU-5',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'title,participating_organisations',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'participating_organisation',
                        value: 'AU-5',
                      },
                    ],
                  },
                  description:
                    'Comma separated list of participating organisation IATI identifiers.',
                },
              },
              {
                name: 'total_budget_lte(optional)',
                _postman_id: '3f20a2ca-0a7a-4457-9524-e435cbee9dc2',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?total_budget_lte=10000&fields=id,iati_identifier,budgets&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'total_budget_lte',
                        value: '10000',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier,budgets',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Less then or equal total budget value.',
                },
              },
              {
                name: 'total_budget_gte(optional)',
                _postman_id: '60f2a488-c7fe-4a38-8fb5-b2cf8a9937fc',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?total_budget_gte=1000000&fields=id,iati_identifier,budgets&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'total_budget_gte',
                        value: '1000000',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier,budgets',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Greater then or equal total budget value.',
                },
              },
              {
                name: 'planned_start_date_lte(optional)',
                _postman_id: 'c8b9d713-43b8-4b65-a5d7-034abaad22dd',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?planned_start_date_lte=2000-03-24&fields=id,iati_identifier&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'planned_start_date_lte',
                        value: '2000-03-24',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns activities earlier or equal to the given activity date.',
                },
              },
              {
                name: 'planned_start_date_gte(optional)',
                _postman_id: '1e862287-b7a5-4f5e-87cd-e9999a9ba746',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?planned_start_date_gte=2000-03-24&fields=id,iati_identifier&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'planned_start_date_gte',
                        value: '2000-03-24',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns activities later or equal to the given activity date.',
                },
              },
              {
                name: 'actual_start_date_lte(optional)',
                _postman_id: 'f0fcded3-d01d-4645-8acb-3da5725e03b6',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?actual_start_date_lte=2000-03-24&fields=id,iati_identifier&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'actual_start_date_lte',
                        value: '2000-03-24',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns activities earlier or equal to the given activity date.',
                },
              },
              {
                name: 'actual_start_date_gte(optional)',
                _postman_id: '4adee9c1-1215-407d-aad4-b0eb385292a0',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?actual_start_date_gte=2012-03-24&fields=id,iati_identifier&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'actual_start_date_gte',
                        value: '2012-03-24',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns activities earlier or equal to the given activity date.',
                },
              },
              {
                name: 'actual_end_date_lte (optional)',
                _postman_id: '9a4af9d1-0fd7-4f58-a95f-f47ea40a1db3',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?actual_end_date_lte=2000-03-24&fields=id,iati_identifier&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'actual_end_date_lte',
                        value: '2000-03-24',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns activities earlier or equal to the given activity date.',
                },
              },
              {
                name: 'actual_end_date_gte (optional)',
                _postman_id: 'cdffe295-e566-4373-8895-5ca79eb320ff',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?actual_end_date_gte=2000-03-24&fields=id,iati_identifier&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'actual_end_date_gte',
                        value: '2000-03-24',
                      },
                      {
                        key: 'fields',
                        value: 'id,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns activities later or equal to the given activity date.',
                },
              },
              {
                name: 'activity_status(optional)',
                _postman_id: '4a4f0c67-c927-442f-9afb-08dab76e7d03',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=activity_status&format=json&activity_status=1',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'activity_status',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'activity_status',
                        value: '1',
                      },
                    ],
                  },
                  description: 'Comma separated list of activity statuses.',
                },
              },
              {
                name: 'hierarchy(optional)',
                _postman_id: 'db5c4cbb-469b-47b4-af98-7edde934a726',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=hierarchy,iati_identifier&format=json&hierarchy=2',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'hierarchy,iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'hierarchy',
                        value: '2',
                      },
                    ],
                  },
                  description: 'Comma separated list of activity hierarchies.',
                },
              },
              {
                name: 'related_activity_id(optional)',
                _postman_id: 'c31b5791-db82-414b-bfe0-018384cec649',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?related_activity_id=BJ-IFU-6201300688700-RSG0123375-29295&fields=iati_identifier,related_activities&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'related_activity_id',
                        value: 'BJ-IFU-6201300688700-RSG0123375-29295',
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,related_activities',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    "Comma separated list of activity ids. Returns a list of all activities mentioning these activity id's.",
                },
              },
              {
                name: 'related_activity_type(optional)',
                _postman_id: 'fdd24e8e-f6f4-42b5-ba45-28a73815d584',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?related_activity_type=1&fields=iati_identifier,related_activities&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'related_activity_type',
                        value: '1',
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,related_activities',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Comma separated list of RelatedActivityType codes.',
                },
              },
              {
                name: 'related_activity_recipient_country(optional)',
                _postman_id: '0b656b38-d91d-4623-9a07-e3182d917d17',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?related_activity_recipient_country=MM&format=json&fields=iati_identifier,recipient_countries',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'related_activity_recipient_country',
                        value: 'MM',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,recipient_countries',
                      },
                    ],
                  },
                  description: 'Comma separated list of iso2 country codes.',
                },
              },
              {
                name: 'related_activity_recipient_region(optional)',
                _postman_id: '268655f1-9615-4869-8c24-6e6790ff5dcc',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?related_activity_recipient_region=89&format=json&fields=iati_identifier,recipient_regions',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'related_activity_recipient_region',
                        value: '89',
                        description: 'Europe',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,recipient_regions',
                      },
                    ],
                  },
                  description: 'Comma separated list of region codes.',
                },
              },
              {
                name: 'related_activity_sector(optional)',
                _postman_id: '987a0710-e671-422f-b0a5-24ea257baf82',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?related_activity_sector=41030&format=json&fields=iati_identifier,title',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'related_activity_sector',
                        value: '41030',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,title',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Comma separated list of 5-digit sector codes.',
                },
              },
              {
                name: 'transaction_provider_activity(optional)',
                _postman_id: 'c50f65ed-ac87-4bb6-b79e-d47658ade35d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?transaction_provider_activity=SE-0-UD/2017/14647/IU&fields=title,transactions&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'transaction_provider_activity',
                        value: 'SE-0-UD/2017/14647/IU',
                      },
                      {
                        key: 'fields',
                        value: 'title,transactions',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description: "Comma separated list of activity id's.",
                },
              },
              {
                name: 'transaction_date_year',
                _postman_id: '01a400ac-98d7-411a-95ad-df1e403dae00',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?transaction_date_year=2000&fields=title&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'transaction_date_year',
                        value: '2000',
                      },
                      {
                        key: 'fields',
                        value: 'title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Comma separated list of years in which the activity should have transactions.\n',
                },
              },
              {
                name: 'budget_not_provided (optional)',
                _postman_id: '20c49cc8-c3d1-4c67-947d-f8b82288bda0',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?budget_not_provided=3,1&fields=title,budget_not_provided&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'budget_not_provided',
                        value: '3,1',
                      },
                      {
                        key: 'fields',
                        value: 'title,budget_not_provided',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Comma seperated list of filtered by `budget_not_provided` code. `budget_not_provided` code can be:\n\n1 = Commercial Restrictions\n2 = Legal Restrictions\n3 = Rapid Onset Emergency',
                },
              },
              {
                name: 'humanitarian_scope_type (optional)',
                _postman_id: '66505a6b-729d-4127-aa64-5756dbe71ae3',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?humanitarian=1&fields=title,humanitarian&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'humanitarian',
                        value: '1',
                      },
                      {
                        key: 'fields',
                        value: 'title,humanitarian',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Return activities that are humanitarian related.',
                },
              },
              {
                name: 'fields (optional)',
                _postman_id: '2b2be05e-70f5-4799-b4d8-4767fa067b0b',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=title,crs_add&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'title,crs_add',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Current available fields to display are:\n* `url`\n* `id`\n* `iati_identifier`\n* `reporting_organisations`\n* `title`\n* `descriptions`\n* `participating_organisations`\n* `other_identifier`\n* `activity_status`\n* `budget_not_provided`\n* `activity_dates`\n* `contact_info`\n* `activity_scope`\n* `recipient_countries`\n* `recipient_regions`\n* `locations`\n* `sectors`\n* `tag`\n* `country_budget_items`\n* `humanitarian`\n* `humanitarian_scope`\n* `policy_markers`\n* `collaboration_type`\n* `default_flow_type`\n* `default_finance_type`\n* `default_aid_type`\n* `default_tied_status`\n* `budgets`\n* `planned_disbursements`\n* `capital_spend`\n* `transactions`\n* `related_transactions`\n* `document_links`\n* `related_activities`\n* `legacy_data`\n* `conditions`\n* `results`\n* `crs_add`\n* `fss`\n* `last_updated_datetime`\n* `xml_lang`\n* `default_currency`\n* `humanitarian`\n* `hierarchy`\n* `linked_data_uri`\n* `secondary_reporter`\n* `aggregations`\n* `dataset`\n* `publisher`\n* `published_state`\n* `transaction_types`\n\nYou can wrap them into a:\n\n`&fields=url,id,iati_identifier,reporting_organisation,title,descriptions,participating_organisations,other_identifier,activity_status,budget_not_provided,activity_dates,contact_info,activity_scope,recipient_countries,recipient_regions,locations,sectors,tags,country_budget_items,humanitarian,humanitarian_scope,policy_markers,collaboration_type,default_flow_type,default_finance_type,default_aid_type,default_tied_status,budgets,planned_disbursements,capital_spend,related_transactions,document_links,related_activities,legacy_data,conditions,results,crs_add,fss,last_updated_datetime,xml_lang,default_currency,humanitarian,hierarchy,linked_data_uri,secondary_reporter,aggregations,dataset,publisher,published_state,transaction_types`.\n\nTo cover them all in once. `&fields=all` is on the docket.\nto get activities that have certain elements, use `has_{field}=True` parameter. For example, to get activities that have `crs_add` element in them, the endpoint is: `{{url}}/api/activities/?has_crs_add=True&fields=crs_add&format=json`.',
                },
              },
              {
                name: 'sector_vocabulary (optional)',
                _postman_id: '741fc018-1474-460a-8b5c-346f7ed480d6',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '',
                  },
                },
              },
              {
                name: 'policy_marker (optional)',
                _postman_id: 'fbd37963-34ac-4c17-8eed-7582d9283568',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?policy_marker=1&fields=policy_markers&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'policy_marker',
                        value: '1',
                      },
                      {
                        key: 'fields',
                        value: 'policy_markers',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'participating_organisation_type (optional)',
                _postman_id: '87abf839-d8ed-4f1c-8627-49c0dc853c41',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?participating_organisation_type=24&fields=participating_organisations&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'participating_organisation_type',
                        value: '24',
                      },
                      {
                        key: 'fields',
                        value: 'participating_organisations',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'participating_organisation_role',
                        value: '4',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'participating_organisation_role (optional)',
                _postman_id: '3b9d9ecb-57f4-4d4b-a0b7-f782a6ddaaff',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?participating_organisation_role=4&fields=participating_organisations&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'participating_organisation_role',
                        value: '4',
                      },
                      {
                        key: 'fields',
                        value: 'participating_organisations',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
            ],
            _postman_id: 'a01662dc-60f7-400d-bc31-a3e66ff1caa3',
            _postman_isSubFolder: true,
          },
          {
            name: 'Text search',
            item: [
              {
                name: 'iati_identifier',
                _postman_id: 'c77dc66b-21eb-4c86-9697-6d3fd2134590',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=XI-IATI-EC_DEVCO-2012/295-533&q_fields=iati_identifier&format=json&fields=title',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'XI-IATI-EC_DEVCO-2012/295-533',
                      },
                      {
                        key: 'q_fields',
                        value: 'iati_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'q_lookup',
                        value: 'startswith',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'title',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in the IATI-identifier of `iati_idnetifier` field  evaluated as `iati_identifier` in `q_fields` parameter.',
                },
              },
              {
                name: 'title',
                _postman_id: 'd053e879-b58f-4847-b2a7-ab7ad3452a4a',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=FINANCIAL &q_fields=title&format=json&fields=title',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'FINANCIAL ',
                      },
                      {
                        key: 'q_fields',
                        value: 'title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'title',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `narratives` of `title` field evaluated as `title` in `q_fields` parameter.',
                },
              },
              {
                name: 'description',
                _postman_id: '90dfad3a-5e32-4ccd-8058-1e3b602b610d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=support&q_fields=description&format=json&fields=descriptions',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'support',
                        description: 'text to search for',
                      },
                      {
                        key: 'q_fields',
                        value: 'description',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'descriptions',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `narrative` of `description` field evaluated as `description` in `q_fields` parameter.',
                },
              },
              {
                name: 'recipient_country',
                _postman_id: '5e634e8a-2807-494b-9237-5862c9e20347',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=Myanmar&q_fields=recipient_country&format=json&fields=recipient_countries,title',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'Myanmar',
                      },
                      {
                        key: 'q_fields',
                        value: 'recipient_country',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'recipient_countries,title',
                      },
                      {
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `name` and `code` of `recipient_country` field evaluated as `recipient_country` in `q_fields` parameter.',
                },
              },
              {
                name: 'recipient_region',
                _postman_id: '0d7dbb89-fb71-4234-84bb-fdd9f834b305',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=998 Developing countries, unspecified&q_fields=recipient_region&format=json&fields=recipient_regions',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: '998 Developing countries, unspecified',
                      },
                      {
                        key: 'q_fields',
                        value: 'recipient_region',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'recipient_regions',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `name` and `code` of `recipient_region` field evaluated as `recipient_region` in `q_fields` parameter.',
                },
              },
              {
                name: 'reporting_org',
                _postman_id: '8934175a-92c6-4cf6-afa0-7fe41ed93f11',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=SE-0&q_fields=reporting_org&format=json&fields=reporting_organisation',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'SE-0',
                      },
                      {
                        key: 'q_fields',
                        value: 'reporting_org',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'reporting_organisation',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `ref` and `narrative` of `reporting_org` field evaluated as `reporting_org` in `q_fields` parameter.',
                },
              },
              {
                name: 'sector',
                _postman_id: 'eb827c7b-6605-4679-8157-6ddc54599f54',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=41030 Bio-diversity&q_fields=sector&format=json&fields=sectors',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: '41030 Bio-diversity',
                      },
                      {
                        key: 'q_fields',
                        value: 'sector',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'sectors',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `code` and `name` of `sector` field evaluated as `sector` in `q_fields` parameter.',
                },
              },
              {
                name: 'document_link',
                _postman_id: 'a1650a2e-da9c-4044-a9e6-88fe90b8f245',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=Pre&q_fields=document_link&format=json&fields=document_links',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'Pre',
                      },
                      {
                        key: 'q_fields',
                        value: 'document_link',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'document_links',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'document_link_category',
                        value: 'A01',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `url`, `category` and `narratives` of `document_link` field evaluated as `document_link` in `q_fields` parameter.',
                },
              },
              {
                name: 'participating_org',
                _postman_id: '891d543d-d3c1-42e3-9da6-32858174579a',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=DFID&q_fields=participating_org&format=json&fields=participating_organisations',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'DFID',
                      },
                      {
                        key: 'q_fields',
                        value: 'participating_org',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'participating_organisations',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `ref` and `narratives` of `participating_org` field evaluated as `participating_org` in `q_fields` parameter.',
                },
              },
              {
                name: 'other_identifier',
                _postman_id: 'a8877c4a-60ad-475b-a816-ec598ae56a96',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=iom&q_fields=other_identifier&format=json&fields=other_identifier',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'iom',
                      },
                      {
                        key: 'q_fields',
                        value: 'other_identifier',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'other_identifier',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `owner_org`, `ref` and `narratives` of `other_identifer` field evaluated as `other_identifer` in `q_fields` parameter.',
                },
              },
              {
                name: 'contact_info',
                _postman_id: '5dde62e1-76a3-4943-ac7f-a7c734883e15',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=iom&q_fields=contact_info&format=json&fields=contact_info',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'iom',
                      },
                      {
                        key: 'q_fields',
                        value: 'contact_info',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'contact_info',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in all `narratives` for `organisation`, `department`, `person_name`, `job_title` and `mailing_address`  evaluated  as `contact_info` in `q_fields` parameter.',
                },
              },
              {
                name: 'location',
                _postman_id: '64245d74-2e0e-4a99-b084-f061252626bf',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=UG&q_fields=location&format=json&fields=locations',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'UG',
                      },
                      {
                        key: 'q_fields',
                        value: 'location',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'locations',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `ref` of `location` field evaluated as `location` in `q_fields` parameter.',
                },
              },
              {
                name: 'country_budget_items',
                _postman_id: '21f59bba-b486-490e-98c0-8d559ac2e546',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=support&q_fields=country_budget_items&format=json&fields=country_budget_items',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'support',
                      },
                      {
                        key: 'q_fields',
                        value: 'country_budget_items',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'country_budget_items',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `narrative` of `country_budget_item` field evaluated as `country_budget_item` in `q_fields` parameter.',
                },
              },
              {
                name: 'transaction',
                _postman_id: '461e7191-d5ed-4ff0-96af-a5ed460b859e',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=support&q_fields=transaction&format=json&fields=transactions,id',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'support',
                        description: 'text to search\n',
                      },
                      {
                        key: 'q_fields',
                        value: 'transaction',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'transactions,id',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `ref` and `narratives` of `description`, `provider_organisation` and `receiver_organisation` fields evaluated as `transaction` in `q_fields` parameter.',
                },
              },
              {
                name: 'policy_marker',
                _postman_id: '0b625958-7389-4863-8bb6-6337b437d35d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=Targeting the Objectives&q_fields=policy_marker&format=json&fields=policy_markers',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'Targeting the Objectives',
                      },
                      {
                        key: 'q_fields',
                        value: 'policy_marker',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'policy_markers',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `narratives` of `policy_marker` field evaluated as `policy_marker` in `q_fields` parameter.',
                },
              },
              {
                name: 'related_activity',
                _postman_id: '41949dd2-66eb-4deb-81bc-0f5570a939d9',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=AU&q_fields=related_activity&format=json&fields=related_activities',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'AU',
                      },
                      {
                        key: 'q_fields',
                        value: 'related_activity',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'related_activities',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `ref` of `related_activity` field evaluated as `related_activity` in `q_fields` parameter.',
                },
              },
              {
                name: 'conditions',
                _postman_id: '2181c7b5-eaad-4b17-8b20-d69bcf69a317',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=aid&q_fields=conditions&format=json&fields=conditions',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'aid',
                      },
                      {
                        key: 'q_fields',
                        value: 'conditions',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'conditions',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `narratives` of `conditions` field evaluated as `conditions` in `q_fields` parameter.',
                },
              },
              {
                name: 'result',
                _postman_id: 'd02f4c83-fbff-43d0-adc7-f52f3f81a3b4',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?q=The distance between &q_fields=result&format=json&fields=results',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'q',
                        value: 'The distance between ',
                      },
                      {
                        key: 'q_fields',
                        value: 'result',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'results',
                      },
                    ],
                  },
                  description:
                    'Call desired fields in activity that has text specified as `q` in `narratives` of `result_title`, `result_ description`, `result_indicator_title`, `result_indicator_description`, `result_indicator_period _target_comment`, `result_indicator_perioda_ctual_comment` fields evaluated as `result` in `q_fields` parameter.',
                },
              },
            ],
            _postman_id: '89954afa-be7c-40f0-8124-57daa92108b2',
            description:
              'API request may include `q` parameter. This parameter controls text search and contains expected value.\n\nBy default, searching is performed on the following fields. To search on subset of these fields the `q_fields` parameter can be used, like so; `q_fields=iati_identifier,title,description`.\n\n* `iati_identifier` the IATI identifier\n* `title` narratives\n* `description` narratives\n* `recipient_country` recipient country code and name\n* `recipient_region` recipient region code and name\n* `reporting_org` ref and narratives\n* `sector` sector code and name\n* `document_link` url, category and title narratives\n* `participating_org` ref and narratives\n* `other_identifier` owner ref and narratives\n* `contact_info` all narratives for organisation, department, person name, job title & mailing address\n* `location` ref of location\n* `country_budget_items` narrative of budget item description\n* `policy_marker` narratives of policy marker\n* `transaction` ref and narratives of description, provider organisation, receiver organisation\n* `related_activity` ref of related activity\n* `conditions` narratives of condition\n* `result` narratives for result title, result description, result indicator title, result indicator description, result indicator period target comment, result indicator perioda ctual comment\n',
            _postman_isSubFolder: true,
          },
          {
            name: 'Ordering',
            item: [
              {
                name: 'title',
                _postman_id: 'b23ea775-cfec-4ef5-a8a8-3535289e186f',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=title&format=json&reporting_organisation_identifier=DE-1&ordering=title',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'ordering',
                        value: 'title',
                      },
                    ],
                  },
                },
              },
              {
                name: 'planned_start_date',
                _postman_id: '41bf1464-f4b0-4427-a517-3026c09e7153',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=title&format=json&reporting_organisation_identifier=DE-1&ordering=planned_start_date',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'planned_start_date',
                      },
                    ],
                  },
                },
              },
              {
                name: 'actual_start_date',
                _postman_id: '202b234f-53f1-4011-ae05-0d9c1fc7a05b',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=actual_start_date',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'actual_start_date',
                      },
                    ],
                  },
                },
              },
              {
                name: 'planned_end_date',
                _postman_id: 'c7d93b8e-2412-4dd9-bdc7-ec9128dd67f4',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=planned_end_date',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'planned_end_date',
                      },
                    ],
                  },
                },
              },
              {
                name: 'actual_end_date',
                _postman_id: '33b5638e-2bb4-4449-a315-7be2694839c7',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=actual_end_date',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'actual_end_date',
                      },
                    ],
                  },
                },
              },
              {
                name: 'start_date',
                _postman_id: '0cdabed6-8cc4-456a-86d5-53dfe60d93ad',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=start_date',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'start_date',
                      },
                    ],
                  },
                  description:
                    '`start_date` is `actual_start_date` if it is available, otherwise `start_date` is `planned_start_date`.',
                },
              },
              {
                name: 'end_date',
                _postman_id: 'ad20c5b7-2cd7-4c49-8995-f195c26619c6',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=end_date',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'end_date',
                      },
                    ],
                  },
                  description:
                    '`end_date` is `actual_end_date` if it is available, otherwise `end_date` is `planned_end_date`.',
                },
              },
              {
                name: 'activity_budget_value',
                _postman_id: '0df4ddfa-6b12-4eda-ba2a-d8e4607e79ee',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?total_budget_gte=1&format=json&reporting_organisation_identifier=DE-1&ordering=activity_budget_value&format=json&fields=budgets',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'total_budget_gte',
                        value: '1',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'activity_budget_value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'budgets',
                      },
                    ],
                  },
                },
              },
              {
                name: 'activity_incoming_funds_value',
                _postman_id: '72949e42-52a0-4ce3-82d1-fe5d6135502d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=activity_incoming_funds_value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'activity_incoming_funds_value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'activity_disbursement_value',
                _postman_id: '8a72d621-3694-4d03-a794-fb7c2040a1d1',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=activity_disbursement_value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'activity_disbursement_value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'activity_expenditure_value',
                _postman_id: '8a5ec729-80e3-436d-bced-8901db6dad66',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=activity_expenditure_value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'activities', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'reporting_organisation,title',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'DE-1',
                      },
                      {
                        key: 'ordering',
                        value: 'activity_expenditure_value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
            ],
            _postman_id: '94d48dd0-96c5-49aa-acef-d8b3f681d9b1',
            description:
              "API request may include `ordering` parameter. This parameter controls the order in which results are returned.\n\nResults can be ordered by the following fields. The user may also specify reverse orderings by prefixing the field name with '-', like so: `-title`\n\n",
            _postman_isSubFolder: true,
          },
          {
            name: 'Aggregation',
            item: [],
            _postman_id: '31cdfaed-8f8b-4a5b-a38b-a29268eda929',
            description:
              "At the moment there's no direct aggregations on this endpoint.\n\nThe /activities/aggregations endpoint can be used for activity based aggregations.",
            _postman_isSubFolder: true,
          },
          {
            name: 'activities',
            _postman_id: 'debbe231-72a6-46a8-8974-6fb636c9dfcf',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/activities/?format=json',
                host: ['{{url}}'],
                path: ['api', 'activities', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    disabled: true,
                  },
                ],
              },
              description:
                'Each item contains summarized information on the activity being shown, including the URI to activity details, which contain all information. To show more information in list view the fields parameter can be used. Example; `fields=activity_id,title,country,any_field`.',
            },
          },
          {
            name: 'Activity CSV export',
            _postman_id: '4e4ea614-7e9e-4186-a0a7-e73320509fc1',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw:
                  '{{url}}/api/activities/?format=csv&fields=descriptions,title,transaction_types',
                host: ['{{url}}'],
                path: ['api', 'activities', ''],
                query: [
                  {
                    key: 'format',
                    value: 'csv',
                  },
                  {
                    key: 'fields',
                    value: 'descriptions,title,transaction_types',
                  },
                ],
              },
              description:
                'This request is for Activity CSV export. \n\nNote -  Activities are exploded according to the number of sectors in that activity. For example, if ther are three sectors in an activity, there would be 3 rows for each sector for parent activity. \nThere will be 13 collums for transaction types. Related transaction value is aggregated in respective collums.\n\nMultiple `recipient_countries` or `recipient_regions` could be in one cell if parent `activity` has multiple of them.\n\n## Default collums\nThe following collums are default for CSV export. Other fields in the activity can be specified in `fields` parameter.\n\n* `iati_identifier`\n* `sectors`\n* `recipient_regions`\n* `recipient_countries`',
            },
          },
          {
            name: 'Activity XLS export',
            _postman_id: '165ecf08-69d3-47c8-9fb9-c5d584c1d26a',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw:
                  '{{url}}/api/activities/?format=xls&fields=descriptions,title,transaction_types',
                host: ['{{url}}'],
                path: ['api', 'activities', ''],
                query: [
                  {
                    key: 'format',
                    value: 'xls',
                  },
                  {
                    key: 'fields',
                    value: 'descriptions,title,transaction_types',
                  },
                ],
              },
            },
          },
          {
            name: 'Activity XML export',
            _postman_id: '5af912d5-8a24-4495-a938-24f6c810bade',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw:
                  '{{url}}/api/activities/?format=xml&fields=descriptions,title,transaction_types',
                host: ['{{url}}'],
                path: ['api', 'activities', ''],
                query: [
                  {
                    key: 'format',
                    value: 'xml',
                  },
                  {
                    key: 'fields',
                    value: 'descriptions,title,transaction_types',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'a571c294-861f-4286-b054-bcf61e1c5545',
        description:
          ' Returns a list of IATI Activities stored in the IATI Datastore based on 10 results as a default. You can retrieve up to a 1.000 activities in a single call using the &page_size=[nr] option.',
      },
      {
        name: 'Activity-Transactions',
        item: [
          {
            name: 'activity-transaction',
            _postman_id: 'df7c1d28-6e9e-4193-a2c6-5e7622f40091',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '',
              },
            },
          },
        ],
        _postman_id: '7ace7179-6f10-4441-aea2-59c041d75a7b',
        description:
          "Returns a list of IATI Activity Transactions stored in OIPA.\n\n## URI Format\n\n```\n/api/activities/{activity_id}/transactions\n```\n\n### URI Parameters\n\n- `activity_id`: Desired activity ID\n\n## Request parameters:\n\n- `recipient_country` (*optional*): Recipient countries list. Comma separated list of strings.\n- `recipient_region` (*optional*): Recipient regions list. Comma separated list of integers.\n- `sector` (*optional*): Sectors list. Comma separated list of integers.\n- `sector_category` (*optional*): Sectors list. Comma separated list of integers.\n- `reporting_organisations` (*optional*): Organisation ID's list.\n- `participating_organisations` (*optional*): Organisation IDs list.Comma separated list of strings.\n- `min_total_budget` (*optional*): Minimal total budget value.\n- `max_total_budget` (*optional*): Maximal total budget value.\n- `activity_status` (*optional*):\n- `related_activity_id` (*optional*):\n- `related_activity_type` (*optional*):\n- `related_activity_recipient_country` (*optional*):\n- `related_activity_recipient_region` (*optional*):\n- `related_activity_sector` (*optional*):\n\n## Searching is performed on fields:\n\n- `description`\n- `provider_organisation_name`\n- `receiver_organisation_name`\n",
      },
      {
        name: 'Activity Detail',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'fields (optional)',
                _postman_id: '0835e9ad-a1a1-4bac-83f3-d0bb7bde6fd5',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/activities/GB-CHC-285776-DRC429?format=json&fields=title,iati_identifier',
                    host: ['{{url}}'],
                    path: ['api', 'activities', 'GB-CHC-285776-DRC429'],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'title,iati_identifier',
                      },
                    ],
                  },
                  description:
                    'Only comma seperated selected fields will be displayed. The available fiels are:\n\n* `url`\n* `id`\n* `iati_identifier`\n* `reporting_organisation`\n* `title`\n* `descriptions`\n* `participating_organisations`\n* `other_identifier`\n* `activity_status`\n* `budget_not_provided`\n* `activity_dates`\n* `contact_info`\n* `activity_scope`\n* `recipient_countries`\n* `recipient_regions`\n* `locations`\n* `sectors`\n* `tags`\n* `country_budget_items`\n* `humanitarian`\n* `humanitarian_scope`\n* `policy_markers`\n* `collaboration_type`\n* `default_flow_type`\n* `default_finance_type`\n* `default_aid_type`\n* `default_tied_status`\n* `budgets`\n* `planned_disbursements`\n* `capital_spend`\n* `transactions`\n* `related_transactions`\n* `document_links`\n* `related_activities`\n* `legacy_data`\n* `conditions`\n* `results`\n* `crs_add`\n* `fss`\n* `last_updated_datetime`\n* `xml_lang`\n* `default_currency`\n* `humanitarian`\n* `hierarchy`\n* `linked_data_uri`\n* `secondary_reporter`\n* `aggregations`\n* `dataset`\n* `publisher`\n* `published_state`\n* `transaction_types`',
                },
              },
            ],
            _postman_id: '0624381f-a5b4-4840-b84d-b50575992ade',
            _postman_isSubFolder: true,
          },
          {
            name: 'activity details',
            _postman_id: '80a667ba-cdfc-4c76-b120-bfaa2df80dc7',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/activities/GB-CHC-285776-DRC429/?format=json',
                host: ['{{url}}'],
                path: ['api', 'activities', 'GB-CHC-285776-DRC429', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'c466f1e0-e81e-43ad-8105-488370379d3c',
        description:
          'Returns detailed information of the activity specified by `iati-identifier` of the activity.\n\n## URL format\n`/api/activities/{iati-identifier}`\n\n',
      },
      {
        name: 'Dataset List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'name (optional)',
                _postman_id: 'cc33b761-0b98-47b8-a2bb-ede76efd81b3',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/datasets/?name=111111_publisher-activities&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'datasets', ''],
                    query: [
                      {
                        key: 'name',
                        value: '111111_publisher-activities',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        type: 'text',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        type: 'text',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'name to search for.',
                },
              },
              {
                name: 'filetype (optional)',
                _postman_id: 'e31be94f-2de3-48ab-b43f-a7fa27f5b379',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/datasets/?filetype=2&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'datasets', ''],
                    query: [
                      {
                        key: 'filetype',
                        value: '2',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Filter datasets by type (activity or organisation).',
                },
              },
              {
                name: 'publisher (optional)',
                _postman_id: 'e244460d-88f0-455a-bfc9-01a4be86a450',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/datasets/?publisher=621&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'datasets', ''],
                    query: [
                      {
                        key: 'publisher',
                        value: '621',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description: 'Publisher ID.',
                },
              },
              {
                name: 'publisher_identifier (optional)',
                _postman_id: '7d73b93f-d0b2-40ef-9e2c-cd4a46946c21',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/datasets/?publisher_identifier=BE-BCE_KBO-0421210424&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'datasets', ''],
                    query: [
                      {
                        key: 'publisher_identifier',
                        value: 'BE-BCE_KBO-0421210424',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description:
                    'Publisher IATI identifier. This endpoint was wrongly named  `publisher_name`, where it should be named `publisher_identifier`.',
                },
              },
            ],
            _postman_id: '58020886-e5b8-41c3-be4d-555c8f038485',
            _postman_isSubFolder: true,
          },
          {
            name: 'Ordering',
            item: [
              {
                name: 'Dataset ordered by publisher.',
                _postman_id: 'daa9d26a-cae5-49b2-bbcd-f57745db291f',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/datasets/?format=json&ordering=publisher',
                    host: ['{{url}}'],
                    path: ['api', 'datasets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'ordering',
                        value: 'publisher',
                      },
                    ],
                  },
                  description:
                    'This is just an example request. DataSet can be ordered by by `name`,`title`,`filetype`,`publisher`,`url`,`source_url`,`activities`,`activity_count`, `date_created`, `date_updated`, `last_found_in_registry`, `iati_version`.  ',
                },
              },
            ],
            _postman_id: 'e0d9393d-b0ef-459a-af37-4e67b26ce908',
            description:
              "API request may include `ordering` parameter. This parameter controls the order in which results are returned.\n\nResults can be ordered by all displayed fields except `activities `, `activity_count`, `file_type` and `internal_url`.\n\nThe user may also specify reverse orderings by prefixing the field name with '-', like so: `-publisher`.",
            _postman_isSubFolder: true,
          },
          {
            name: 'Request parameters',
            item: [],
            _postman_id: '4d019121-476b-48ff-8fa9-e9619ac65bda',
            description:
              'All filters available on the Activity List, can be used on aggregations.',
            _postman_isSubFolder: true,
          },
          {
            name: 'dataset',
            _postman_id: 'cc023ff7-557f-4f35-9205-d432034fb667',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/datasets/?format=json',
                host: ['{{url}}'],
                path: ['api', 'datasets', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/datasets/{name}`\n\n',
            },
          },
        ],
        _postman_id: 'f9a14857-4401-40f9-9560-fc82ef6c6cbb',
        description: 'Returns a list of IATI datasets stored in OIPA.',
      },
      {
        name: 'Budget List',
        item: [
          {
            name: 'request parameters',
            item: [
              {
                name: 'activity_scope (optional)',
                _postman_id: '6978803d-3f9b-47fc-be80-4c341890abf2',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/?format=json&activity_scope=1&has_activity_scope=True',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'activity_scope',
                        value: '1',
                      },
                      {
                        key: 'fields',
                        value: 'activity_scope',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'has_activity_scope',
                        value: 'True',
                      },
                    ],
                  },
                  description: 'Comma seperated `activity_scope` (s).',
                },
              },
              {
                name: 'document_link_category (optional)',
                _postman_id: '3442494a-3219-4d55-9f84-7555d3099899',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/?format=json&document_link_category=A01',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'document_link_category',
                        value: 'A01',
                      },
                    ],
                  },
                  description: 'Comma seperated `document_link_category` code.',
                },
              },
              {
                name: 'planned_start_date_lte (optional)',
                _postman_id: 'ecc2f95f-3bb8-44fe-b767-d92aa0eb7684',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/?format=json&planned_start_date_lte=2004-03-24',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'planned_start_date_lte',
                        value: '2004-03-24',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns budgets in actiives that are earlier or equal to the given activity date.',
                },
              },
              {
                name: 'planned_start_date_gte (optional)',
                _postman_id: '71591656-7bb0-4a22-b4a0-77222c597f51',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/?format=json&planned_start_date_gte=2004-03-24',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'planned_start_date_gte',
                        value: '2004-03-24',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns budgets in actiives that are later or equal to the given activity date.',
                },
              },
              {
                name: 'actual_start_date_lte (optional)',
                _postman_id: 'ed1b9fc6-1c4f-4c87-b11e-e20631f436ac',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/?format=json&actual_start_date_lte=2004-03-24',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'actual_start_date_lte',
                        value: '2004-03-24',
                      },
                    ],
                  },
                  description:
                    'Date in YYYY-MM-DD format, returns budgets in actiives that are earlier or equal to the given activity date.',
                },
              },
              {
                name: 'participating_organisation (optional)',
                _postman_id: 'c72f327e-175b-4281-8cc1-8f4da44e20b1',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/?format=json&participating_organisation=XM-DAC-41114',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'participating_organisation',
                        value: 'XM-DAC-41114',
                      },
                    ],
                  },
                },
              },
              {
                name: 'fields (option)',
                _postman_id: '5f25e829-6a0b-4b59-9869-a63da1d70723',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/budgets/?format=json&fields=all',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'all',
                      },
                    ],
                  },
                  description:
                    'Available fields are:\n* `value`\n* `type`\n* `status`\n* `activity`\n* `period_start`\n* `period_end`\n* `activity_id`\n\n\nThe default fields are:\n* `iati_identifier`\n* `sectors`\n* `recipient_regions`\n* `budgets`\n\nTo get all fields, use `fields=all` parameter.',
                },
              },
            ],
            _postman_id: '71b08b4b-e081-4697-811e-044084c93699',
            _postman_isSubFolder: true,
          },
          {
            name: 'budget',
            _postman_id: 'b91795e7-48ca-4e4f-a73e-d636b358a393',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/budgets/?format=json',
                host: ['{{url}}'],
                path: ['api', 'budgets', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
              },
            },
          },
          {
            name: 'budget CSV export',
            _postman_id: '91852139-7f05-499d-855d-cb98d96af65d',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/budgets/?format=csv',
                host: ['{{url}}'],
                path: ['api', 'budgets', ''],
                query: [
                  {
                    key: 'format',
                    value: 'csv',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'ce004c9e-f9a8-480b-8ac2-3eb39fe9f4bb',
      },
      {
        name: 'Budget Aggregations',
        item: [
          {
            name: 'Group by options',
            item: [
              {
                name: 'recipient_country',
                _postman_id: '59797d79-7a1b-4ac1-b2e4-e7031777e8ec',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?recipient_country=BD,MM&group_by=recipient_country&aggregations=count,activity_count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'recipient_country',
                        value: 'BD,MM',
                      },
                      {
                        key: 'group_by',
                        value: 'recipient_country',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'recipient_region',
                _postman_id: '72a57100-292d-4dcd-ba44-935b47776335',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=recipient_region&aggregations=count,activity_count,value&format=json&recipient_region=380,619',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'recipient_region',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'recipient_region',
                        value: '380,619',
                      },
                    ],
                  },
                },
              },
              {
                name: 'sector',
                _postman_id: '2ea55de9-8814-49ef-b97d-b71d4e8464ba',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=sector&aggregations=count,activity_count,value&format=json&sector=41030',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'sector',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'sector',
                        value: '41030',
                      },
                    ],
                  },
                },
              },
              {
                name: 'related_activity',
                _postman_id: 'fcc51529-2b07-42fd-ac2a-ff2eba040105',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=related_activity&aggregations=count,activity_count,value&format=json&related_activity_id=BJ-IFU-6201300688700-RSG0123375-29295',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'related_activity',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'related_activity_id',
                        value: 'BJ-IFU-6201300688700-RSG0123375-29295',
                      },
                    ],
                  },
                },
              },
              {
                name: 'reporting_organisation',
                _postman_id: 'cc1c23a2-a4fa-4f61-88d6-6f0dfcae48ae',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=reporting_organisation&aggregations=count,activity_count,value&format=json&reporting_organisation_identifier=GB-CHC-285776',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'reporting_organisation',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'GB-CHC-285776',
                      },
                    ],
                  },
                },
              },
              {
                name: 'participating_organisation',
                _postman_id: 'd140f395-3fc5-4364-a2d6-7a3e5af6e66f',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=participating_organisation&aggregations=count,activity_count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'participating_organisation',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'participating_organisation_type',
                _postman_id: '37710c65-a814-448e-9c49-c2bc1a1ca939',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=participating_organisation_type&aggregations=count,activity_count,value&format=json&participating_organisation=AU-5',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'participating_organisation_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'participating_organisation',
                        value: 'AU-5',
                      },
                    ],
                  },
                },
              },
              {
                name: 'document_link_category',
                _postman_id: '3e86c2e1-ae31-4b14-8766-41dc30021872',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=document_link_category&aggregations=count,activity_count,value&format=json&reporting_organisation_identifier=US-USAGOV',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'document_link_category',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'US-USAGOV',
                      },
                    ],
                  },
                },
              },
              {
                name: 'activity_status',
                _postman_id: '6206bb21-c651-4efe-a1fc-f1bada816141',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=activity_status&aggregations=count,activity_count,value&format=json&activity_status=1,2',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'activity_status',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        disabled: true,
                      },
                      {
                        key: 'activity_status',
                        value: '1,2',
                      },
                    ],
                  },
                },
              },
              {
                name: 'collaboration_type',
                _postman_id: '76657154-15e7-4f12-b2a1-0a40c6542a86',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=collaboration_type&aggregations=count,activity_count,value&format=json&collaboration_type=1,2',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'collaboration_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'collaboration_type',
                        value: '1,2',
                      },
                    ],
                  },
                },
              },
              {
                name: 'budget_period_start_year',
                _postman_id: '12df3ba1-29f0-410c-af2e-9c5963e2fa22',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=budget_period_start_year&aggregations=count,activity_count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'budget_period_start_year',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'budget_period_end_year',
                _postman_id: 'f8f372a2-3f2c-4eb2-9e7a-4315d59a7290',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=budget_period_end_year&aggregations=count,activity_count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'budget_period_end_year',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'budget_period_end_quarter',
                _postman_id: 'd2e629b7-0a3f-4e9b-bd87-e34ead6d8d14',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=budget_period_end_quarter&aggregations=count,activity_count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'budget_period_end_quarter',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'budget_period_start_month',
                _postman_id: '5ae5c1a6-73c5-4480-a02c-2d7f3bc8a3e1',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/budgets/aggregations/?group_by=budget_period_start_month&aggregations=count,activity_count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'budgets', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'budget_period_start_month',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
            ],
            _postman_id: '7ca3d11e-5074-4701-98cc-985fb742a604',
            description:
              'API request has to include `group_by` parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:',
            _postman_isSubFolder: true,
          },
          {
            name: 'Aggregation options',
            item: [],
            _postman_id: 'b0a5dd83-c85e-4d4b-9b10-7b9d29d9837b',
            description:
              'API request has to include `aggregations` parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:\n\n* `count` Count of budgets\n* `activity_count` Count of activities\n* `value` Sum of budget value (in the selected currency)',
            _postman_isSubFolder: true,
          },
        ],
        _postman_id: '7aec9394-6b33-40a4-a492-d9260f8e4b22',
        description:
          'Returns aggregations based on the item grouped by, and the selected aggregation.',
      },
      {
        name: 'Current branch',
        item: [
          {
            name: 'current_branch',
            _postman_id: 'a6c738fb-7eee-482c-bf5f-96a83812e379',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/branch/?format=json',
                host: ['{{url}}'],
                path: ['api', 'branch', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'c34f3e77-648a-47f1-b984-8df4911bc5fd',
        description: 'Return current branch.',
      },
      {
        name: 'Codelist Meta List',
        item: [
          {
            name: 'codelist',
            _postman_id: 'c3d7c3d2-c7b1-487a-acfb-e2a147dec68e',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/codelists/?format=json',
                host: ['{{url}}'],
                path: ['api', 'codelists', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/codelists/{codelistname}/`',
            },
          },
          {
            name: 'CodeList Detail',
            _postman_id: 'a254103b-f6d6-4b84-ae31-f0e1b8bdc6a4',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/codelists/ActivityDateType/?format=json',
                host: ['{{url}}'],
                path: ['api', 'codelists', 'ActivityDateType', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'd9b0fdd9-f3b9-4022-b108-96f447ca4015',
        description: 'Returns a list of IATI codelists stored in OIPA.',
      },
      {
        name: 'Country List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'code (optional)',
                _postman_id: '1661e668-c67e-405f-9880-3b58ccf0431c',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/countries/?format=json&code=GH',
                    host: ['{{url}}'],
                    path: ['api', 'countries', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'region',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'code',
                        value: 'GH',
                      },
                    ],
                  },
                  description: 'Country code to search for.',
                },
              },
              {
                name: 'name (optional)',
                _postman_id: '3447ad19-4e86-4484-911c-ad5d511231d5',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/countries/?name=Malaysia&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'countries', ''],
                    query: [
                      {
                        key: 'name',
                        value: 'Malaysia',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Country name to search for.',
                },
              },
              {
                name: 'region_code (optional)',
                _postman_id: 'c4cc6198-c7ce-4f0b-b187-9eeed957066d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/countries/?region_code=998&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'countries', ''],
                    query: [
                      {
                        key: 'region_code',
                        value: '998',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Filter countries by Region code.',
                },
              },
              {
                name: 'fields (optional)',
                _postman_id: '9786774f-8e83-498d-ba9a-09a26ff37906',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/countries/?fields=region,polygon&format=json&name=Myanmar',
                    host: ['{{url}}'],
                    path: ['api', 'countries', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'region,polygon',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'name',
                        value: 'Myanmar',
                      },
                    ],
                  },
                  description: 'List of fields to display.',
                },
              },
            ],
            _postman_id: '8088e93a-fe65-4b11-9e82-023097fcff82',
            _postman_isSubFolder: true,
          },
          {
            name: 'country',
            _postman_id: 'c7bc4615-ea23-4c10-b043-35a0fdf2831d',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/countries/?format=json',
                host: ['{{url}}'],
                path: ['api', 'countries', ''],
                query: [
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/counties/{country_id}`',
            },
          },
        ],
        _postman_id: '859039a9-182c-45ac-9803-0b6f0e1d4c67',
        description: 'Returns a list of IATI Countries stored in OIPA.',
      },
      {
        name: 'Location List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'activity_status(optional)',
                _postman_id: '69617f3f-99a3-43bd-ae88-df7a05a3c3cb',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/locations/?activity_status=2&format=json&fields=description,ref',
                    host: ['{{url}}'],
                    path: ['api', 'locations', ''],
                    query: [
                      {
                        key: 'activity_status',
                        value: '2',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'description,ref',
                      },
                    ],
                  },
                  description: "Comma separated list of activity status's.",
                },
              },
              {
                name: 'organisation_iati_identifier',
                _postman_id: 'e8d3c9af-06da-48bf-adb6-4bf3bb357eb2',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/locations/?format=json&fields=id,description,ref,reporting_organisations&organisation_iati_identifier=XM-DAC-41114',
                    host: ['{{url}}'],
                    path: ['api', 'locations', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'id,description,ref,reporting_organisations',
                      },
                      {
                        key: 'organisation_iati_identifier',
                        value: 'XM-DAC-41114',
                        description: 'undp',
                      },
                    ],
                  },
                  description: 'Get location for specific organisation.',
                },
              },
              {
                name: 'fields (optional)',
                _postman_id: 'ee714c9c-e053-40d6-826a-a1c382e68d15',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/locations/?format=json&fields=reporting_organisations',
                    host: ['{{url}}'],
                    path: ['api', 'locations', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'reporting_organisations',
                      },
                    ],
                  },
                  description:
                    'Available fields are:\n* `id`\n* `activity`\n* `iati_identifier`\n* `ref`\n* `location_reach`\n* `location_id`\n* `name`\n* `description`\n* `activity_description`\n* `administrative`\n* `point`\n* `exactness`\n* `location_class`\n* `feature_designation`\n* `sectors`\n* `recipient_countries`\n* `recipient_regions`\n* `reporting_organisations`',
                },
              },
            ],
            _postman_id: 'f988522a-ef15-4577-a2d4-2e3c749259bd',
            _postman_isSubFolder: true,
          },
          {
            name: 'location',
            _postman_id: '69300845-6c6a-42f8-98bb-9f9dba4c0dab',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/locations/?format=json',
                host: ['{{url}}'],
                path: ['api', 'locations', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
            },
          },
        ],
        _postman_id: '5dedc135-882a-475e-b847-e932bb0b2d94',
        description: 'Returns a list of IATI locations stored in OIPA.',
      },
      {
        name: 'Organisation List',
        item: [
          {
            name: 'Reguest parameters',
            item: [
              {
                name: 'fields (optional)',
                _postman_id: 'deabb358-2e66-466a-a2e3-8a32de69323a',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/organisations/?format=json&fields=primary_name,total_expenditures',
                    host: ['{{url}}'],
                    path: ['api', 'organisations', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'primary_name,total_expenditures',
                      },
                    ],
                  },
                  description:
                    'Available fields are:\n* `url`\n* `id`\n* `published_state`\n* `primary_name`\n* `default_currency`\n* `last_updated_datetime`\n*  `xml_lang`\n*  `organisation_identifier`\n*  `name`\n*  `reporting_org`\n*  `total_budgets`\n*  `recipient_org_budgets`\n*  `recipient_region_budgets`\n*  `recipient_country_budgets`\n*  `total_expenditures`\n*  `document_links`',
                },
              },
              {
                name: 'organisation_identifier (optional)',
                _postman_id: '1912d51d-9ec6-43aa-9b11-df9659e32c2f',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/organisations/?format=json&organisation_identifier=XM-DAC-41114',
                    host: ['{{url}}'],
                    path: ['api', 'organisations', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'organisation_identifier',
                        value: 'XM-DAC-41114',
                        description: 'organisation_identifier for UNDP',
                        type: 'text',
                      },
                    ],
                  },
                  description:
                    'Get organisation(s) filtered by `organisation_identifier`.',
                },
              },
              {
                name: 'name (optional)',
                _postman_id: '5ae48e7c-d15c-4c9b-b0e2-3544d9937c49',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/organisations/?format=json&name=Access to Seeds Foundation,Across',
                    host: ['{{url}}'],
                    path: ['api', 'organisations', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'name',
                        value: 'Access to Seeds Foundation,Across',
                      },
                    ],
                  },
                  description: 'Get organisation filtered by `name`.',
                },
              },
              {
                name: 'is_reporting_organisation',
                _postman_id: '89f57839-20df-4b6c-a2a3-1ad083722e85',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/organisations/?format=json&is_reporting_organisation=True',
                    host: ['{{url}}'],
                    path: ['api', 'organisations', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'is_reporting_organisation',
                        value: 'True',
                      },
                    ],
                  },
                  description:
                    'Get organisations that are Reporting Organisations.',
                },
              },
            ],
            _postman_id: '9c13351b-75c0-4c18-bb89-3c7c720f58ca',
            _postman_isSubFolder: true,
          },
          {
            name: 'organisation',
            _postman_id: 'ad95cfb0-eb8a-4486-9bff-c27475cc17d9',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/organisations/?format=json',
                host: ['{{url}}'],
                path: ['api', 'organisations', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/organisations/{organisation_id}`',
            },
          },
          {
            name: 'organisation XML export',
            _postman_id: '3f0c2f94-3179-4d27-8267-804ef1c7f600',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/organisations/?format=xml',
                host: ['{{url}}'],
                path: ['api', 'organisations', ''],
                query: [
                  {
                    key: 'format',
                    value: 'xml',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'ac53baeb-0d95-4d93-9cc9-527aa294e846',
        description: 'Returns a list of IATI Organisations stored in OIPA.\n\n',
      },
      {
        name: 'Organisation-Transaction',
        item: [],
        _postman_id: 'fb9eaa50-6e26-4c49-9263-19173255e647',
        description:
          'Returns a list of IATI Transactions provided by Organisation.\n\n## URI Format\n\n```\n/api/organisations/{organisation_id}/provided-transactions\n```\n### URI Parameters\n- `organisation_id`: Numerical ID of desired Organisation\n\n## Result details\n\nEach result item contains short information about transaction including URI to transaction details.\nURI is constructed as follows: `/api/transactions/{activity_id}`\n',
      },
      {
        name: 'Publisher List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'id (optional)',
                _postman_id: '7ad84971-d94c-46e9-8011-391c549fe910',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/publishers/?id=1&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'publishers', ''],
                    query: [
                      {
                        key: 'id',
                        value: '1',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description: 'Publisher id to search for.',
                },
              },
              {
                name: 'reporting_organisation_identifier (optional)',
                _postman_id: '425dd155-e457-484e-90b5-40eb7bf4f505',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/publishers/?format=json&reporting_organisation_identifier=NL-KVK-3427895',
                    host: ['{{url}}'],
                    path: ['api', 'publishers', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'NL-KVK-3427895',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Publisher IATI id to search for.',
                },
              },
              {
                name: 'display_name (optional)',
                _postman_id: '84f368f6-f0ca-4f2f-95d9-c9ee704c5793',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/publishers/?display_name=Koepel van de Vlaamse Noord-Zuidbeweging 11.11.11 VZW&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'publishers', ''],
                    query: [
                      {
                        key: 'display_name',
                        value:
                          'Koepel van de Vlaamse Noord-Zuidbeweging 11.11.11 VZW',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description:
                    'Publisher IATI Registry display name to search for.',
                },
              },
              {
                name: 'name (optional)',
                _postman_id: '0007d396-76fc-47b1-8f43-116974914a64',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/publishers/?format=json&name=111111_publisher',
                    host: ['{{url}}'],
                    path: ['api', 'publishers', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'name',
                        value: '111111_publisher',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Publisher IATI Registry name to search for.',
                },
              },
              {
                name: 'is_active',
                _postman_id: 'e286414a-f00d-4e2b-a57c-b16579c51b36',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/publishers/?format=json&is_active=True',
                    host: ['{{url}}'],
                    path: ['api', 'publishers', ''],
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'is_active',
                        value: 'True',
                      },
                    ],
                  },
                  description:
                    'To search for active publisher. The `value` is `True` or `False`.',
                },
              },
            ],
            _postman_id: '77fdec00-7ca1-4305-8630-afa715970578',
            _postman_isSubFolder: true,
          },
          {
            name: 'publisher',
            _postman_id: '471740fb-2a81-4ac8-8ad1-3cc0e00443e6',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/publishers/?format=json',
                host: ['{{url}}'],
                path: ['api', 'publishers', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/publishers/{publisher_iati_id}`\n\n',
            },
          },
        ],
        _postman_id: '6da0541e-8eb4-4e6b-ae75-6f88dc40d1ff',
        description: 'Returns a list of IATI Publishers stored in OIPA.',
      },
      {
        name: 'Region List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'fields (optional)',
                _postman_id: '0fbfb76e-f5cc-48b7-a71e-220eea4c6a34',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/regions/?fields=location,name,region_vocabulary,parental_region&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'regions', ''],
                    query: [
                      {
                        key: 'fields',
                        value:
                          'location,name,region_vocabulary,parental_region',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'List of fields to display.',
                },
              },
            ],
            _postman_id: 'cfc29c71-88f4-4006-9e95-4586c81a5256',
            _postman_isSubFolder: true,
          },
          {
            name: 'region',
            _postman_id: '9b0b6fc4-4e70-436d-ba42-462d291495b2',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/regions/?format=json',
                host: ['{{url}}'],
                path: ['api', 'regions', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/regions/{region_id}`',
            },
          },
        ],
        _postman_id: '20d6bcd4-02fa-45a2-b85d-0e833368f3cf',
        description: 'Returns a list of IATI Regions stored in OIPA.',
      },
      {
        name: 'Result List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'activity_id',
                _postman_id: 'a59411f3-0452-470d-ac49-3d6e55da92c1',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/results/?activity_id=BE-BCE_KBO-0421210424-KOEPELPROG2017-2021_SD3&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'results', ''],
                    query: [
                      {
                        key: 'activity_id',
                        value: 'BE-BCE_KBO-0421210424-KOEPELPROG2017-2021_SD3',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                  description: '`iati_identifier` of parent activity.',
                },
              },
            ],
            _postman_id: 'c81edcf9-02e6-432e-9d70-e973f4255d6b',
            _postman_isSubFolder: true,
          },
          {
            name: 'result',
            _postman_id: 'e180e7fd-6055-4a09-b9f0-c57065e01ddc',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/results/?fields=all&format=json',
                host: ['{{url}}'],
                path: ['api', 'results', ''],
                query: [
                  {
                    key: 'fields',
                    value: 'all',
                  },
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'd5680d6e-227f-42ea-aee6-ce9c0a68a647',
      },
      {
        name: 'Result Aggregations',
        item: [
          {
            name: 'Group by options',
            item: [
              {
                name: 'result_indicator_title',
                _postman_id: '2d7e5cb1-b92c-49ec-98ac-e89c425c5793',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/results/aggregations/?group_by=result_indicator_title&aggregations=targets,actuals&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'results', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'result_indicator_title',
                      },
                      {
                        key: 'aggregations',
                        value: 'targets,actuals',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'result_title',
                _postman_id: 'ccf451eb-fb45-433c-bab7-83c3d6df7264',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/results/aggregations/?group_by=result_title&aggregations=actuals&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'results', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'result_title',
                      },
                      {
                        key: 'aggregations',
                        value: 'actuals',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
            ],
            _postman_id: 'f88168ec-6fec-459b-9e3b-e8e33d0c747b',
            description:
              'API request has to include `group_by` parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:\n',
            _postman_isSubFolder: true,
          },
          {
            name: 'Aggregation options',
            item: [],
            _postman_id: 'da524743-9be7-48af-9ec3-d53d65f5047f',
            description:
              'API request has to include aggregations parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:\n\n* `target` Indicator period target. Currently breaks on non number results.\n* `actual` Indicator period actual. Currently breaks on non number results.',
            _postman_isSubFolder: true,
          },
          {
            name: 'Request parameters',
            item: [],
            _postman_id: '31c031ab-3994-416d-a688-c297f911b6ff',
            description:
              'All filters available on the Result List, can be used on aggregations.\n\n',
            _postman_isSubFolder: true,
          },
        ],
        _postman_id: 'c9dafa0c-b0e5-46fa-84bb-dc54c86491a6',
        description:
          'Returns aggregations based on the item grouped by, and the selected aggregation.\n\n',
      },
      {
        name: 'Sector List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'fields (optional)',
                _postman_id: 'dfefd8e8-1e3a-420f-a29e-8ca194c8ec31',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/sectors/?fields=category,url,name,code&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'sectors', ''],
                    query: [
                      {
                        key: 'fields',
                        value: 'category,url,name,code',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'List of fields to display.',
                },
              },
            ],
            _postman_id: '16575bd4-f112-46d1-bd8e-a33a8227ce1e',
            _postman_isSubFolder: true,
          },
          {
            name: 'sector',
            _postman_id: '07233665-1f81-4e32-b8b8-e6e7529cb4b9',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/sectors/?format=json',
                host: ['{{url}}'],
                path: ['api', 'sectors', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/sectors/{sector_id}`',
            },
          },
        ],
        _postman_id: 'e6b294ad-fb4b-4100-b542-54f2c72cb6d2',
        description: 'Returns a list of IATI Sectors stored in OIPA.',
      },
      {
        name: 'Transaction List',
        item: [
          {
            name: 'Request parameters',
            item: [
              {
                name: 'Activity Filter',
                item: [
                  {
                    name: 'iati_identifier',
                    _postman_id: 'b96ea307-0271-4ef9-ba2f-13ea2711ce5b',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      header: [],
                      url: {
                        raw: '',
                      },
                      description: '`iati_identifier` of the parent activity.',
                    },
                  },
                ],
                _postman_id: '6e4c0be4-f6dc-4015-9657-986735283da6',
                description:
                  'All filters in `activity` endpoint can be used to filter transactions with regard to their activies.',
                _postman_isSubFolder: true,
              },
              {
                name: 'id (optional)',
                _postman_id: '3b171980-8b3c-4c8e-a05d-274333ab215d',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/transactions/?id=3&format=json&fields=id',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'id',
                        value: '3',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'id',
                      },
                    ],
                  },
                  description: 'Transaction id.',
                },
              },
              {
                name: 'aid_type (optional)',
                _postman_id: '25bd8aa1-ca68-463d-831b-f703dd6b2a27',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?aid_type=A02&format=json&fields=aid_type',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'aid_type',
                        value: 'A02',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'aid_type',
                      },
                    ],
                  },
                  description: 'Aid type identifier.',
                },
              },
              {
                name: 'transaction_type (optional)',
                _postman_id: '038a6a3b-d2a6-4cad-823b-b3ad96736250',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?transaction_type=3,1&format=json&fields=transaction_type',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'transaction_type',
                        value: '3,1',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'fields',
                        value: 'transaction_type',
                      },
                    ],
                  },
                  description: 'Transaction type identifier.',
                },
              },
              {
                name: 'value (optional)',
                _postman_id: 'ef34d749-605b-4969-b3bb-932384179990',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?value=18000000&format=json&fields=value',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'value',
                        value: '18000000',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'fields',
                        value: 'value',
                      },
                    ],
                  },
                  description: 'Transaction value.',
                },
              },
              {
                name: 'min_value (optional)',
                _postman_id: '63c4c08c-1076-4bb8-ad5f-5afc3799f5c3',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?min_value=1800000000&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'min_value',
                        value: '1800000000',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Minimal transaction value.',
                },
              },
              {
                name: 'max_value (optional)',
                _postman_id: '0d368679-ae53-48ac-bd28-cb1969a11615',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw: '{{url}}/api/transactions/?max_value=18&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'max_value',
                        value: '18',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'Maximal transaction value.',
                },
              },
              {
                name: 'transaction_date_year',
                _postman_id: '452efb51-28ba-4f3f-b79d-9a23205576eb',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?transaction_date_year=2012&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'transaction_date_year',
                        value: '2012',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'transaction_date_lte (optional)',
                _postman_id: 'b6ab045b-497e-4609-b4f9-6a060f4d041a',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?transaction_date_lte=1983-01-04&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'transaction_date_lte',
                        value: '1983-01-04',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'provider_activity (optional)',
                _postman_id: '7edb39b3-caae-45f4-a046-58a7da0050a5',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?provider_activity=GB-COH-04105827&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'provider_activity',
                        value: 'GB-COH-04105827',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'transaction_date_gte (optional)',
                _postman_id: 'cb12f181-e6db-4e93-be24-b74d469c0ab6',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?transaction_date_gte=1983-01-04&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'transaction_date_gte',
                        value: '1983-01-04',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'fields (optional)',
                _postman_id: '64619456-a4bb-490e-b187-01d9bae5cacb',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/?fields=url,transaction_type,value,provider_organisation&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', ''],
                    query: [
                      {
                        key: 'fields',
                        value:
                          'url,transaction_type,value,provider_organisation',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                        disabled: true,
                      },
                      {
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                  description: 'List of fields to display.',
                },
              },
            ],
            _postman_id: '9b86d7e7-13b3-4059-82d0-1e397d503d3f',
            _postman_isSubFolder: true,
          },
          {
            name: 'transaction',
            _postman_id: 'b4b05be4-24cd-493f-8a61-09fb7efa3d52',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/transactions/?format=json',
                host: ['{{url}}'],
                path: ['api', 'transactions', ''],
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                    disabled: true,
                  },
                  {
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                    disabled: true,
                  },
                ],
              },
              description:
                'URI is constructed as follows: `/api/transactions/{transaction_id}`',
            },
          },
          {
            name: 'Transaction CSV export',
            _postman_id: '1be33381-9fac-4953-a035-aa4cdfb0b37c',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/transactions/?format=csv',
                host: ['{{url}}'],
                path: ['api', 'transactions', ''],
                query: [
                  {
                    key: 'format',
                    value: 'csv',
                  },
                ],
              },
            },
          },
          {
            name: 'Transaction XML export',
            _postman_id: '75e86f17-427e-467b-8183-ccde5963d7a2',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/transactions/?format=xml',
                host: ['{{url}}'],
                path: ['api', 'transactions', ''],
                query: [
                  {
                    key: 'format',
                    value: 'xml',
                  },
                ],
              },
            },
          },
          {
            name: 'Transaction XLS export',
            _postman_id: '7041412e-8259-4644-a953-7e792d599d7a',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                raw: '{{url}}/api/transactions/?format=xls',
                host: ['{{url}}'],
                path: ['api', 'transactions', ''],
                query: [
                  {
                    key: 'format',
                    value: 'xls',
                  },
                ],
              },
            },
          },
        ],
        _postman_id: 'abc51749-56f4-4d05-9817-f997e0219a5b',
        description: 'Returns a list of IATI Transactions stored in OIPA.',
      },
      {
        name: 'Transaction Aggregations',
        item: [
          {
            name: 'Group by option ',
            item: [
              {
                name: 'recipient_country',
                _postman_id: 'a6aee5d4-0a68-42f3-95f3-be27531cd12f',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=recipient_country&aggregations=count,activity_count&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'recipient_country',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,activity_count',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'recipient_region',
                _postman_id: '91abb21d-9637-4f15-bab7-0a572e53c04a',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=recipient_region&aggregations=count&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'recipient_region',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'sector',
                _postman_id: '5be02bc6-607c-49d6-996e-c2c50af8cf46',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=sector&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'sector',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'related_activity',
                _postman_id: 'a51268ca-bb72-464a-a2aa-24ca7f0daacf',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=related_activity&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'related_activity',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'transaction_type',
                _postman_id: 'ae903b5e-84cf-471b-bbad-0c878272d3fb',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=transaction_type&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'transaction_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'reporting_organisation',
                _postman_id: 'b5d881a7-b47c-4f00-bc0a-56cc8477bec6',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=reporting_organisation&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'reporting_organisation',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'participating_organsisation',
                _postman_id: '520c29bd-bfe2-434d-a769-c3b2f683b980',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=participating_organisation&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'participating_organisation',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'receiver_org',
                _postman_id: '7e2b801a-2ac1-48e6-8079-e94ad9633956',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=receiver_org&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'receiver_org',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'receiver_organisation_name',
                        value: 'Datacom Co. Ltd',
                        type: 'text',
                        disabled: true,
                      },
                    ],
                  },
                },
              },
              {
                name: 'provider_org',
                _postman_id: '104939b4-810f-43ab-b90d-f95bded6e778',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=provider_org&aggregations=count,value&format=json&provider_organisation_name=Anambra State Government',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'provider_org',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'provider_organisation_name',
                        value: 'Anambra State Government',
                      },
                    ],
                  },
                },
              },
              {
                name: 'document_link_category',
                _postman_id: '896da4de-759b-402f-8030-0eb0efb4dafe',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=document_link_category&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'document_link_category',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'activity_status',
                _postman_id: 'd6d0b416-a521-48e9-adbd-9d38e58d92bb',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=activity_status&aggregations=count,value&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'activity_status',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'participating_organisation_type',
                _postman_id: 'b84598e8-4b0b-4347-8cae-3c85f73b4139',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=participating_organisation_type&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'participating_organisation_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'collaboration_type',
                _postman_id: '92ffd207-4b95-404d-a422-82eab4360580',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=collaboration_type&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'collaboration_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'default_flow_type',
                _postman_id: 'a70f3646-303e-4575-b5e3-257c9477340f',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=default_flow_type&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'default_flow_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'default_finance_type',
                _postman_id: '93892374-5e8b-4535-b88d-2fd5cdddab7e',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=default_finance_type&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'default_finance_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'default_aid_type',
                _postman_id: 'a797b08d-1aa2-44e9-9b0e-948eb1ef288b',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=default_aid_type&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'default_aid_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'default_tied_status',
                _postman_id: 'b065a241-9dcd-4dde-a185-0d0ea1575ab5',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=default_tied_status&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'default_tied_status',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'transaction_date_month',
                _postman_id: '967d96d2-1735-45a9-8c3e-e03c54abe71c',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=transaction_date_month&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'transaction_date_month',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'transaction_date_quarter',
                _postman_id: '984d0429-0a29-422b-9d44-239e13e7e734',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=transaction_date_quarter&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'transaction_date_quarter',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
              {
                name: 'transaction_date_year',
                _postman_id: '54ce9bc0-5f75-46c5-99f7-ae41f033cf85',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    raw:
                      '{{url}}/api/transactions/aggregations/?group_by=transaction_date_year&aggregations=count,value,expenditure&format=json',
                    host: ['{{url}}'],
                    path: ['api', 'transactions', 'aggregations', ''],
                    query: [
                      {
                        key: 'group_by',
                        value: 'transaction_date_year',
                      },
                      {
                        key: 'aggregations',
                        value: 'count,value,expenditure',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                  },
                },
              },
            ],
            _postman_id: 'e374fb7d-8fe6-4951-83fa-b8900c055317',
            description:
              'Returns aggregations based on the item grouped by, and the selected\n    aggregation.\n\nAPI request has to include `group_by` parameter.\n\nThis parameter controls result aggregations and\ncan be one or more (comma separated values) of:\n* `recipient_country`\n* `recipient_region`\n* `sector`\n* `related_activity`\n* `transaction_type`\n* `reporting_organisation`\n* `participating_organisation`\n* `receiver_org`\n* `provider_org`\n* `document_link_category`\n* `activity_status`\n* `participating_organisation_type`\n* `collaboration_type`\n* `default_flow_type`\n* `default_finance_type`\n* `default_aid_type`\n* `default_tied_status`\n* `transaction_date_month`\n* `transaction_date_quarter`\n* `transaction_date_year`\n',
            _postman_isSubFolder: true,
          },
          {
            name: 'Aggregations options',
            item: [],
            _postman_id: '07294285-c0e8-4a1b-a0db-958c20e19db6',
            description:
              'API request has to include `aggregations` parameter.\n\nThis parameter controls result aggregations and\ncan be one or more (comma separated values) of:\n\n* `count`\n* `activity_count`\n* `value`\n* `disbursement`\n* `expenditure`\n* `commitment`\n* `incoming_fund`\n* `incoming_commitment`\n* `disbursement_expenditure` Disbursement and expenditure summed together.\n',
            _postman_isSubFolder: true,
          },
          {
            name: 'Request parameters',
            item: [],
            _postman_id: 'a1236f07-a11a-4409-bcf5-b25063fe07f0',
            description:
              'All filters available on the Transaction List, can be used on aggregations.',
            _postman_isSubFolder: true,
          },
          {
            name: 'Currency options',
            item: [],
            _postman_id: '088c5f92-c469-4a85-a586-657cd269d44e',
            description:
              "By default the values returned by the aggregations are in the reported\n    currency. This only renders meaningful results when all values were in the\n    same currency. Which is only the case when you filter your results down.\n\nThe aggregation endpoints have the ability to return values in a currency.\n    Options for this `convert_to` parameter are:\n\n* `xdr`\n* `usd`\n* `eur`\n* `gbp`\n* `jpy`\n* `cad`\n\nThis results in converted values when the original value was in another\ncurrency.\n\nInformation on used exchange rates can be found <a href='https://docs.oipa.nl/'>in the docs</a>.",
            _postman_isSubFolder: true,
          },
        ],
        _postman_id: '02de4cd6-c136-42ce-8cea-a5674d00184d',
      },
    ],
  },
};
