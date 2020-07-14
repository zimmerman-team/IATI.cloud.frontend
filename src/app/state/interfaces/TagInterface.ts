import { ActivityStatusModel } from 'app/state/models';
import { getTag } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TagInterface extends ApiModel<ActivityStatusModel[]> {}

const tag: TagInterface = {
  ...api(getTag),
};

export default tag;
