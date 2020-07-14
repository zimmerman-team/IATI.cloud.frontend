import { ActivityStatusModel } from 'app/state/models';
import { getHumanitarian } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface HumanitarianInterface
  extends ApiModel<ActivityStatusModel[]> {}

const humanitarian: HumanitarianInterface = {
  ...api(getHumanitarian),
};

export default humanitarian;
