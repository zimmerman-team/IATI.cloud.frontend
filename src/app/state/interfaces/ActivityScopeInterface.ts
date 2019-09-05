import { ActivityStatusModel } from 'app/state/models';
import { getActivityScope } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface ActivityScopeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const activityScope: ActivityScopeInterface = {
  ...api(getActivityScope),
};

export default activityScope;
