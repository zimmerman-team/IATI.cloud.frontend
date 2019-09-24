import { ApiCallMock } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory/common/ApiCallFragment/mock';
import { ApiDocModel } from 'app/modules/Documentation/model';

export const ApiDocMock: ApiDocModel = {
  apiDocCategories: [
    {
      categoryName: 'Activity List',
      categoryDesc:
        'Returns a list of IATI Activities stored in the IATI Datastore based on 10 results as a default. You can retrieve up to 20 activities in a single call using the &page_size=[nr] option. If you want to go specific page, you can use &page=[nr] option. If the input value of page_size exceeds 20, the miximum limit number, which is 20, will be returned.',
      categoryCalls: ApiCallMock,
    },
    {
      categoryName: 'Activity Detail',
      categoryDesc:
        'Returns detailed information of the activity specified by iati-identifier of the activity.',
      categoryCalls: ApiCallMock,
    },
  ],
};
