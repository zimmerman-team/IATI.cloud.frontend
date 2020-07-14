import { ActivityStatusModel } from 'app/state/models';
import { getDefaultCurrency } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface DefaultCurrencyInterface
  extends ApiModel<ActivityStatusModel[]> {}

const defaultCurrency: DefaultCurrencyInterface = {
  ...api(getDefaultCurrency),
};

export default defaultCurrency;
