import { ParticipatingOrgsModel } from 'app/state/models';
import { getParticipatingOrgs } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface ParticipatingOrgsInterface
  extends ApiModel<ParticipatingOrgsModel[]> {}

const participatingOrgs: ParticipatingOrgsInterface = {
  ...api(getParticipatingOrgs),
};

export default participatingOrgs;
