import { ActivityStatusModel } from 'app/state/models';
import { getOtherIdentifierType } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface OtherIdentifierTypeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const otherIdentifierType: OtherIdentifierTypeInterface = {
  ...api(getOtherIdentifierType),
};

export default otherIdentifierType;
