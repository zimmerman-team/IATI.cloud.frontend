import { IOrganisationType } from 'app/models/OrganisationTypeModel';
import { getOrganisationTypes } from 'app/services/api-service';
import api, { IApiModel } from 'app/store/api';

export interface IOrganisationTypesInterface
  extends IApiModel<IOrganisationType[]> {}

const organisationTypes: IOrganisationTypesInterface = {
  ...api(getOrganisationTypes)
};

export default organisationTypes;
