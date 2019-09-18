import { ActivityStatusModel } from 'app/state/models';
import { getCollaborationType } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface CollaborationTypeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const collaborationTypeInterface: CollaborationTypeInterface = {
  ...api(getCollaborationType),
};

export default collaborationTypeInterface;
