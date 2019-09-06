import { TransactionProviderOrgModel } from 'app/state/models';
import { getTransactionReceiverOrgs } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TransactionReceiverOrgsInterface
  extends ApiModel<TransactionProviderOrgModel[]> {}

const transactionReceiverOrgs: TransactionReceiverOrgsInterface = {
  ...api(getTransactionReceiverOrgs),
};

export default transactionReceiverOrgs;
