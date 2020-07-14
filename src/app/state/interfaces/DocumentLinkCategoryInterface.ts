import { ActivityStatusModel } from 'app/state/models';
import { getdocumentLinkCategory } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface DocumentLinkCategoryInterface
  extends ApiModel<ActivityStatusModel[]> {}

const documentLinkCategory: DocumentLinkCategoryInterface = {
  ...api(getdocumentLinkCategory),
};

export default documentLinkCategory;
