import {ActivityStatusModel} from 'app/state/models';
import {  getTransactionType } from 'app/state/services/api-service';
import api, {ApiModel} from 'app/state/api';

export interface TransactionTypeInterface
  extends ApiModel<ActivityStatusModel[]> {}

const transactionType: TransactionTypeInterface = {
  ...api(getTransactionType),
};


export default transactionType;
