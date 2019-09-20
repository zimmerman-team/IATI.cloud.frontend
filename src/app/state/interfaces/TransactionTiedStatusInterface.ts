import {ActivityStatusModel} from 'app/state/models';
import {  getTransactionTiedStatus } from 'app/state/services/api-service';
import api, {ApiModel} from 'app/state/api';

export interface TransactionTiedStatusInterface
  extends ApiModel<ActivityStatusModel[]> {}

const transactionTiedStatus: TransactionTiedStatusInterface = {
  ...api(getTransactionTiedStatus),
};


export default transactionTiedStatus;
