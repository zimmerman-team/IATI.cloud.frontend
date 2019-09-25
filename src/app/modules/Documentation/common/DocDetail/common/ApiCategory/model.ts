import { ApiCallModel } from 'app/modules/Documentation/common/DocDetail/common/ApiCategory/common/ApiCallFragment/model';

export type ApiCallCategoryModel = {
  categoryName: string;
  categoryDesc: string;
  categoryCalls: ApiCallModel[];
  _postman_id?: string;
  name?: string;
  description?: string;
  item?: ApiCallModel[];
};
