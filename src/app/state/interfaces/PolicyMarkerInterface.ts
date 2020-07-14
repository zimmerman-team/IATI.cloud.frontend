import { ActivityStatusModel } from 'app/state/models';
import { getPolicyMarker } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface PolicyMarkerInterface
  extends ApiModel<ActivityStatusModel[]> {}

const policyMarker: PolicyMarkerInterface = {
  ...api(getPolicyMarker),
};

export default policyMarker;
