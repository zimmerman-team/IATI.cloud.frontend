import { ActivityStatusModel } from 'app/state/models';
import { getHumanitarianScope } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface HumanitarianScopeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const humanitarianScope: HumanitarianScopeInterface = {
  ...api(getHumanitarianScope),
};

export default humanitarianScope;
