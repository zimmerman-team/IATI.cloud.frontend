import { ActivityStatusModel } from 'app/state/models';
import { getTransactionFlowType } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TransactionFlowTypeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const transactionFlowType: TransactionFlowTypeInterface = {
  ...api(getTransactionFlowType),
};

export default transactionFlowType;
