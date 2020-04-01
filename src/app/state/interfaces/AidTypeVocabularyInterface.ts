import { ActivityStatusModel } from 'app/state/models';
import { getAidTypeVocabulary } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface AidTypeVocabularyInterface
  extends ApiModel<ActivityStatusModel[]> {}

const aidTypeVocabulary: AidTypeVocabularyInterface = {
  ...api(getAidTypeVocabulary),
};

export default aidTypeVocabulary;
