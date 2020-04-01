import { TransactionProviderOrgModel } from 'app/state/models';
import { getTransactionProviderOrgs } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface TransactionProviderOrgScope
  extends ApiModel<TransactionProviderOrgModel[]> {}

const transactionProviderOrgs: TransactionProviderOrgScope = {
  ...api(getTransactionProviderOrgs),
};

export default transactionProviderOrgs;
