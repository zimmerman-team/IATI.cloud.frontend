import { ActivityStatusModel } from 'app/state/models';
import { getIatiVersion } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface IATIVersionInterface extends ApiModel<ActivityStatusModel[]> {}

const iatiVersion: IATIVersionInterface = {
  ...api(getIatiVersion),
};

export default iatiVersion;
