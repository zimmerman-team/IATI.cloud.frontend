import { ActivityStatusModel } from 'app/state/models';
import { getTiedStatus } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TiedStatusInterface extends ApiModel<ActivityStatusModel[]> {}

const tiedStatus: TiedStatusInterface = {
  ...api(getTiedStatus),
};

export default tiedStatus;
