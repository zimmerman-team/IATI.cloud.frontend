import { ActivityStatusModel } from 'app/state/models';
import { getAidType } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface AidTypeInterface extends ApiModel<ActivityStatusModel[]> {}

const aidType: AidTypeInterface = {
  ...api(getAidType),
};

export default aidType;
