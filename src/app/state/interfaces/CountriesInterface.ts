import { CountryModel } from 'app/state/models';
import { getCountries } from 'app/state/services/api-service';
import api, { ApiModel } from 'app/state/api';

export interface CountryInterface extends ApiModel<CountryModel[]> {}

const countries: CountryInterface = {
  ...api(getCountries)
};

export default countries;
