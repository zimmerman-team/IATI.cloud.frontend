import { ActivityStatusModel } from 'app/state/models';
import { getHumanitarianScopeVocab } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface HumanitarianScopeVocabInterface
  extends ApiModel<ActivityStatusModel[]> {}

const humanitarianScopeVocab: HumanitarianScopeVocabInterface = {
  ...api(getHumanitarianScopeVocab),
};

export default humanitarianScopeVocab;
