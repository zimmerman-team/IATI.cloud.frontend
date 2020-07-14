import { ActivityStatusModel } from 'app/state/models';
import { getFinanceType } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface FinanceTypeInterface extends ApiModel<ActivityStatusModel[]> {}

const financeType: FinanceTypeInterface = {
  ...api(getFinanceType),
};

export default financeType;
