import { RegionModel } from 'app/state/models';
import { getRegions } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface RegionInterface extends ApiModel<RegionModel[]> {}

const regions: RegionInterface = {
  ...api(getRegions),
};

export default regions;
