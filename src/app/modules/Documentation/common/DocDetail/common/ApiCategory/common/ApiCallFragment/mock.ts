import { ApiCallModel } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory/common/ApiCallFragment/model';

export const ApiCallMock: ApiCallModel[] = [
  {
    callType: 'GET',
    callPath:
      'https://test-datastore.iatistandard.org/api/activities/?format=json',
    callParameters: [
      {
        paramName: 'format',
        paramValue: 'json',
      },
      {
        paramName: 'fields',
        paramValue: 'all',
      },
      {
        paramName: 'ordering',
        paramValue: 'publisher',
      },
    ],
    callDescription:
      'Each item contains summarized information on the activity being shown, including the URI to activity details, which contain all information. To show more information in list view the fields parameter can be used. Example; fields=activity_id,title,country,any_field.',
  },
  {
    callType: 'GET',
    callPath:
      'https://test-datastore.iatistandard.org/api/activities/?format=json',
    callParameters: [
      {
        paramName: 'format',
        paramValue: 'json',
      },
      {
        paramName: 'fields',
        paramValue: 'all',
      },
      {
        paramName: 'ordering',
        paramValue: 'publisher',
      },
    ],
    callDescription:
      'Each item contains summarized information on the activity being shown, including the URI to activity details, which contain all information. To show more information in list view the fields parameter can be used. Example; fields=activity_id,title,country,any_field.',
  },
];
