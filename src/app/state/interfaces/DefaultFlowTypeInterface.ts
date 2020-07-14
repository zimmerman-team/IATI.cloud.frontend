import { ActivityStatusModel } from 'app/state/models';
import { getDefaultFlowType } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface DefaultFlowTypeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const defaultFlowType: DefaultFlowTypeInterface = {
  ...api(getDefaultFlowType),
};

export default defaultFlowType;
