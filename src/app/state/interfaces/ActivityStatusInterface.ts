import { ActivityStatusModel } from 'app/state/models';
import { getActivityStatus } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface ActivityStatusInterface
  extends ApiModel<ActivityStatusModel[]> {}

const activityStatus: ActivityStatusInterface = {
  ...api(getActivityStatus),
};

export default activityStatus;
