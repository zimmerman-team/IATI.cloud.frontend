import { SectorVocabularyModel } from 'app/state/models';
import { getSectorVocabularies } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface SectorVocabularyInterface
  extends ApiModel<SectorVocabularyModel[]> {}

const sectorVocabularies: SectorVocabularyInterface = {
  ...api(getSectorVocabularies),
};

export default sectorVocabularies;
