import { ActivityStatusModel } from 'app/state/models';
import { getTransactionHumanitarian } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TransactionHumanitarianInterface
  extends ApiModel<ActivityStatusModel[]> {}

const transactionHumanitarian: TransactionHumanitarianInterface = {
  ...api(getTransactionHumanitarian),
};

export default transactionHumanitarian;
