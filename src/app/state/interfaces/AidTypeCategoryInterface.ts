import { ActivityStatusModel } from 'app/state/models';
import { getAidTypeCategory } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface AidTypeCategoryInterface
  extends ApiModel<ActivityStatusModel[]> {}

const aidTypeCategory: AidTypeCategoryInterface = {
  ...api(getAidTypeCategory),
};

export default aidTypeCategory;
