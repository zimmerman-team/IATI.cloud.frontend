import { ActivityStatusModel } from 'app/state/models';
import { getTagVocabularies } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TagVocabularyInterface
  extends ApiModel<ActivityStatusModel[]> {}

const tagVocabulary: TagVocabularyInterface = {
  ...api(getTagVocabularies),
};

export default tagVocabulary;
