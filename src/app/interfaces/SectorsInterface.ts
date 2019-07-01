import { ISector } from 'app/models/SectorModel';
import { getSectors } from 'app/services/api-service';
import api, { IApiModel } from 'app/store/api';
import { HOSTNAME, PATH } from 'app/api';

export interface ISectorsInterface
  extends IApiModel<ISector[]> {}

const sectors: ISectorsInterface = {
  ...api(getSectors)
};

export default sectors;
