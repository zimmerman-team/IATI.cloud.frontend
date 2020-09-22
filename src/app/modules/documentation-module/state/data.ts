export const docData = {
  collection: {
    item: [
      {
        description:
          ' Returns a list of IATI Activities stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` activities in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'a571c294-861f-4286-b054-bcf61e1c5545',
        item: [
          {
            _postman_id: 'a01662dc-60f7-400d-bc31-a3e66ff1caa3',
            _postman_isSubFolder: true,
            item: [
              {
                _postman_isSubFolder: true,
                name: 'has_{field_name} (optional)',
                description:
                  'Only activities that have specified fields will return. The parameter value is boolean, `True` or `False`.\nThis filter can be applied on the following fields:\n- `crs_add`\n- `other_identifier`\n- `contact_info`\n- `activity_scope`\n- `recipient_country`\n- `recipient_region`\n- `location`\n- `sector`\n- `tag`\n- `country_budget_item`\n- `humanitarian_scope`\n- `policy_marker`\n- `collaboration_type`\n- `default_flow_type`\n- `default_finance_type`\n- `default_aid_type`\n- `default_tied_status`\n- `budget`\n- `planned_disbursement`\n- `capital_spend`\n- `document_link`\n- `related_activity`\n- `legacy_data`\n- `condition`\n- `result`\n- `fss`\n',
                item: [
                  {
                    name: 'has_crs_add (optional)',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      description:
                        'Filters `activities` by whether `crs-add` is present. The parameter value is boolean `True` or `False`.',
                      header: [],
                      url: {
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
                        raw:
                          'https://iatidatastore.iatistandard.org/api/activities/?has_crs_add=True&fields=title,crs_add&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'activities', ''],
                      },
                    },
                    _postman_id: '06dd9650-7c64-4be0-9b9c-6c945e767f7f',
                  },
                  {
                    name: 'has_other_identifier (optional)',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      description:
                        'Filters `activities` by whether `other-identifier` is present. The parameter value is boolean `True` or `False`.',
                      header: [],
                      url: {
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
                        raw:
                          'https://iatidatastore.iatistandard.org/api/activities/?has_other_identifier=True&fields=title,other_identifier&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'activities', ''],
                      },
                    },
                    _postman_id: 'd6c2a21e-132f-4b55-bb8f-8becb7385c57',
                  },
                  {
                    name: 'has_contact_info (optional)',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      description:
                        'Filters `activities` by whether `contact-info` is present. The parameter value is boolean `True` or `False`.',
                      header: [],
                      url: {
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
                        raw:
                          'https://iatidatastore.iatistandard.org/api/activities/?has_contact_info=True&fields=title,contact_info&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'activities', ''],
                      },
                    },
                    _postman_id: 'c8d60ba6-46b6-408f-ab73-375dfd1ad383',
                  },
                  {
                    name: 'has_activity_scope (optional)',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      description:
                        'Filters `activities` by whether `activity-scope` is present. The parameter value is boolean `True` or `False`.',
                      header: [],
                      url: {
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
                        raw:
                          'https://iatidatastore.iatistandard.org/api/activities/?has_activity_scope=True&fields=title,activity_scope&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'activities', ''],
                      },
                    },
                    _postman_id: '8fe73454-a62a-42a0-a94b-77a6555800c7',
                  },
                  {
                    name: 'has_recipient_country (optional)',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      description:
                        'Filters `activities` by whether `recipient-country` is present. The parameter value is boolean `True` or `False`.',
                      header: [],
                      url: {
                        query: [
                          {
                            key: 'has_recipient_country',
                            value: 'True',
                          },
                          {
                            disabled: true,
                            key: 'fields',
                            value: 'title',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                        ],
                        raw:
                          'https://iatidatastore.iatistandard.org/api/activities/?has_recipient_country=True&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'activities', ''],
                      },
                    },
                    _postman_id: '6cf2a29c-a81e-4c49-ac08-868e8faee5ee',
                  },
                  {
                    name: 'has_recipient_region (optional)',
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    request: {
                      method: 'GET',
                      description:
                        'Filters `activities` by whether `recipient-region` is present. The parameter value is boolean `True` or `False`.',
                      header: [],
                      url: {
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
                        raw:
                          'https://iatidatastore.iatistandard.org/api/activities/?has_recipient_country=False&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'activities', ''],
                      },
                    },
                    _postman_id: '8ebc02cc-123f-4e04-8009-0ad36897f0ef',
                  },
                ],
                _postman_id: 'dcfadf7b-89b3-4b91-ba0a-5fdbd06286dd',
              },
              {
                name: 'iati_identifier (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'iati_identifier',
                        value: 'CA-3-A035529001',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xml',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'fields',
                        value: 'all',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?iati_identifier=CA-3-A035529001',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '86e36c61-6910-47eb-acad-f4b1666cc03a',
              },
              {
                name: 'activity_scope(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of activity scope codes. Returns `activities` that include given activity scope code(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=activity_scope&format=json&activity_scope=2',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '76eb8233-6df9-42b0-8b9c-e4870a03e42a',
              },
              {
                name: 'recipient_country(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of ISO2 country codes. Returns `activities` that include given recipient country code(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?format=json&recipient_country=SL,MM&fields=iati_identifier,title',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '1f0ef862-9f4d-4b78-b7da-e6df2aef2749',
              },
              {
                name: 'recipient_region(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of region codes. Returns `activities` that include given recipient region codes(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?format=json&fields=recipient_regions,title&recipient_region=998,589',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'd28628f9-f8a4-4f31-8939-c340a795e90d',
              },
              {
                name: 'sector(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'Comma separated list of 5-digit sector codes.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'title,sectors',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?sector=41030&format=json&fields=title,sectors',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'b5e7a349-d070-4c2c-a7fe-4f3eec56f804',
              },
              {
                name: 'sector_category (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of 3-digit sector codes. Returns `activities` that include given sector code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?sector_category=111&format=json&fields=title,sectors,id',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '116625a0-8467-4460-8468-f17c1bdb07d4',
              },
              {
                name: 'reporting_organisation_identifier (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of IATI Organisation Identifiers. Returns `activites` reported by these organisation(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation&format=json&reporting_organisation_identifier=DE-1',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '6c145edc-d015-4d2b-9521-6e986f73baea',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'd42107c6-63f8-4df5-9d00-2a3ebf65abf9',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        key: 'reporting_organisation_type',
                        value: '10',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation&format=json&reporting_organisation_type=10',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                name: 'reporting_organisation_type (optional)',
              },
              {
                name: 'participating_organisation(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of IATI Organisation Identifiers. Returns `activities` where the given organisation is reported as a participating organisation.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'participating_organisation',
                        value: 'AU-5',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=title,participating_organisations&format=json&participating_organisation=AU-5',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '3d465b34-16ce-4a27-bb02-b99a534e20de',
              },
              {
                name: 'total_budget_lte(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with a total budget that is less than or equal to the given value.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?total_budget_lte=10000&fields=id,iati_identifier,budgets&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '3f20a2ca-0a7a-4457-9524-e435cbee9dc2',
              },
              {
                name: 'total_budget_gte(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with a total budget that is greater than or equal to the given value.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?total_budget_gte=1000000&fields=id,iati_identifier,budgets&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '60f2a488-c7fe-4a38-8fb5-b2cf8a9937fc',
              },
              {
                name: 'planned_start_date_lte(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with a planned start date that is equal to or earlier than the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?planned_start_date_lte=2000-03-24&fields=id,iati_identifier&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'c8b9d713-43b8-4b65-a5d7-034abaad22dd',
              },
              {
                name: 'planned_start_date_gte(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with a planned start date that is equal to or later than the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?planned_start_date_gte=2000-03-24&fields=id,iati_identifier&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '1e862287-b7a5-4f5e-87cd-e9999a9ba746',
              },
              {
                name: 'actual_start_date_lte(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with an actual start date that is equal to or earlier than the gfiven value. Date must  be in `YYYY-MM-DD`',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?actual_start_date_lte=2000-03-24&fields=id,iati_identifier&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'f0fcded3-d01d-4645-8acb-3da5725e03b6',
              },
              {
                name: 'actual_start_date_gte(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with an actual start date that is equal to or later than the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?actual_start_date_gte=2012-03-24&fields=id,iati_identifier&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '4adee9c1-1215-407d-aad4-b0eb385292a0',
              },
              {
                name: 'actual_end_date_lte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with an actual end date that is equal to or earlier than the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?actual_end_date_lte=2000-03-24&fields=id,iati_identifier&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '9a4af9d1-0fd7-4f58-a95f-f47ea40a1db3',
              },
              {
                name: 'actual_end_date_gte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` with an actual end date that is equal to or later than the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?actual_end_date_gte=2000-03-24&fields=id,iati_identifier&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'cdffe295-e566-4373-8895-5ca79eb320ff',
              },
              {
                name: 'activity_status(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of Activity Status codes. Returns `activities` with the given status code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        key: 'activity_status',
                        value: '1',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=activity_status&format=json&activity_status=1',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '4a4f0c67-c927-442f-9afb-08dab76e7d03',
              },
              {
                name: 'hierarchy(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of activity hierarchies. Returns `activities` that are flagged as the given hierarchy.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        key: 'hierarchy',
                        value: '2',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=hierarchy,iati_identifier&format=json&hierarchy=2',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'db5c4cbb-469b-47b4-af98-7edde934a726',
              },
              {
                name: 'related_activity_id(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of Activity IDs. Returns `activities` that report a related activity that has the given Activity ID(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?related_activity_id=BJ-IFU-6201300688700-RSG0123375-29295&fields=iati_identifier,related_activities&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'c31b5791-db82-414b-bfe0-018384cec649',
              },
              {
                name: 'related_activity_type(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of related activity type IDs. Returns `activities` that include a related activity that has the given related activity type code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?related_activity_type=1&fields=iati_identifier,related_activities&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'fdd24e8e-f6f4-42b5-ba45-28a73815d584',
              },
              {
                name: 'related_activity_recipient_country(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of ISO2 country codes. Returns `activities` that include a related activity that has the given recipient country code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'iati_identifier,recipient_countries',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?related_activity_recipient_country=MM&format=json&fields=iati_identifier,recipient_countries',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '0b656b38-d91d-4623-9a07-e3182d917d17',
              },
              {
                name: 'related_activity_recipient_region(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of region codes. Returns `activities` that include a related activity that has the given recipient region code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?related_activity_recipient_region=89&format=json&fields=iati_identifier,recipient_regions',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '268655f1-9615-4869-8c24-6e6790ff5dcc',
              },
              {
                name: 'related_activity_sector(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of 5-digit sector codes. Returns `activities` that include a related activity that has the given sector code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?related_activity_sector=41030&format=json&fields=iati_identifier,title',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '987a0710-e671-422f-b0a5-24ea257baf82',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'f56c2767-9fc0-4ccd-8072-c7457ea66589',
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of default aid type codes. Returns `activities` that include given defualt aid type code(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'fields',
                        value: 'default_aid_type',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'default_aid_type',
                        value: 'B01',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=default_aid_type&format=json&default_aid_type=B01',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                name: 'default_aid_type (optional)',
              },
              {
                name: 'transaction_provider_activity(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of activity IDs. Returns `activities` where the given activity ID is included as a transaction provider activity.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?transaction_provider_activity=SE-0-UD/2017/14647/IU&fields=title,transactions&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'c50f65ed-ac87-4bb6-b79e-d47658ade35d',
              },
              {
                name: 'transaction_date_year',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separate list of years. Returns `activities` that include an transaction with a transaction date within the given year(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?transaction_date_year=2000&fields=title&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '01a400ac-98d7-411a-95ad-df1e403dae00',
              },
              {
                name: 'budget_not_provided (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Comma separated list of budget not provided codes. Returns `activities` that include the given budget not provided code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?budget_not_provided=3,1&fields=title,budget_not_provided&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '20c49cc8-c3d1-4c67-947d-f8b82288bda0',
              },
              {
                name: 'humanitarian_scope_type (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` that include the given humanitarian scope type code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?humanitarian=1&fields=title,humanitarian&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '66505a6b-729d-4127-aa64-5756dbe71ae3',
              },
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Current available fields to display are:\n* `url`\n* `id`\n* `iati_identifier`\n* `reporting_organisation`\n* `title`\n* `descriptions`\n* `participating_organisations`\n* `other_identifier`\n* `activity_status`\n* `budget_not_provided`\n* `activity_dates`\n* `contact_info`\n* `activity_scope`\n* `recipient_countries`\n* `recipient_regions`\n* `locations`\n* `sectors`\n* `tag`\n* `country_budget_items`\n* `humanitarian`\n* `humanitarian_scope`\n* `policy_markers`\n* `collaboration_type`\n* `default_flow_type`\n* `default_finance_type`\n* `default_aid_type`\n* `default_tied_status`\n* `budgets`\n* `planned_disbursements`\n* `capital_spend`\n* `transactions`\n* `related_transactions`\n* `document_links`\n* `related_activities`\n* `legacy_data`\n* `conditions`\n* `results`\n* `crs_add`\n* `fss`\n* `last_updated_datetime`\n* `xml_lang`\n* `default_currency`\n* `humanitarian`\n* `hierarchy`\n* `linked_data_uri`\n* `secondary_reporter`\n* `aggregations`\n* `dataset`\n* `publisher`\n* `published_state`\n* `transaction_types`\n\nYou can wrap them into a:\n\n`&fields=url,id,iati_identifier,reporting_organisation,title,descriptions,participating_organisations,other_identifier,activity_status,budget_not_provided,activity_dates,contact_info,activity_scope,recipient_countries,recipient_regions,locations,sectors,tags,country_budget_items,humanitarian,humanitarian_scope,policy_markers,collaboration_type,default_flow_type,default_finance_type,default_aid_type,default_tied_status,budgets,planned_disbursements,capital_spend,related_transactions,document_links,related_activities,legacy_data,conditions,results,crs_add,fss,last_updated_datetime,xml_lang,default_currency,humanitarian,hierarchy,linked_data_uri,secondary_reporter,aggregations,dataset,publisher,published_state,transaction_types`.\n\nTo cover them all in once. `&fields=all` is on the docket.\nto get activities that have certain elements, use `has_{field}=True` parameter. For example, to get activities that have `crs_add` element in them, the endpoint is: `https://iatidatastore.iatistandard.org/api/activities/?has_crs_add=True&fields=crs_add&format=json`.\n\nIf the `fields` parameter is not specified or omitted, the default fields will be returned. The default fields are `iati_identifier`, `sectors`, `recipient_countries` and `recipient_regions`.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=title,crs_add&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '2b2be05e-70f5-4799-b4d8-4767fa067b0b',
              },
              {
                name: 'sector_vocabulary (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` that include the given sector vocabulary code(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'sector_vocabulary',
                        value: '1',
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
                    raw:
                      'http://iatidatastore.iatistandard.org/api/activities/?sector_vocabulary=1&fields=title,budget_not_provided&format=json',
                    protocol: 'http',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '741fc018-1474-460a-8b5c-346f7ed480d6',
              },
              {
                name: 'policy_marker (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` that include the given policy marker code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?policy_marker=1&fields=policy_markers&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'fbd37963-34ac-4c17-8eed-7582d9283568',
              },
              {
                name: 'participating_organisation_type (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` that include the given participating organisation type code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'participating_organisation_role',
                        value: '4',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?participating_organisation_type=24&fields=participating_organisations&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '87abf839-d8ed-4f1c-8627-49c0dc853c41',
              },
              {
                name: 'participating_organisation_role (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `activities` that include the given participating organisation role code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?participating_organisation_role=4&fields=participating_organisations&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '3b9d9ecb-57f4-4d4b-a0b7-f782a6ddaaff',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '7205e852-1b45-4b4e-bfef-8b951dbd8482',
                request: {
                  method: 'GET',
                  description:
                    'Return `activities` where `secondary-reporter` is `True`. Boolean parameter value of `true`, `True`, `True`, `true`, `1` or `0` can be passed.',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'is_secondary_reporter',
                        value: 'true',
                      },
                      {
                        key: 'fields',
                        value: 'reporting_organisation',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?format=json&is_secondary_reporter=true&fields=reporting_organisation',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                name: 'is_secondary_reporter',
              },
            ],
            name: 'Request parameters',
          },
          {
            _postman_isSubFolder: true,
            name: 'Text search',
            description:
              'API request may include `q` parameter. This parameter controls text search and contains expected value.\n\nBy default, searching is performed on the following fields. To search on subset of these fields the `q_fields` parameter can be used, like so; `q_fields=iati_identifier,title,description`.\n\n* `iati_identifier` the IATI identifier\n* `title` narratives\n* `description` narratives\n* `recipient_country` recipient country code and name\n* `recipient_region` recipient region code and name\n* `reporting_org` ref and narratives\n* `sector` sector code and name\n* `document_link` url, category and title narratives\n* `participating_org` ref and narratives\n* `other_identifier` owner ref and narratives\n* `contact_info` all narratives for organisation, department, person name, job title & mailing address\n* `location` ref of location\n* `country_budget_items` narrative of budget item description\n* `policy_marker` narratives of policy marker\n* `transaction` ref and narratives of description, provider organisation, receiver organisation\n* `related_activity` ref of related activity\n* `conditions` narratives of condition\n* `result` narratives for result title, result description, result indicator title, result indicator description, result indicator period target comment, result indicator period actual comment.',
            item: [
              {
                name: 'iati_identifier',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the IATI-Identifier field.',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'NL-KVK-27108436-A-03055-02:XG',
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
                        disabled: true,
                        key: 'q_lookup',
                        value: 'startswith',
                      },
                      {
                        key: 'fields',
                        value: 'title',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=NL-KVK-27108436-A-03055-02:XG&q_fields=iati_identifier&format=json&fields=title',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'c77dc66b-21eb-4c86-9697-6d3fd2134590',
              },
              {
                name: 'title',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the Title field (narrative).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'title',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=FINANCIAL &q_fields=title&format=json&fields=title',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'd053e879-b58f-4847-b2a7-ab7ad3452a4a',
              },
              {
                name: 'description',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the Description field (narrative).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'descriptions',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=support&q_fields=description&format=json&fields=descriptions',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '90dfad3a-5e32-4ccd-8058-1e3b602b610d',
              },
              {
                name: 'recipient_country',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the recipient country field (name or code).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=Myanmar&q_fields=recipient_country&format=json&fields=recipient_countries,title',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '5e634e8a-2807-494b-9237-5862c9e20347',
              },
              {
                name: 'recipient_region',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the recipient region field (name or code).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        disabled: true,
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=998 Developing countries, unspecified&q_fields=recipient_region&format=json&fields=recipient_regions',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '0d7dbb89-fb71-4234-84bb-fdd9f834b305',
              },
              {
                name: 'reporting_org',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the reporting-org field (name or code).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        disabled: true,
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=SE-0&q_fields=reporting_org&format=json&fields=reporting_organisation',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '8934175a-92c6-4cf6-afa0-7fe41ed93f11',
              },
              {
                name: 'sector',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the sector field (name or code).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=41030 Bio-diversity&q_fields=sector&format=json&fields=sectors',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'eb827c7b-6605-4679-8157-6ddc54599f54',
              },
              {
                name: 'document_link',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the document link field (url, category or narratives).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        disabled: true,
                        key: 'q_lookup',
                        value: 'startswith',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'document_link_category',
                        value: 'A01',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=Pre&q_fields=document_link&format=json&fields=document_links',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'a1650a2e-da9c-4044-a9e6-88fe90b8f245',
              },
              {
                name: 'participating_org',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the participating_org field (ref or narratives).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=DFID&q_fields=participating_org&format=json&fields=participating_organisations',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '891d543d-d3c1-42e3-9da6-32858174579a',
              },
              {
                name: 'other_identifier',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the other_identifier field (owner_org, ref or narratives).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=iom&q_fields=other_identifier&format=json&fields=other_identifier',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'a8877c4a-60ad-475b-a816-ec598ae56a96',
              },
              {
                name: 'contact_info',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the contact_info field (narratives, organisation, department, person_name, job_title, mailing_address).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=iom&q_fields=contact_info&format=json&fields=contact_info',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '5dde62e1-76a3-4943-ac7f-a7c734883e15',
              },
              {
                name: 'location',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'Search for a term in the location field (ref).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=UG&q_fields=location&format=json&fields=locations',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '64245d74-2e0e-4a99-b084-f061252626bf',
              },
              {
                name: 'country_budget_items',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the country budget items field (narrative).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=support&q_fields=country_budget_items&format=json&fields=country_budget_items',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '21f59bba-b486-490e-98c0-8d559ac2e546',
              },
              {
                name: 'transaction',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the transaction field (`description narrative`, `provider_organisation`, `receiver_organisation`).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=support&q_fields=transaction&format=json&fields=transactions,id',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '461e7191-d5ed-4ff0-96af-a5ed460b859e',
              },
              {
                name: 'policy_marker',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the policy marker field (narrative).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=Targeting the Objectives&q_fields=policy_marker&format=json&fields=policy_markers',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '0b625958-7389-4863-8bb6-6337b437d35d',
              },
              {
                name: 'related_activity',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the related_activity field (ref).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=AU&q_fields=related_activity&format=json&fields=related_activities',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '41949dd2-66eb-4deb-81bc-0f5570a939d9',
              },
              {
                name: 'conditions',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the conditions field (narrative).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=aid&q_fields=conditions&format=json&fields=conditions',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '2181c7b5-eaad-4b17-8b20-d69bcf69a317',
              },
              {
                name: 'result',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Search for a term in the result field (`title`, `description`, `indicator_title`, `indicator_description`, `indicator_period_target_comment`, `result_indicator_period_actual_comment`).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?q=The distance between &q_fields=result&format=json&fields=results',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'd02f4c83-fbff-43d0-adc7-f52f3f81a3b4',
              },
            ],
            _postman_id: '89954afa-be7c-40f0-8124-57daa92108b2',
          },
          {
            _postman_isSubFolder: true,
            name: 'Ordering',
            description:
              "API request may include `ordering` parameter. This parameter controls the order in which results are returned.\n\nResults can be ordered by the following fields. The user may also specify reverse orderings by prefixing the field name with '-', like so: `-title`\n\n",
            item: [
              {
                name: 'title',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'ordering',
                        value: 'title',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=title&format=json&reporting_organisation_identifier=DE-1&ordering=title',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'b23ea775-cfec-4ef5-a8a8-3535289e186f',
              },
              {
                name: 'planned_start_date',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=title&format=json&reporting_organisation_identifier=DE-1&ordering=planned_start_date',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '41bf1464-f4b0-4427-a517-3026c09e7153',
              },
              {
                name: 'actual_start_date',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=actual_start_date',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '202b234f-53f1-4011-ae05-0d9c1fc7a05b',
              },
              {
                name: 'planned_end_date',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=planned_end_date',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'c7d93b8e-2412-4dd9-bdc7-ec9128dd67f4',
              },
              {
                name: 'actual_end_date',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=actual_end_date',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '33b5638e-2bb4-4449-a315-7be2694839c7',
              },
              {
                name: 'start_date',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    '`start_date` is `actual_start_date` if it is available, otherwise `start_date` is `planned_start_date`.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=start_date',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '0cdabed6-8cc4-456a-86d5-53dfe60d93ad',
              },
              {
                name: 'end_date',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    '`end_date` is `actual_end_date` if it is available, otherwise `end_date` is `planned_end_date`.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=end_date',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: 'ad20c5b7-2cd7-4c49-8995-f195c26619c6',
              },
              {
                name: 'activity_budget_value',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'budgets',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?total_budget_gte=1&format=json&reporting_organisation_identifier=DE-1&ordering=activity_budget_value&format=json&fields=budgets',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '0df4ddfa-6b12-4eda-ba2a-d8e4607e79ee',
              },
              {
                name: 'activity_incoming_funds_value',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=activity_incoming_funds_value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '72949e42-52a0-4ce3-82d1-fe5d6135502d',
              },
              {
                name: 'activity_disbursement_value',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=activity_disbursement_value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '8a72d621-3694-4d03-a794-fb7c2040a1d1',
              },
              {
                name: 'activity_expenditure_value',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/?fields=reporting_organisation,title&format=json&reporting_organisation_identifier=DE-1&ordering=activity_expenditure_value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', ''],
                  },
                },
                _postman_id: '8a5ec729-80e3-436d-bced-8901db6dad66',
              },
            ],
            _postman_id: '94d48dd0-96c5-49aa-acef-d8b3f681d9b1',
          },
          {
            _postman_isSubFolder: true,
            name: 'Aggregation',
            description:
              'API request has to include `group_by` parameter. Available options for `group_by` are:\n\n- `recipient_country`\n- `recipient_region`\n- `sector`\n- `related_activity`\n- `reporting_organisation`\n- `participating_organisation`\n- `participating_organisation_type`\n- `document_link_category`\n- `document_link_file_format`\n- `activity_status`\n\n\nAvailable `aggregation` are:\n\n-`count`\n-`count_distinct`',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '1e808992-01e4-4366-b069-2e81b5398ec9',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'recipient_country',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=recipient_country&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'recipient_country',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '67d080cb-ec71-4094-aa7f-8c05b7bb27ca',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'recipient_region',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=recipient_region&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'recipient_region',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '1b6f6341-bfb5-4fa3-b6c4-96079dc5db5e',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'sector',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=sector&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'sector',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'a05cb1a3-530a-42da-8d81-f0ebe3a771f9',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'related_activity',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=related_activity&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'related_activity',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '2d90d809-6d52-4c84-b53d-25875fad79a3',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'reporting_organisation',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=reporting_organisation&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'reporting_organisation',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '5af3752f-bfd6-4362-be29-fd3534d50680',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'participating_organisation',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=participating_organisation&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'participating_organisation',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '4d43ebc7-ade5-405c-81ef-90ec96583884',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'participating_organisation_type',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=participating_organisation_type&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'participating_organisation_type',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '3136e037-3fd1-44b0-892a-4771ba431f6c',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'document_link_category',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=document_link_category&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'document_link_category',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '8f2d4d45-127d-4a49-bb8b-6f40c9725cfe',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'document_link_file_format',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=document_link_file_format&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'document_link_file_format',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'b7a3df9f-98e8-486a-a1cd-e169b57c4edc',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'group_by',
                        value: 'activity_status',
                      },
                      {
                        key: 'aggregations',
                        value: 'count',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/aggregations/?format=json&group_by=activity_status&aggregations=count',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'aggregations', ''],
                  },
                },
                name: 'activity_status',
              },
            ],
            _postman_id: '31cdfaed-8f8b-4a5b-a38b-a29268eda929',
          },
          {
            name: 'activities',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'Each item contains summarized information on the activity being shown, including the URI to activity details, which contain all information. To show more information in list view the fields parameter can be used. Example; `fields=activity_id,title,country,any_field`.',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                  },
                  {
                    disabled: true,
                    key: 'fields',
                    value: 'locations',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/activities/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'activities', ''],
              },
            },
            _postman_id: 'debbe231-72a6-46a8-8974-6fb636c9dfcf',
          },
          {
            name: 'Activity CSV export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'This request is for Activity CSV export. \n\nNote -  Activities are exploded according to the number of sectors in that activity. For example, if ther are three sectors in an activity, there would be 3 rows for each sector for parent activity. \nThere will be 13 columns for transaction types. Related transaction value is aggregated in respective columns.\n\nMultiple `recipient_countries` or `recipient_regions` could be in one cell if parent `activity` has multiple of them.\n\n## Default columns\nThe following columns are default for CSV export. Other fields in the activity can be specified in `fields` parameter.\n\n* `iati_identifier`\n* `sectors`\n* `recipient_regions`\n* `recipient_countries`',
              header: [],
              url: {
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
                raw:
                  'https://iatidatastore.iatistandard.org/api/activities/?format=csv&fields=descriptions,title,transaction_types',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'activities', ''],
              },
            },
            _postman_id: '4e4ea614-7e9e-4186-a0a7-e73320509fc1',
          },
          {
            name: 'Activity XLS export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
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
                raw:
                  'https://iatidatastore.iatistandard.org/api/activities/?format=xls&fields=descriptions,title,transaction_types',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'activities', ''],
              },
            },
            _postman_id: '165ecf08-69d3-47c8-9fb9-c5d584c1d26a',
          },
          {
            name: 'Activity XML export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'xml',
                  },
                  {
                    key: 'fields',
                    value: 'all',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/activities/?format=xml&fields=all',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'activities', ''],
              },
            },
            _postman_id: '5af912d5-8a24-4495-a938-24f6c810bade',
          },
        ],
        name: 'Activity List  ',
      },
      {
        description:
          'Returns detailed information of the activity specified by `iati-identifier` of the activity.\n\n## URL format\n`/api/activities/{iati-identifier}`\n\n',
        _postman_id: 'c466f1e0-e81e-43ad-8105-488370379d3c',
        item: [
          {
            _postman_id: '0624381f-a5b4-4840-b84d-b50575992ade',
            _postman_isSubFolder: true,
            item: [
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Only comma seperated selected fields will be displayed. The available fiels are:\n\n* `url`\n* `id`\n* `iati_identifier`\n* `reporting_organisation`\n* `title`\n* `descriptions`\n* `participating_organisations`\n* `other_identifier`\n* `activity_status`\n* `budget_not_provided`\n* `activity_dates`\n* `contact_info`\n* `activity_scope`\n* `recipient_countries`\n* `recipient_regions`\n* `locations`\n* `sectors`\n* `tags`\n* `country_budget_items`\n* `humanitarian`\n* `humanitarian_scope`\n* `policy_markers`\n* `collaboration_type`\n* `default_flow_type`\n* `default_finance_type`\n* `default_aid_type`\n* `default_tied_status`\n* `budgets`\n* `planned_disbursements`\n* `capital_spend`\n* `transactions`\n* `related_transactions`\n* `document_links`\n* `related_activities`\n* `legacy_data`\n* `conditions`\n* `results`\n* `crs_add`\n* `fss`\n* `last_updated_datetime`\n* `xml_lang`\n* `default_currency`\n* `humanitarian`\n* `hierarchy`\n* `linked_data_uri`\n* `secondary_reporter`\n* `aggregations`\n* `dataset`\n* `publisher`\n* `published_state`\n* `transaction_types`\n\n\nMaximum of 100 `related_transactions` will display in `activity` endpoint. If an `activity` has more than 100 `related-transactions`, `transaction` endpoint should be used.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/activities/GB-CHC-285776-DRC429?format=json&fields=title,iati_identifier',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'activities', 'GB-CHC-285776-DRC429'],
                  },
                },
                _postman_id: '0835e9ad-a1a1-4bac-83f3-d0bb7bde6fd5',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'activity details',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/activities/GB-CHC-285776-DRC429/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'activities', 'GB-CHC-285776-DRC429', ''],
              },
            },
            _postman_id: '80a667ba-cdfc-4c76-b120-bfaa2df80dc7',
          },
        ],
        name: 'Activity Detail',
      },
      {
        description:
          ' Returns a list of IATI Datasets stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` Dataset in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'f9a14857-4401-40f9-9560-fc82ef6c6cbb',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '58020886-e5b8-41c3-be4d-555c8f038485',
            item: [
              {
                name: 'name (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'Returns datasets with the given name(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/datasets/?name=111111_publisher-activities&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'datasets', ''],
                  },
                },
                _postman_id: 'cc33b761-0b98-47b8-a2bb-ede76efd81b3',
              },
              {
                name: 'filetype (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Filter datasets by type (activity or organisation).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/datasets/?filetype=2&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'datasets', ''],
                  },
                },
                _postman_id: 'e31be94f-2de3-48ab-b43f-a7fa27f5b379',
              },
              {
                name: 'publisher (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns datasets published by the given Publisher ID(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'publisher',
                        value: '752',
                      },
                      {
                        key: 'format',
                        value: 'json',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/datasets/?publisher=752&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'datasets', ''],
                  },
                },
                _postman_id: 'e244460d-88f0-455a-bfc9-01a4be86a450',
              },
              {
                name: 'publisher_identifier (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns datasets published by the given IATI Organisation ID(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/datasets/?publisher_identifier=BE-BCE_KBO-0421210424&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'datasets', ''],
                  },
                },
                _postman_id: '7d73b93f-d0b2-40ef-9e2c-cd4a46946c21',
              },
            ],
            name: 'Request parameters',
          },
          {
            _postman_isSubFolder: true,
            name: 'Ordering',
            description:
              "API request may include `ordering` parameter. This parameter controls the order in which results are returned.\n\nResults can be ordered by all displayed fields except `activities `, `activity_count`, `file_type` and `internal_url`.\n\nThe user may also specify reverse orderings by prefixing the field name with '-', like so: `-publisher`.",
            item: [
              {
                name: 'Dataset ordered by publisher.',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'This is just an example request. DataSet can be ordered by by `name`,`title`,`filetype`,`publisher`,`url`,`source_url`,`activities`,`activity_count`, `date_created`, `date_updated`, `last_found_in_registry`, `iati_version`.  ',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/datasets/?format=json&ordering=publisher',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'datasets', ''],
                  },
                },
                _postman_id: 'daa9d26a-cae5-49b2-bbcd-f57745db291f',
              },
            ],
            _postman_id: 'e0d9393d-b0ef-459a-af37-4e67b26ce908',
          },
          {
            name: 'dataset',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/datasets/{name}`\n\n',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '3',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/datasets/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'datasets', ''],
              },
            },
            _postman_id: 'cc023ff7-557f-4f35-9205-d432034fb667',
          },
        ],
        name: 'Dataset List',
      },
      {
        description:
          ' Returns a list of Budgets stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` budgets in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'ce004c9e-f9a8-480b-8ac2-3eb39fe9f4bb',
        item: [
          {
            _postman_id: '71b08b4b-e081-4697-811e-044084c93699',
            _postman_isSubFolder: true,
            item: [
              {
                name: 'activity_scope (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `budgets` within `activities` with the given activity scope code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'fields',
                        value: 'activity_scope',
                        type: 'text',
                      },
                      {
                        key: 'has_activity_scope',
                        value: 'True',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&activity_scope=1&has_activity_scope=True',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                _postman_id: '6978803d-3f9b-47fc-be80-4c341890abf2',
              },
              {
                name: 'document_link_category (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `budgets` within `activities` with the given document link category code(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&document_link_category=A01',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                _postman_id: '3442494a-3219-4d55-9f84-7555d3099899',
              },
              {
                name: 'planned_start_date_lte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `budgets` within `activities` with a planned start date which is less than or equal to the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&planned_start_date_lte=2004-03-24',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                _postman_id: 'ecc2f95f-3bb8-44fe-b767-d92aa0eb7684',
              },
              {
                name: 'planned_start_date_gte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `budgets` within `activities` with a planned start date which is greater than or equal to the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&planned_start_date_gte=2004-03-24',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                _postman_id: '71591656-7bb0-4a22-b4a0-77222c597f51',
              },
              {
                name: 'actual_start_date_lte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `budgets` within `activities` with an actual start date which is less than or equal to the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&actual_start_date_lte=2004-03-24',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                _postman_id: 'ed1b9fc6-1c4f-4c87-b11e-e20631f436ac',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'c72f327e-175b-4281-8cc1-8f4da44e20b1',
                request: {
                  method: 'GET',
                  description:
                    'Returns `budgets` within `activities` which include the given particpating_organisation(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&participating_organisation=XM-DAC-41114',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                name: 'participating_organisation (optional)',
              },
              {
                name: 'fields (option)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Available fields are:\n* `value`\n* `type`\n* `status`\n* `activity`\n* `period_start`\n* `period_end`\n* `activity_id`\n\n\nThe default fields are:\n* `iati_identifier`\n* `sectors`\n* `recipient_regions`\n* `budgets`\n\nTo get all fields, use `fields=all` parameter.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/?format=json&fields=all',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', ''],
                  },
                },
                _postman_id: '5f25e829-6a0b-4b59-9869-a63da1d70723',
              },
            ],
            name: 'request parameters',
          },
          {
            name: 'budget',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                  {
                    key: 'page',
                    value: '3',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/budgets/?format=json&page=3',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'budgets', ''],
              },
            },
            _postman_id: 'b91795e7-48ca-4e4f-a73e-d636b358a393',
          },
          {
            name: 'budget CSV export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'csv',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/budgets/?format=csv',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'budgets', ''],
              },
            },
            _postman_id: '91852139-7f05-499d-855d-cb98d96af65d',
          },
        ],
        name: 'Budget List',
      },
      {
        description:
          'Returns aggregations based on the item grouped by, and the selected aggregation.',
        _postman_id: '7aec9394-6b33-40a4-a492-d9260f8e4b22',
        item: [
          {
            _postman_isSubFolder: true,
            name: 'Group by options',
            description:
              'API request has to include `group_by` parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:',
            item: [
              {
                name: 'recipient_country',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?recipient_country=BD,MM&group_by=recipient_country&aggregations=count,activity_count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '59797d79-7a1b-4ac1-b2e4-e7031777e8ec',
              },
              {
                name: 'recipient_region',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=recipient_region&aggregations=count,activity_count,value&format=json&recipient_region=380,619',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '72a57100-292d-4dcd-ba44-935b47776335',
              },
              {
                name: 'sector',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'sector',
                        value: '41030',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=sector&aggregations=count,activity_count,value&format=json&sector=41030',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '2ea55de9-8814-49ef-b97d-b71d4e8464ba',
              },
              {
                name: 'related_activity',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'related_activity_id',
                        value: 'BJ-IFU-6201300688700-RSG0123375-29295',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=related_activity&aggregations=count,activity_count,value&format=json&related_activity_id=BJ-IFU-6201300688700-RSG0123375-29295',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: 'fcc51529-2b07-42fd-ac2a-ff2eba040105',
              },
              {
                name: 'reporting_organisation',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'GB-CHC-285776',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=reporting_organisation&aggregations=count,activity_count,value&format=json&reporting_organisation_identifier=GB-CHC-285776',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: 'cc1c23a2-a4fa-4f61-88d6-6f0dfcae48ae',
              },
              {
                name: 'participating_organisation',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=participating_organisation&aggregations=count,activity_count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: 'd140f395-3fc5-4364-a2d6-7a3e5af6e66f',
              },
              {
                name: 'participating_organisation_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'participating_organisation',
                        value: 'AU-5',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=participating_organisation_type&aggregations=count,activity_count,value&format=json&participating_organisation=AU-5',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '37710c65-a814-448e-9c49-c2bc1a1ca939',
              },
              {
                name: 'document_link_category',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'reporting_organisation_identifier',
                        value: 'US-USAGOV',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=document_link_category&aggregations=count,activity_count,value&format=json&reporting_organisation_identifier=US-USAGOV',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '3e86c2e1-ae31-4b14-8766-41dc30021872',
              },
              {
                name: 'activity_status',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                      },
                      {
                        key: 'activity_status',
                        value: '1,2',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=activity_status&aggregations=count,activity_count,value&format=json&activity_status=1,2',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '6206bb21-c651-4efe-a1fc-f1bada816141',
              },
              {
                name: 'collaboration_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'collaboration_type',
                        value: '1,2',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=collaboration_type&aggregations=count,activity_count,value&format=json&collaboration_type=1,2',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '76657154-15e7-4f12-b2a1-0a40c6542a86',
              },
              {
                name: 'budget_period_start_year',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=budget_period_start_year&aggregations=count,activity_count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '12df3ba1-29f0-410c-af2e-9c5963e2fa22',
              },
              {
                name: 'budget_period_end_year',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=budget_period_end_year&aggregations=count,activity_count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: 'f8f372a2-3f2c-4eb2-9e7a-4315d59a7290',
              },
              {
                name: 'budget_period_end_quarter',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=budget_period_end_quarter&aggregations=count,activity_count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: 'd2e629b7-0a3f-4e9b-bd87-e34ead6d8d14',
              },
              {
                name: 'budget_period_start_month',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/budgets/aggregations/?group_by=budget_period_start_month&aggregations=count,activity_count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'budgets', 'aggregations', ''],
                  },
                },
                _postman_id: '5ae5c1a6-73c5-4480-a02c-2d7f3bc8a3e1',
              },
            ],
            _postman_id: '7ca3d11e-5074-4701-98cc-985fb742a604',
          },
          {
            _postman_isSubFolder: true,
            name: 'Aggregation options',
            description:
              'API request has to include `aggregations` parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:\n\n* `count` Count of budgets\n* `activity_count` Count of activities\n* `value` Sum of budget value (in the selected currency)',
            item: [],
            _postman_id: 'b0a5dd83-c85e-4d4b-9b10-7b9d29d9837b',
          },
        ],
        name: 'Budget Aggregations',
      },
      {
        description:
          'Returns a list of IATI Codelists stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` codelists in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'd9b0fdd9-f3b9-4022-b108-96f447ca4015',
        item: [
          {
            name: 'codelist',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/codelists/{codelistname}/`',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/codelists/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'codelists', ''],
              },
            },
            _postman_id: 'c3d7c3d2-c7b1-487a-acfb-e2a147dec68e',
          },
          {
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            _postman_id: 'a254103b-f6d6-4b84-ae31-f0e1b8bdc6a4',
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/codelists/ActivityDateType/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'codelists', 'ActivityDateType', ''],
              },
            },
            name: 'CodeList Detail',
          },
        ],
        name: 'Codelist Meta List',
      },
      {
        description:
          'Returns a list of IATI Countries stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` countries in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: '859039a9-182c-45ac-9803-0b6f0e1d4c67',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '8088e93a-fe65-4b11-9e82-023097fcff82',
            item: [
              {
                name: 'code (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `countries` with given country code(s).',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'fields',
                        value: 'region',
                        type: 'text',
                      },
                      {
                        key: 'code',
                        value: 'GH',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/countries/?format=json&code=GH',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'countries', ''],
                  },
                },
                _postman_id: '1661e668-c67e-405f-9880-3b58ccf0431c',
              },
              {
                name: 'name (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'Returns `countries` with given name(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/countries/?name=Malaysia&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'countries', ''],
                  },
                },
                _postman_id: '3447ad19-4e86-4484-911c-ad5d511231d5',
              },
              {
                name: 'region_code (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'Returns `countries` with given region code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/countries/?region_code=998&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'countries', ''],
                  },
                },
                _postman_id: 'c4cc6198-c7ce-4f0b-b187-9eeed957066d',
              },
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'List of fields to display.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'name',
                        value: 'Myanmar',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/countries/?fields=region,polygon&format=json&name=Myanmar',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'countries', ''],
                  },
                },
                _postman_id: '9786774f-8e83-498d-ba9a-09a26ff37906',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'country',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/counties/{country_id}`',
              header: [],
              url: {
                query: [
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '5',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '3',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/countries/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'countries', ''],
              },
            },
            _postman_id: 'c7bc4615-ea23-4c10-b043-35a0fdf2831d',
          },
        ],
        name: 'Country List',
      },
      {
        description:
          'Returns a list of IATI Locations stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` locations in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: '5dedc135-882a-475e-b847-e932bb0b2d94',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: 'f988522a-ef15-4577-a2d4-2e3c749259bd',
            item: [
              {
                name: 'activity_status(optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `locations` within `activities` with the given activity status code(s).',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'description,ref',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/locations/?activity_status=2&format=json&fields=description,ref',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'locations', ''],
                  },
                },
                _postman_id: '69617f3f-99a3-43bd-ae88-df7a05a3c3cb',
              },
              {
                name: 'organisation_iati_identifier',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `locations` for the given publisher(s) IATI Organisation ID.',
                  header: [],
                  url: {
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
                        description: 'undp',
                        value: 'XM-DAC-41114',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/locations/?format=json&fields=id,description,ref,reporting_organisations&organisation_iati_identifier=XM-DAC-41114',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'locations', ''],
                  },
                },
                _postman_id: 'e8d3c9af-06da-48bf-adb6-4bf3bb357eb2',
              },
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Available fields are:\n* `id`\n* `activity`\n* `iati_identifier`\n* `ref`\n* `location_reach`\n* `location_id`\n* `name`\n* `description`\n* `activity_description`\n* `administrative`\n* `point`\n* `exactness`\n* `location_class`\n* `feature_designation`\n* `sectors`\n* `recipient_countries`\n* `recipient_regions`\n* `reporting_organisations`',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/locations/?format=json&fields=reporting_organisations',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'locations', ''],
                  },
                },
                _postman_id: 'ee714c9c-e053-40d6-826a-a1c382e68d15',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'location',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/locations/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'locations', ''],
              },
            },
            _postman_id: '69300845-6c6a-42f8-98bb-9f9dba4c0dab',
          },
        ],
        name: 'Location List',
      },
      {
        description:
          'Returns a list of IATI Organisations stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` organisation in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.\n\n',
        _postman_id: 'ac53baeb-0d95-4d93-9cc9-527aa294e846',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '9c13351b-75c0-4c18-bb89-3c7c720f58ca',
            item: [
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Available fields are:\n* `url`\n* `id`\n* `published_state`\n* `primary_name`\n* `default_currency`\n* `last_updated_datetime`\n*  `xml_lang`\n*  `organisation_identifier`\n*  `name`\n*  `reporting_org`\n*  `total_budgets`\n*  `recipient_org_budgets`\n*  `recipient_region_budgets`\n*  `recipient_country_budgets`\n*  `total_expenditures`\n*  `document_links`',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/?format=json&fields=primary_name,total_expenditures',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', ''],
                  },
                },
                _postman_id: 'deabb358-2e66-466a-a2e3-8a32de69323a',
              },
              {
                name: 'organisation_identifier (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns organisation file data for the given organisaition identifier(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/?format=json&organisation_identifier=XM-DAC-41114',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', ''],
                  },
                },
                _postman_id: '1912d51d-9ec6-43aa-9b11-df9659e32c2f',
              },
              {
                name: 'name (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns organisation file data for the given organisation name(s).',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/?format=json&name=Access to Seeds Foundation,Across',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', ''],
                  },
                },
                _postman_id: '5ae48e7c-d15c-4c9b-b0e2-3544d9937c49',
              },
              {
                name: 'is_reporting_organisation',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns organisation file data for organisations who are IATI publishers.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/?format=json&is_reporting_organisation=True',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', ''],
                  },
                },
                _postman_id: '89f57839-20df-4b6c-a2a3-1ad083722e85',
              },
            ],
            name: 'Request parameters',
          },
          {
            _postman_isSubFolder: true,
            name: 'Document-link List',
            description:
              'Returns a list of `organisation/document-link` stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` `organisation/document-link` in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'ea8d380d-3b66-4675-aeaf-92b3e7e54490',
                request: {
                  method: 'GET',
                  description:
                    '`document-link` can be filtered by  `organisation_identifier`.',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'organisation_identifier',
                        value: 'XM-DAC-6-4',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/document-link/?format=json&organisation_identifier=XM-DAC-6-4',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', 'document-link', ''],
                  },
                },
                name: 'document-link',
              },
            ],
            _postman_id: '9ec4b69a-d7ca-47b8-a6c9-80a35a4a015c',
          },
          {
            _postman_isSubFolder: true,
            name: 'Recipient-country-budget',
            description:
              'Returns a list of `organisation/recipient-country-budget` stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` `organisation/recipient-country-budget` in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'fd36976a-b657-4584-939e-e6d5a463ea9b',
                request: {
                  method: 'GET',
                  description:
                    '`recipient-country-budget` can be filtered by  `organisation_identifier`.',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'organisation_identifier',
                        value: 'XM-DAC-6-4',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/recipient-country-budget/?format=json&organisation_identifier=XM-DAC-6-4',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: [
                      'api',
                      'organisations',
                      'recipient-country-budget',
                      '',
                    ],
                  },
                },
                name: 'recipient-country-budget',
              },
            ],
            _postman_id: '325af9b7-8ec1-4afa-8198-2ed3e81f4481',
          },
          {
            _postman_isSubFolder: true,
            name: 'Recipient-org-budget',
            description:
              'Returns a list of `organisation/recipient-org-budget` stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` `organisation/recipient-org-budget` in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'b415b8e5-eb9f-4f29-81dd-70736159a5c5',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'organisation_identifier',
                        value: 'CA-3',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/recipient-org-budget/?format=json&organisation_identifier=CA-3',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', 'recipient-org-budget', ''],
                  },
                },
                name: 'recipient-org-budget',
              },
            ],
            _postman_id: 'add201f4-19a6-49fa-baba-ee2589bce69d',
          },
          {
            _postman_isSubFolder: true,
            name: 'Recipient-region-budget',
            description:
              'Returns a list of `organisation/document-link` stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` `organisation/document-link` in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
            item: [],
            _postman_id: 'f96b23ce-5cbb-4de0-8604-b4689b61954a',
          },
          {
            _postman_isSubFolder: true,
            name: 'Total-budget',
            description:
              'Returns a list of `organisation/total-budget` stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` `organisation/total-budget` in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '37a4880e-e0ad-4afa-aec0-aec4064c0410',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'format',
                        value: 'json',
                      },
                      {
                        key: 'organisation_identifier',
                        value: 'XM-DAC-6-4',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/organisations/total-budget/?format=json&organisation_identifier=XM-DAC-6-4',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'organisations', 'total-budget', ''],
                  },
                },
                name: 'total-budget',
              },
            ],
            _postman_id: 'e6bc0cfe-b2d1-4fbe-b7f6-d80269eb92d7',
          },
          {
            name: 'organisation',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/organisations/{organisation_id}`',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '2',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/organisations/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'organisations', ''],
              },
            },
            _postman_id: 'ad95cfb0-eb8a-4486-9bff-c27475cc17d9',
          },
          {
            name: 'organisation XML export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'xml',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/organisations/?format=xml',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'organisations', ''],
              },
            },
            _postman_id: '3f0c2f94-3179-4d27-8267-804ef1c7f600',
          },
        ],
        name: 'Organisation List',
      },
      {
        description:
          'Returns a list of IATI Publishers stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` publishers in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: '6da0541e-8eb4-4e6b-ae75-6f88dc40d1ff',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '77fdec00-7ca1-4305-8630-afa715970578',
            item: [
              {
                name: 'reporting_organisation_identifier (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `publishers` with the given IATI Organisation ID.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/publishers/?format=json&reporting_organisation_identifier=NL-KVK-3427895',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'publishers', ''],
                  },
                },
                _postman_id: '425dd155-e457-484e-90b5-40eb7bf4f505',
              },
              {
                name: 'display_name (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `publishers` with the given publisher name.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/publishers/?display_name=Koepel van de Vlaamse Noord-Zuidbeweging 11.11.11 VZW&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'publishers', ''],
                  },
                },
                _postman_id: '84f368f6-f0ca-4f2f-95d9-c9ee704c5793',
              },
              {
                name: 'name (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `publishers` with the given Publisher ID.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/publishers/?format=json&name=111111_publisher',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'publishers', ''],
                  },
                },
                _postman_id: '0007d396-76fc-47b1-8f43-116974914a64',
              },
              {
                name: 'is_active',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Filter by `publishers` who either have or have not published IATI data. The parameter value is boolean `True` or `False`.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/publishers/?format=json&is_active=True',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'publishers', ''],
                  },
                },
                _postman_id: 'e286414a-f00d-4e2b-a57c-b16579c51b36',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'publisher',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/publishers/{publisher_iati_id}`\n\n',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '1',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/publishers/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'publishers', ''],
              },
            },
            _postman_id: '471740fb-2a81-4ac8-8ad1-3cc0e00443e6',
          },
        ],
        name: 'Publisher List',
      },
      {
        description:
          'Returns a list of IATI Regions stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` regions in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: '20d6bcd4-02fa-45a2-b85d-0e833368f3cf',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: 'cfc29c71-88f4-4006-9e95-4586c81a5256',
            item: [
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'List of fields to display.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/regions/?fields=location,name,region_vocabulary,parental_region&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'regions', ''],
                  },
                },
                _postman_id: '0fbfb76e-f5cc-48b7-a71e-220eea4c6a34',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'region',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/regions/{region_id}`',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '2',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/regions/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'regions', ''],
              },
            },
            _postman_id: '9b0b6fc4-4e70-436d-ba42-462d291495b2',
          },
        ],
        name: 'Region List',
      },
      {
        description:
          ' Returns a list of IATI Results stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` results in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'd5680d6e-227f-42ea-aee6-ce9c0a68a647',
        item: [
          {
            _postman_id: 'c81edcf9-02e6-432e-9d70-e973f4255d6b',
            _postman_isSubFolder: true,
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'a59411f3-0452-470d-ac49-3d6e55da92c1',
                request: {
                  method: 'GET',
                  description:
                    'Returns `results` from activities with the given activity ID(s)',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/results/?activity_id=BE-BCE_KBO-0421210424-KOEPELPROG2017-2021_SD3&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'results', ''],
                  },
                },
                name: 'activity_id',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'result',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'fields',
                    value: 'all',
                  },
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '2',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/results/?fields=all&format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'results', ''],
              },
            },
            _postman_id: 'e180e7fd-6055-4a09-b9f0-c57065e01ddc',
          },
        ],
        name: 'Result List',
      },
      {
        description:
          'Returns aggregations based on the item grouped by, and the selected aggregation.\n\n',
        _postman_id: 'c9dafa0c-b0e5-46fa-84bb-dc54c86491a6',
        item: [
          {
            _postman_isSubFolder: true,
            name: 'Group by options',
            description:
              'This API request must include the `group_by` parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:\n',
            item: [
              {
                _postman_isSubFolder: true,
                name: 'Request parameters',
                description:
                  'All filters available on the Result List, can be used on aggregations.\n\n',
                item: [],
                _postman_id: '31c031ab-3994-416d-a688-c297f911b6ff',
              },
              {
                name: 'result_indicator_title',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/results/aggregations/?group_by=result_indicator_title&aggregations=targets,actuals&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'results', 'aggregations', ''],
                  },
                },
                _postman_id: '2d7e5cb1-b92c-49ec-98ac-e89c425c5793',
              },
              {
                name: 'result_title',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/results/aggregations/?group_by=result_title&aggregations=actuals&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'results', 'aggregations', ''],
                  },
                },
                _postman_id: 'ccf451eb-fb45-433c-bab7-83c3d6df7264',
              },
            ],
            _postman_id: 'f88168ec-6fec-459b-9e3b-e8e33d0c747b',
          },
          {
            _postman_isSubFolder: true,
            name: 'Aggregation options',
            description:
              'API request has to include aggregations parameter.\n\nThis parameter controls result aggregations and can be one or more (comma separated values) of:\n\n* `target` Indicator period target. Currently breaks on non number results.\n* `actual` Indicator period actual. Currently breaks on non number results.',
            item: [],
            _postman_id: 'da524743-9be7-48af-9ec3-d53d65f5047f',
          },
        ],
        name: 'Result Aggregations',
      },
      {
        description:
          'Returns a list of IATI Sectors stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` sectors in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'e6b294ad-fb4b-4100-b542-54f2c72cb6d2',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '16575bd4-f112-46d1-bd8e-a33a8227ce1e',
            item: [
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'List of fields to display.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/sectors/?fields=category,url,name,code&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'sectors', ''],
                  },
                },
                _postman_id: 'dfefd8e8-1e3a-420f-a29e-8ca194c8ec31',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'sector',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/sectors/{sector_id}`',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/sectors/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'sectors', ''],
              },
            },
            _postman_id: '07233665-1f81-4e32-b8b8-e6e7529cb4b9',
          },
        ],
        name: 'Sector List',
      },
      {
        description:
          'Returns a list of IATI Transactions stored in the IATI Datastore based on 10 results as a default. You can retrieve up to `20` transactions in a single call using the `&page_size=[nr]` option. If you want to go specific page, you can use `&page=[nr]` option. If the input value of `page_size` exceeds 20, the miximum limit number, which is 20,  will be returned.',
        _postman_id: 'abc51749-56f4-4d05-9817-f997e0219a5b',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '9b86d7e7-13b3-4059-82d0-1e397d503d3f',
            item: [
              {
                _postman_isSubFolder: true,
                name: 'Activity Filter',
                description:
                  'All filters in `activity` endpoint can be used to filter transactions with regard to their activies.',
                item: [
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: 'b96ea307-0271-4ef9-ba2f-13ea2711ce5b',
                    request: {
                      method: 'GET',
                      description:
                        'Returns `transactions` from the given Activity ID.',
                      header: [],
                      url: {
                        query: [
                          {
                            key: 'iati_identifier',
                            value: 'US-GOV-1-998-AID-OAA-TO-14-00035',
                          },
                          {
                            key: 'format',
                            value: 'json',
                          },
                          {
                            disabled: true,
                            key: 'fields',
                            value: 'id',
                          },
                        ],
                        raw:
                          'https://iatidatastore.iatistandard.org/api/transactions/?iati_identifier=US-GOV-1-998-AID-OAA-TO-14-00035&format=json',
                        protocol: 'https',
                        host: ['iatidatastore', 'iatistandard', 'org'],
                        path: ['api', 'transactions', ''],
                      },
                    },
                    name: 'iati_identifier',
                  },
                ],
                _postman_id: '6e4c0be4-f6dc-4015-9657-986735283da6',
              },
              {
                name: 'aid_type (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with the given aid type ID.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'aid_type',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?aid_type=A02&format=json&fields=aid_type',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '25bd8aa1-ca68-463d-831b-f703dd6b2a27',
              },
              {
                name: 'transaction_type (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with the given transaction type code.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                      {
                        key: 'fields',
                        value: 'transaction_type',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?transaction_type=3,1&format=json&fields=transaction_type',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '038a6a3b-d2a6-4cad-823b-b3ad96736250',
              },
              {
                name: 'value (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with the given transaction value.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?value=18000000&format=json&fields=value',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: 'ef34d749-605b-4969-b3bb-932384179990',
              },
              {
                name: 'min_value (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with a `value` that is greater than or equal to the given amount.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?min_value=1800000000&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '63c4c08c-1076-4bb8-ad5f-5afc3799f5c3',
              },
              {
                name: 'max_value (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with a `value` that is less than or equal to the given amount.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?max_value=18&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '0d368679-ae53-48ac-bd28-cb1969a11615',
              },
              {
                name: 'transaction_date_year',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with a transaction date that is within the given year.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?transaction_date_year=2012&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '452efb51-28ba-4f3f-b79d-9a23205576eb',
              },
              {
                name: 'transaction_date_lte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with a transaction date that is less than or equal to the given value. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?transaction_date_lte=1983-01-04&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: 'b6ab045b-497e-4609-b4f9-6a060f4d041a',
              },
              {
                name: 'provider_activity (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with the given provider activity ID.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?provider_activity=GB-COH-04105827&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '7edb39b3-caae-45f4-a046-58a7da0050a5',
              },
              {
                name: 'transaction_date_gte (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description:
                    'Returns `transactions` with a transaction date that is greater than or equal to the given vaue. Date must be in `YYYY-MM-DD` format.',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?transaction_date_gte=1983-01-04&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: 'cb12f181-e6db-4e93-be24-b74d469c0ab6',
              },
              {
                name: 'fields (optional)',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  description: 'List of fields to display.',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'format',
                        value: 'csv',
                        type: 'text',
                      },
                      {
                        disabled: true,
                        key: 'format',
                        value: 'xls',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/?fields=url,transaction_type,value,provider_organisation&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', ''],
                  },
                },
                _postman_id: '64619456-a4bb-490e-b187-01d9bae5cacb',
              },
            ],
            name: 'Request parameters',
          },
          {
            name: 'transaction',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              description:
                'URI is constructed as follows: `/api/transactions/{transaction_id}`',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'json',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'csv',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'format',
                    value: 'xls',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page_size',
                    value: '1',
                    type: 'text',
                  },
                  {
                    disabled: true,
                    key: 'page',
                    value: '2',
                    type: 'text',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/transactions/?format=json',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'transactions', ''],
              },
            },
            _postman_id: 'b4b05be4-24cd-493f-8a61-09fb7efa3d52',
          },
          {
            name: 'Transaction CSV export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'csv',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/transactions/?format=csv',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'transactions', ''],
              },
            },
            _postman_id: '1be33381-9fac-4953-a035-aa4cdfb0b37c',
          },
          {
            name: 'Transaction XML export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'xml',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/transactions/?format=xml',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'transactions', ''],
              },
            },
            _postman_id: '75e86f17-427e-467b-8183-ccde5963d7a2',
          },
          {
            name: 'Transaction XLS export',
            protocolProfileBehavior: {
              disableBodyPruning: true,
            },
            request: {
              method: 'GET',
              header: [],
              url: {
                query: [
                  {
                    key: 'format',
                    value: 'xls',
                  },
                ],
                raw:
                  'https://iatidatastore.iatistandard.org/api/transactions/?format=xls',
                protocol: 'https',
                host: ['iatidatastore', 'iatistandard', 'org'],
                path: ['api', 'transactions', ''],
              },
            },
            _postman_id: '7041412e-8259-4644-a953-7e792d599d7a',
          },
        ],
        name: 'Transaction List',
      },
      {
        _postman_id: '02de4cd6-c136-42ce-8cea-a5674d00184d',
        item: [
          {
            _postman_isSubFolder: true,
            name: 'Request parameters',
            description:
              'All filters available on the Transaction List, can be used on aggregations.',
            item: [],
            _postman_id: 'a1236f07-a11a-4409-bcf5-b25063fe07f0',
          },
          {
            _postman_isSubFolder: true,
            name: 'Group by option ',
            description:
              'Returns aggregations based on the item grouped by, and the selected\n    aggregation.\n\nAPI request has to include `group_by` parameter.\n\nThis parameter controls result aggregations and\ncan be one or more (comma separated values) of:\n* `recipient_country`\n* `recipient_region`\n* `sector`\n* `related_activity`\n* `transaction_type`\n* `reporting_organisation`\n* `participating_organisation`\n* `receiver_org`\n* `provider_org`\n* `document_link_category`\n* `activity_status`\n* `participating_organisation_type`\n* `collaboration_type`\n* `default_flow_type`\n* `default_finance_type`\n* `default_aid_type`\n* `default_tied_status`\n* `transaction_date_month`\n* `transaction_date_quarter`\n* `transaction_date_year`\n',
            item: [
              {
                name: 'recipient_country',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=recipient_country&aggregations=count,activity_count&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'a6aee5d4-0a68-42f3-95f3-be27531cd12f',
              },
              {
                name: 'recipient_region',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=recipient_region&aggregations=count&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '91abb21d-9637-4f15-bab7-0a572e53c04a',
              },
              {
                name: 'sector',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=sector&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '5be02bc6-607c-49d6-996e-c2c50af8cf46',
              },
              {
                name: 'related_activity',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=related_activity&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'a51268ca-bb72-464a-a2aa-24ca7f0daacf',
              },
              {
                name: 'transaction_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=transaction_type&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'ae903b5e-84cf-471b-bbad-0c878272d3fb',
              },
              {
                name: 'reporting_organisation',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=reporting_organisation&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'b5d881a7-b47c-4f00-bc0a-56cc8477bec6',
              },
              {
                name: 'participating_organisation',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'group_by',
                        value: 'participating_organisation',
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=participating_organisation&aggregations=count&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '520c29bd-bfe2-434d-a769-c3b2f683b980',
              },
              {
                name: 'receiver_org',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                        disabled: true,
                        key: 'receiver_organisation_name',
                        value: 'Datacom Co. Ltd',
                        type: 'text',
                      },
                    ],
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=receiver_org&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '7e2b801a-2ac1-48e6-8079-e94ad9633956',
              },
              {
                name: 'provider_org',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=provider_org&aggregations=count,value&format=json&provider_organisation_name=Anambra State Government',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '104939b4-810f-43ab-b90d-f95bded6e778',
              },
              {
                name: 'document_link_category',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=document_link_category&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '896da4de-759b-402f-8030-0eb0efb4dafe',
              },
              {
                name: 'activity_status',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=activity_status&aggregations=count,value&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'd6d0b416-a521-48e9-adbd-9d38e58d92bb',
              },
              {
                name: 'participating_organisation_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=participating_organisation_type&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'b84598e8-4b0b-4347-8cae-3c85f73b4139',
              },
              {
                name: 'collaboration_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=collaboration_type&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '92ffd207-4b95-404d-a422-82eab4360580',
              },
              {
                name: 'default_flow_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=default_flow_type&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'a70f3646-303e-4575-b5e3-257c9477340f',
              },
              {
                name: 'default_finance_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=default_finance_type&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '93892374-5e8b-4535-b88d-2fd5cdddab7e',
              },
              {
                name: 'default_aid_type',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=default_aid_type&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'a797b08d-1aa2-44e9-9b0e-948eb1ef288b',
              },
              {
                name: 'default_tied_status',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=default_tied_status&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: 'b065a241-9dcd-4dde-a185-0d0ea1575ab5',
              },
              {
                name: 'transaction_date_month',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=transaction_date_month&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '967d96d2-1735-45a9-8c3e-e03c54abe71c',
              },
              {
                name: 'transaction_date_quarter',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=transaction_date_quarter&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '984d0429-0a29-422b-9d44-239e13e7e734',
              },
              {
                name: 'transaction_date_year',
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                request: {
                  method: 'GET',
                  header: [],
                  url: {
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
                    raw:
                      'https://iatidatastore.iatistandard.org/api/transactions/aggregations/?group_by=transaction_date_year&aggregations=count,value,expenditure&format=json',
                    protocol: 'https',
                    host: ['iatidatastore', 'iatistandard', 'org'],
                    path: ['api', 'transactions', 'aggregations', ''],
                  },
                },
                _postman_id: '54ce9bc0-5f75-46c5-99f7-ae41f033cf85',
              },
            ],
            _postman_id: 'e374fb7d-8fe6-4951-83fa-b8900c055317',
          },
          {
            _postman_isSubFolder: true,
            name: 'Aggregations options',
            description:
              'API request has to include `aggregations` parameter.\n\nThis parameter controls result aggregations and\ncan be one or more (comma separated values) of:\n\n* `count`\n* `activity_count`\n* `value`\n* `disbursement`\n* `expenditure`\n* `commitment`\n* `incoming_fund`\n* `incoming_commitment`\n* `disbursement_expenditure` Disbursement and expenditure summed together.\n',
            item: [],
            _postman_id: '07294285-c0e8-4a1b-a0db-958c20e19db6',
          },
          {
            description:
              "By default the values returned by the aggregations are in the reported\n    currency. This only renders meaningful results when all values were in the\n    same currency. Which is only the case when you filter your results down.\n\nThe aggregation endpoints have the ability to return values in a currency.\n    Options for this `convert_to` parameter are:\n\n* `xdr`\n* `usd`\n* `eur`\n* `gbp`\n* `jpy`\n* `cad`\n\nThis results in converted values when the original value was in another\ncurrency.\n\nInformation on used exchange rates can be found <a href='https://docs.oipa.nl/'>in the docs</a>.",
            _postman_id: '088c5f92-c469-4a85-a586-657cd269d44e',
            _postman_isSubFolder: true,
            item: [],
            name: 'Currency options',
          },
        ],
        name: 'Transaction Aggregations',
      },
      {
        _postman_id: 'c0adc10c-84a2-48d5-bbc1-11cc01e12141',
        item: [
          {
            _postman_isSubFolder: true,
            _postman_id: '16d30fbc-14f8-4d01-a01d-2cfe6696bc61',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'af351f30-95b4-441f-ac1e-4e738d8d5ab4',
                request: {
                  method: 'GET',
                  description:
                    'recipient_country_code:AF AND recipient_country_narrative:Afghanistan\n- 3345\n\nrecipient_country_code:AF\n- 18087\n\nrecipient_country_narrative:Afghanistan\n- 3347\n\n-recipient_country_code:AF AND recipient_country_narrative:Afghanistan\n- 2\n\nrecipient_country_code:AF AND -recipient_country_narrative:Afghanistan\n- 14742\n\nrecipient_country_code:AF AND -recipient_country_narrative:*\n- 14648\n\nrecipient_country_code:AF AND recipient_country_narrative:*\n- 3439\n',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'recipient_country_code:AF',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=recipient_country_code:AF',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'Query By Country',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'afdb6278-e87d-4540-91af-fe651f495dab',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: '*:*',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=*:*',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'Query Activity',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '24d41780-920d-4ff7-bd55-babcefef4397',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: '*:*',
                      },
                      {
                        key: 'facet',
                        value: 'on',
                      },
                      {
                        key: 'facet.field',
                        value: 'recipient_country_code',
                      },
                      {
                        disabled: true,
                        key: 'fl',
                        value: 'facet_counts',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=*:*&facet=on&facet.field=recipient_country_code',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'Query Facet By Country',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '2a4c8124-ab6d-4492-8d82-87a6955d0dc3',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: '*:*',
                      },
                      {
                        key: 'group',
                        value: 'true',
                      },
                      {
                        key: 'fl',
                        value: 'reporting_org_ref,iati_version',
                      },
                      {
                        key: 'group.field',
                        value: 'reporting_org_ref',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select/?q=*:*&group=true&fl=reporting_org_ref,iati_version&group.field=reporting_org_ref',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select', ''],
                  },
                },
                name: 'Query Group By Reporting Organisation',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'd1df8812-7455-4fd9-a0f0-048fbb25c838',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: '*:*',
                      },
                      {
                        key: 'facet.pivot',
                        value: 'reporting_org_ref,iati_version',
                      },
                      {
                        key: 'facet',
                        value: 'on',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select/?q=*:*&facet.pivot=reporting_org_ref,iati_version&facet=on',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select', ''],
                  },
                },
                name: 'Query Group By Multiple Fields',
              },
            ],
            name: 'Activity ',
          },
          {
            _postman_isSubFolder: true,
            _postman_id: '94f40fc3-7d1e-4498-a672-458293f95bd0',
            item: [
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'f157dea0-56b9-416f-9d07-cc541220c7ef',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: '*:*',
                      },
                      {
                        key: 'facet',
                        value: 'on',
                      },
                      {
                        key: 'facet.field',
                        value: 'recipient_country_code',
                      },
                      {
                        key: 'fl',
                        value: 'facet_counts',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=*:*&facet=on&facet.field=recipient_country_code&fl=facet_counts',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name:
                  'Count activity for each country, currently avaiable in DataStore',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '87f93bce-f827-4f32-ba99-0eccc81b2bc5',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'recipient_country_code:KE',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=recipient_country_code:KE',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All activity for Kenya country',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '9adfccf1-9e3c-42cc-90d4-fbbdabd38491',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'reporting_org_ref:XM-DAC-47066',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=reporting_org_ref:XM-DAC-47066',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All activity of the IOM',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '5d8fc0b3-0d29-4a67-a1a8-085e2319900a',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'iati_version:2.03',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=iati_version:2.03',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All Activity with IATI Version 2.03',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'fef8b6a9-1514-4c7d-8e1c-a38735b679ab',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'iati_version:2.02',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=iati_version:2.02',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All Activity with IATI Version 2.02',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'ef6053c2-d047-4f91-8d78-f70ecb2440e1',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'iati_version:2.01',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=iati_version:2.01',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All Activity with IATI Version 2.01',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '2129f009-5d67-44fb-992e-cdaa60acb6f5',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'transaction_humanitarian:1',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=transaction_humanitarian:1',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All Activity with Transaction Humanitarian is True',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'b5ad3dab-3e43-48ca-ad05-eaaaeab49197',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'contact_info_email:mosul@almortaqa.org',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=contact_info_email:mosul@almortaqa.org',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All Activity with Contact Email mosul@almortaqa.org',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: 'ad730a25-370d-4afb-9251-6720c5de0543',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'budget_value:{1000000 TO *}',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search/activity/select?q=budget_value:{1000000 TO *}',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', 'activity', 'select'],
                  },
                },
                name: 'All Activity have budget 1 million or more',
              },
              {
                protocolProfileBehavior: {
                  disableBodyPruning: true,
                },
                _postman_id: '002561fa-d0c4-4c08-9130-1e06097266a7',
                request: {
                  method: 'GET',
                  header: [],
                  url: {
                    query: [
                      {
                        key: 'q',
                        value: 'iati_identifier:GB-COH-04105827-AIDDIRECT',
                      },
                      {
                        key: 'fl',
                        value: 'id,transaction:[json]',
                      },
                      {
                        key: 'wt',
                        value: 'json',
                      },
                    ],
                    raw:
                      'https://api.datastore.iati.cloud/search//activity/select?q=iati_identifier:GB-COH-04105827-AIDDIRECT&fl=id,transaction:[json]&wt=json',
                    protocol: 'https',
                    host: ['api', 'datastore', 'iati', 'cloud'],
                    path: ['search', '', 'activity', 'select'],
                  },
                },
                name:
                  'Get a big activity with more then 1000 transactions records  in JSON format, just in the couple seconds.',
              },
            ],
            name: 'Use Case ',
          },
          {
            _postman_isSubFolder: true,
            _postman_id: 'd53bc5e0-0253-4a9d-99b1-dac57815b933',
            item: [
              {
                _postman_isSubFolder: true,
                name: 'Query DSL',
                description:
                  'https://lucene.apache.org/solr/guide/8_1/json-query-dsl.html',
                item: [
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: '904321b0-389a-4364-8e4d-e301e4eb357f',
                    request: {
                      method: 'POST',
                      body: {
                        mode: 'raw',
                        raw:
                          '{\n\t"query": "transaction_recipient_country_code:PK"\n}',
                      },
                      header: [
                        {
                          key: 'Content-Type',
                          value: 'application/json',
                          type: 'text',
                        },
                      ],
                      url: {
                        query: [
                          {
                            disabled: true,
                            key: '',
                            value: '',
                            type: 'text',
                          },
                        ],
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Query By Country ',
                  },
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: '0fed4f89-b351-4d86-ab55-e672d3333c53',
                    request: {
                      method: 'POST',
                      body: {
                        mode: 'raw',
                        raw:
                          '{\n\t"query": "{!lucene df=transaction_recipient_country_code v=NL}"\n}',
                      },
                      description:
                        'Document Link:\n- https://lucene.apache.org/solr/guide/8_1/json-query-dsl.html\n\nAvaiable paramter can see from this link:\n- http://localhost:8983/solr/#/transaction/query\n-',
                      header: [
                        {
                          key: 'Content-Type',
                          value: 'application/json',
                          type: 'text',
                        },
                      ],
                      url: {
                        query: [
                          {
                            disabled: true,
                            key: '',
                            value: '',
                            type: 'text',
                          },
                        ],
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Query By Country  with Local Variable',
                  },
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: '3cd3a208-a1dc-48cd-9350-44a0b968ff22',
                    request: {
                      method: 'POST',
                      body: {
                        mode: 'raw',
                        raw:
                          '{\n\t"query": "transaction_value_date:[2016-01-01T00:00:00Z TO 2017-12-31T00:00:00Z]"\n}',
                      },
                      description:
                        'Document Link:\n- https://lucene.apache.org/solr/guide/8_1/json-query-dsl.html\n- https://lucene.apache.org/solr/guide/8_1/working-with-dates.html\n\nAvaiable paramter can see from this link:\n- http://localhost:8983/solr/#/transaction/query',
                      header: [
                        {
                          key: 'Content-Type',
                          value: 'application/json',
                          type: 'text',
                        },
                      ],
                      url: {
                        query: [
                          {
                            disabled: true,
                            key: '',
                            value: '',
                            type: 'text',
                          },
                        ],
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Query By Start Date To End Date ',
                  },
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: '90a8a5fe-9511-4fba-93e6-f0135fd75305',
                    request: {
                      method: 'POST',
                      body: {
                        mode: 'raw',
                        raw:
                          '{\n\t"query": {\n\t\t"lucene": {\n\t\t\t"df": "transaction_recipient_country_code",\n\t\t\t"query": "PK AF"\n\t\t}\n\t}\n}',
                      },
                      header: [
                        {
                          key: 'Content-Type',
                          value: 'application/json',
                          type: 'text',
                        },
                      ],
                      url: {
                        query: [
                          {
                            disabled: true,
                            key: '',
                            value: '',
                            type: 'text',
                          },
                        ],
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Query By Multiple Countries ',
                  },
                ],
                _postman_id: 'c36e02cd-f980-469b-8404-0c576f673b24',
              },
              {
                _postman_isSubFolder: true,
                name: 'JSON Facet API',
                description:
                  'https://lucene.apache.org/solr/guide/8_0/json-facet-api.html',
                item: [
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: 'e78b181b-1bc0-4c65-8e5a-aa1a260e62c1',
                    request: {
                      method: 'POST',
                      body: {
                        formdata: [
                          {
                            key: 'q',
                            value: 'transaction_recipient_country_code:PK',
                            type: 'text',
                          },
                          {
                            key: 'json.facet',
                            value: '{blabla: "sum(transaction_value)"}',
                            type: 'text',
                          },
                          {
                            disabled: true,
                            key: 'fl',
                            value: 'facets',
                            type: 'text',
                          },
                        ],
                        mode: 'formdata',
                      },
                      header: [],
                      url: {
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Aggregation By Country',
                  },
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: '56a5ccf9-67f5-42e9-8423-b89130b0c51c',
                    request: {
                      method: 'POST',
                      body: {
                        formdata: [
                          {
                            key: 'q',
                            value:
                              'transaction_recipient_country_code:PK AND transaction_value_currency:EUR',
                            type: 'text',
                          },
                          {
                            key: 'json.facet',
                            value:
                              '{total_value_eur: "sum(transaction_value)"}',
                            type: 'text',
                          },
                          {
                            disabled: true,
                            key: 'fl',
                            value: 'facets',
                            type: 'text',
                          },
                        ],
                        mode: 'formdata',
                      },
                      header: [],
                      url: {
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Aggregation By Country & Currency',
                  },
                  {
                    protocolProfileBehavior: {
                      disableBodyPruning: true,
                    },
                    _postman_id: 'e48bc2cf-13cd-440c-a844-3d3ff98dba6b',
                    request: {
                      method: 'POST',
                      body: {
                        formdata: [
                          {
                            key: 'q',
                            value:
                              'transaction_recipient_country_code:PK AND transaction_value_date:[2016-01-01T00:00:00Z TO 2017-12-31T00:00:00Z]',
                            type: 'text',
                          },
                          {
                            key: 'json.facet',
                            value: '{total_value: "sum(transaction_value)"}',
                            type: 'text',
                          },
                        ],
                        mode: 'formdata',
                      },
                      header: [],
                      url: {
                        raw:
                          'https://api.datastore.iati.cloud/search/transaction/query',
                        protocol: 'https',
                        host: ['api', 'datastore', 'iati', 'cloud'],
                        path: ['search', 'transaction', 'query'],
                      },
                    },
                    name: 'Aggregation By Country From Start Date To End Date',
                  },
                ],
                _postman_id: 'db82f103-ec89-49e0-8d57-f7cdcf28297a',
              },
            ],
            name: 'Transaction',
          },
        ],
        name: 'DataStore Search Engine',
      },
    ],
    info: {
      schema:
        'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
      name: 'API Documentation',
      description:
        'This API provides programmatic access to query IATI data. The API responses are available in JSON, XML and CSV format. The API is developed using the Django rest framework and also makes use of Solr, an open source enterprise search platform, written in Java.\n\n# Available endpoints\n\n* Activities: `api/activities/`\n* Budget aggregation: `/api/budgets/aggregations`\n* Codelists: `/api/codelists`\n* Countries: `/api/countries`\n* Current branch: `/api/branch`\n* Datasets: `/api/datasets`\n* Locations: `/api/locations`\n* Organisations: `/api/organisations`\n* Publishers: `/api/publishers`\n* Regions: `/api/regions`\n* Results aggregations: `/api/results/aggregations`\n* Sectors: `/api/sectors`\n* Transactions: `/api/transactions`\n\n\n# XML export\nIf you require XML format from the API, simply use the format  &format=XML in your call. \n\n# CSV export\nIf you require CSV format from the API, simply use the format  &format=CSV in your call. \n\nNot all the API calls have multi format support.\n',
      _postman_id: 'c07eebd3-61b2-47b4-9bfd-1bac7ec96c9f',
    },
  },
};
