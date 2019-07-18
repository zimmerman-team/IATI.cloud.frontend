import { SectorModel } from 'app/state/models';
import { getSectors } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface SectorsInterface extends ApiModel<SectorModel[]> {}

const sectors: SectorsInterface = {
  ...api(getSectors),
};

export default sectors;
