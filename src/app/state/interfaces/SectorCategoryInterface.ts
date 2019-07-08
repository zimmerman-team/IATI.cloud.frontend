import { SectorCategoryModel } from 'app/state/models';
import { getSectorCategories } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface SectorCategoryInterface
  extends ApiModel<SectorCategoryModel[]> {}

const sectorCategories: SectorCategoryInterface = {
  ...api(getSectorCategories)
};

export default sectorCategories;
