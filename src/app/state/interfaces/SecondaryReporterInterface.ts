import { SecondaryReporterModel } from 'app/state/models';
import { getSecondaryReporter } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface SecondaryReporterInterface
  extends ApiModel<SecondaryReporterModel[]> {}

const secondaryReporter: SecondaryReporterInterface = {
  ...api(getSecondaryReporter),
};

export default secondaryReporter;
