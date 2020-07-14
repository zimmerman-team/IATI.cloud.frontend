import { ActivityStatusModel } from 'app/state/models';
import { getHierarchy } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface HierarchyInterface extends ApiModel<ActivityStatusModel[]> {}

const hierarchy: HierarchyInterface = {
  ...api(getHierarchy),
};

export default hierarchy;
